import { collection, where, query, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { User as FirebaseUser } from "firebase/auth";
import { Authenticator } from "@camberi/firecms";
import { Admin, FirebaseType } from "../../types";

export const authenticator: Authenticator<FirebaseUser> = async ({ user }) => {
  const snapshot = await getDocs(collection(db, "admins"));
  const admins = snapshot.docs.map((x) => x.data() as FirebaseType<Admin>);

  const adminEmails = admins.map((x) => x.email);

  if (user?.email && adminEmails.includes(user.email.toLowerCase())) {
    return true;
  } else {
    throw Error("This user has not been authorized to access this application");
  }
};
