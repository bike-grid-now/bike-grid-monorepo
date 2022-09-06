import {
  collection,
  getDocs,
  doc,
  getDocFromServer,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import {
  User as FirebaseUser,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";
import { Authenticator } from "@camberi/firecms";
import { User } from "../../types";

const auth = getAuth();

async function makeOrGetUserDoc(userId: string, userEmail: string) {
  const userDoc = doc(db, "users", userId);
  const snapshot = await getDocFromServer(userDoc);

  if (!snapshot.exists()) {
    await setDoc<User>(userDoc as any, {
      admin: false,
      email: userEmail,
    });

    return (await getDocFromServer(userDoc)).data() as User;
  } else return snapshot.data() as User;
}

onAuthStateChanged(auth, async (user) => {
  // User is signed in
  if (user && user.email) {
    await makeOrGetUserDoc(user.uid, user.email);
  }
});

export const authenticator: Authenticator<FirebaseUser> = async ({ user }) => {
  if (!user) {
    throw new Error("User must be logged in");
  }
  if (!user.email) throw new Error("User must have email.");

  const userDoc = await makeOrGetUserDoc(user.uid, user.email);
  if (userDoc.admin === false) throw new Error("You cannot access this page.");

  return userDoc.admin === true;
};
