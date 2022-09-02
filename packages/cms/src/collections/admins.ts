import { buildCollection } from "@camberi/firecms";

export type Admin = {
  email: string;
};

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
