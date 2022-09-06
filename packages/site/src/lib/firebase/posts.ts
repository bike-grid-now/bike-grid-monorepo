import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { withId, withIds, type Post } from "@bike-grid-now/cms";
import { db } from "./db";

export async function getPosts() {
  const postsRef = collection(db, "posts");
  const q = query(postsRef);

  const querySnapshot = await getDocs(q);

  return withIds<Post>(querySnapshot);
}

export async function getPost(slug: string) {
    const snapshot = await getDoc(doc(db, "events", slug));
    const data = withId<Post>(snapshot);
  
    if (!data) return undefined;
  
    return data;
    // return stringifyEvent(data);
  }