import * as cms from "@camberi/firecms";
import * as fs from "firebase/firestore";

/**
 *
 * This file contains an object used for querying objects in Firestore using the collection configs defined
 * in the CMS. It handles marshalling + unmarshalling the data from Firestore automatically. So instead of
 * having to parse dates or remember field names, TypeScript will automatically pick up the names of the fields and stuff.
 *
 * This code is lifted straight from the FireCMS source code. I rewrote it to be simpler and extracted most of the types
 * from the code into here. Some of it's a little more complicated but it works.
 *
 */

/**
 * Represents any collection type.
 */
interface AnyCollectionConfig {
  [key: string]: cms.CMSType;
}

/**
 * Gets the keys of an object that are strings.
 */
type StringKeys<M extends {}> = Extract<keyof M, string>;

/**
 * Object used to filter a collection's values.
 */
type FilterValues<M extends AnyCollectionConfig> = Partial<
  Record<StringKeys<M>, [fs.WhereFilterOp, any]>
>;

/**
 * Firestore only allows a single `orderBy` query on only one of the fields
 * you've limited by. So we have to have access to the fields we've filtered by here.
 */
type OrderBy<F extends FilterValues<any>> = Extract<keyof F, string>;

/**
 * The props passed into the `fetchCollection` function. Allows you to filter,
 * sort, and limit the collection query.
 */
interface FetchCollectionProps<
  M extends AnyCollectionConfig,
  Filter extends FilterValues<M>
> {
  collection: cms.EntityCollection<M> | cms.ResolvedEntityCollection<M>;
  filter?: Filter;
  limit?: number;
  startAfter?: any[];
  order?: "desc" | "asc";
  orderBy?: OrderBy<Filter>;
}

export class CmsQuery {
  constructor(private firestore: fs.Firestore) {}

  /**
   * Fetches data from a given `collection`, marshalling the data into the shape FireCMS expects.
   * @param props Object containing the FireCMS `collection` definition, along with various filters you can apply.
   * @returns A promise that resolves to an array of all the matching entities.
   */
  async fetchCollection<
    M extends AnyCollectionConfig,
    F extends FilterValues<M>
  >(props: FetchCollectionProps<M, F>): Promise<cms.Entity<M>[]> {
    const query = this.buildQuery(props);

    const snapshot = await fs.getDocs(query);

    return snapshot.docs.map((doc) => getDoc(doc, props.collection));
  }

  /**
   * Private method that handles building the query to Firestore given an object. Iteratively goes over
   * each of the fields in the object, adds query objects to an array, then uses `fs.query` to return them all in one
   * big query.
   * @param param0 The same config passed to `fetchCollection`.
   * @returns A firestore query.
   */
  private buildQuery<M extends AnyCollectionConfig, F extends FilterValues<M>>({
    collection,
    filter,
    limit,
    order,
    orderBy,
    startAfter,
  }: FetchCollectionProps<M, F>) {
    const collectionReference: fs.Query = fs.collection(
      this.firestore,
      collection.path
    );

    const queryParams = [];
    if (filter) {
      Object.entries(filter)
        .filter(([_, entry]) => !!entry)
        .forEach(([key, filterParameter]) => {
          const [op, value] = filterParameter as [cms.WhereFilterOp, any];
          queryParams.push(
            fs.where(key, op, cms.cmsToFirestoreModel(value, this.firestore))
          );
        });
    }

    if (filter && orderBy && order) {
      Object.entries(filter).forEach(([key, value]) => {
        if (key !== orderBy) {
          queryParams.push(fs.orderBy(key, "asc"));
        }
      });
    }

    if (orderBy && order) {
      queryParams.push(fs.orderBy(orderBy, order));
    }

    if (startAfter) {
      queryParams.push(fs.startAfter(startAfter));
    }

    if (limit) {
      queryParams.push(fs.limit(limit));
    }

    return fs.query(collectionReference, ...queryParams);
  }
}

/**
 * Remove id from Firestore path
 * @param fsPath
 */
function getCMSPathFromFirestorePath(fsPath: string): string {
  let to = fsPath.lastIndexOf("/");
  to = to === -1 ? fsPath.length : to;
  return fsPath.substring(0, to);
}

/**
 * Converts a firestore entity into a FireCMS entity given a firestore doc and a resolved entity collection.
 * @param doc
 * @param resolvedCollection
 * @returns
 */
function createEntityFromCollection<M extends { [Key: string]: cms.CMSType }>(
  doc: fs.DocumentSnapshot,
  resolvedCollection: cms.ResolvedEntityCollection<M>
): cms.Entity<M> {
  const values = cms.firestoreToCMSModel(doc.data());
  const data = doc.data()
    ? resolvedCollection.properties
      ? cms.sanitizeData(
          values as cms.EntityValues<M>,
          resolvedCollection.properties
        )
      : doc.data()
    : undefined;
  return {
    id: doc.id,
    path: getCMSPathFromFirestorePath(doc.ref.path),
    values: data,
  };
}

/**
 * Converts a snapshot of a doc into a FireCMS entity.
 * @param docSnapshot
 * @param collection
 * @returns
 */
export function getDoc<M extends { [key: string]: cms.CMSType }>(
  docSnapshot: fs.QueryDocumentSnapshot<fs.DocumentData>,
  collection: cms.EntityCollection<M> | cms.ResolvedEntityCollection<M>
) {
  const path = getCMSPathFromFirestorePath(docSnapshot.ref.path);
  const resolvedCollection = cms.resolveCollection<M>({
    collection,
    path,
    values: cms.firestoreToCMSModel(docSnapshot.data()),
  });

  return createEntityFromCollection(docSnapshot, resolvedCollection);
}

/**
 * Converts a query snapshot into an array of FireCMS entities.
 * @param snapshot
 * @param collection
 * @returns
 */
export function getQueryDocs<M extends { [key: string]: cms.CMSType }>(
  snapshot: fs.QuerySnapshot<fs.DocumentData>,
  collection: cms.EntityCollection<M> | cms.ResolvedEntityCollection<M>
) {
  return snapshot.docs.map((doc) => getDoc(doc, collection));
}
