import { buildCollection } from "@camberi/firecms";
import { Admin } from "./types";

export const adminsCollection = buildCollection<Admin>({
  name: "Admins",
  singularName: "Admin",
  path: "admins",
  description: "Add admins to the CMS",
  group: "Content",
  icon: "AdminPanelSettings",
  properties: {
    email: {
      name: "Email",
      dataType: "string",
      validation: { required: true },
    },
  },
});
