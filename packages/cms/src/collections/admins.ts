import { buildCollection } from "@camberi/firecms";
import { Admin } from "./types";

export const adminsCollection = buildCollection<Admin>({
  name: "Admins",
  singularName: "Admin",
  path: "admins",
  properties: {
    email: {
      name: "Email",
      dataType: "string",
      validation: { required: true },
    },
  },
});
