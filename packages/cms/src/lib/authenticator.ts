import { cmsQuery } from "./firebase";
import { User as FirebaseUser } from "firebase/auth";
import { Authenticator } from "@camberi/firecms";
import { adminsCollection } from "../collections";

export const authenticator: Authenticator<FirebaseUser> = async ({ user }) => {
  const admins = await cmsQuery.fetchCollection({
    collection: adminsCollection,
  });

  const adminEmails = admins.map((x) => x.values.email);

  if (user?.email && adminEmails.includes(user.email.toLowerCase())) {
    return true;
  } else {
    throw Error("This user has not been authorized to access this application");
  }
};
