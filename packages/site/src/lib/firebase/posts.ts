import { collection, getDocs, query } from "firebase/firestore";
import { withIds, type Post } from "@bike-grid-now/cms";
import { db } from "./db";

export async function getPosts() {
  const postsRef = collection(db, "posts");
  const q = query(postsRef);

  const querySnapshot = await getDocs(q);

  return withIds<Post>(querySnapshot);
}
