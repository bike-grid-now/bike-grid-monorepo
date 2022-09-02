import type * as cms from "@camberi/firecms";
import type * as fs from "firebase/firestore";

/**
 * When FireCMS loads data from the database, it marshals it into its own CMS types.
 * When we load the data in SvelteKit, we're not doing this marshalling (do NOT import the FireCMS code in SvelteKit).
 * When loading document data from Firebase directly, instead of it being `Type`, make it `FirebaseType<Type>`.
 * For example, if you're loading events load them as `FirebaseType<Event>` instead of just `Event`. This makes sure
 * there are no type errors.
 */
export type FirebaseType<M extends cms.CMSType> = M extends Date
  ? fs.Timestamp
  : M extends cms.GeoPoint
  ? fs.GeoPoint
  : M extends cms.EntityReference
  ? fs.DocumentReference
  : M extends Record<any, cms.CMSType>
  ? {
      [Key in keyof M]: Key extends string | number
        ? FirebaseType<M[Key]>
        : never;
    }
  : M extends cms.CMSType[]
  ? Array<FirebaseType<M[any]>>
  : M;
