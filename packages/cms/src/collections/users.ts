import { User } from "./types";
import { buildCollection } from "@camberi/firecms";

export const usersCollection = buildCollection<User>({
  name: "Users",
  singularName: "User",
  path: "users",
  description: "Manage users in the CMS",
  group: "Content",
  icon: "AdminPanelSettings",

  customId: true,
  properties: {
    admin: {
      dataType: "boolean",
      defaultValue: false,
      description: "Admin?",
      longDescription:
        "Gives user full access to the app and allows them to make any changes they want. Make sure the ID of the document is the same as the user ID.",
    },
    email: {
      dataType: "string",
      description: "Email",
      readOnly: true,
      validation: {
        min: 3,
      },
    },
  },
});
