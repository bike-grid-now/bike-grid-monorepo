import { FirebaseType } from "./firebaseType";
import {
  DocumentData,
  DocumentSnapshot,
  QuerySnapshot,
} from "firebase/firestore";

export type WithId<K extends {}> = K & { id: string };

export function withId<K extends { [key: string]: any }>(
  snapshot: DocumentSnapshot<DocumentData>
): WithId<FirebaseType<K>> | null {
  const data = snapshot.data();
  if (!data) return null;

  return {
    ...data,
    id: snapshot.id,
  } as any;
}

export function withIds<K extends { [key: string]: any }>(
  snapshot: QuerySnapshot<DocumentData>
): Array<WithId<FirebaseType<K>>> {
  return snapshot.docs
    .map(withId)
    .filter((x): x is Exclude<typeof x, null> => x !== null) as any;
}
