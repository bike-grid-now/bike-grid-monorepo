import { collection, doc, getDoc, getDocs, limit, query, where } from "firebase/firestore";
import { withId, withIds, type FirebaseType, type Post, type WithId } from "@bike-grid-now/cms";
import { db } from "./db";

export type StringifiedPost = Omit<WithId<FirebaseType<Post>>, "createdOn" | "updatedOn"> & {
    createdOn: string;
    updatedOn: string;
};

export type ParsedPost = Omit<StringifiedPost, "createdOn" | "updatedOn"> & {
    createdOn: Date;
    updatedOn: Date;
};

function stringifyPost(post: WithId<FirebaseType<Post>>): StringifiedPost {
    return {
      ...post,
      createdOn: post.createdOn.toDate().toString(),
      updatedOn: post.updatedOn.toDate().toString(),
    };
}

export function parsePost(post: StringifiedPost): ParsedPost {
    return {
      ...post,
      createdOn: new Date(post.createdOn),
      updatedOn: new Date(post.updatedOn),
    };
}

export async function getPosts() {
  const postsRef = collection(db, "posts");
  const q = query(postsRef);

  const querySnapshot = await getDocs(q);

  return withIds<Post>(querySnapshot);
}

export async function getPost(slug: string) {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, where("postLink", "==", slug), limit(1))
    const querySnapshot = await getDocs(q);

    return withIds<Post>(querySnapshot);

    // console.log('data', querySnapshot)

    // const data = withId<Post>(querySnapshot[0]);


    // if (!data) return undefined;

    // return stringifyPost(data);

    // console.log(querySnapshot)

    // return querySnapshot[0];
    // const snapshot = await getDoc(doc(db, "posts", slug));

    // const data = withId<Post>(querySnapshot);

    // return querySnapshot;
    // return stringifyPost(data);
  }