import { buildCollection } from "@camberi/firecms";
import { Organizer } from "./types";

export const organizersCollection = buildCollection<Organizer>({
  name: "Organizers",
  singularName: "Organizer",
  path: "organizers",
  properties: {
    name: {
      name: "Name",
      dataType: "string",
      validation: { required: true },
    },
    description: {
      name: "Description",
      dataType: "string",
      multiline: true,
      validation: { required: true },
    },
    image: {
      name: "Image",
      dataType: "string",
      storage: {
        storagePath: "images",
        acceptedFiles: ["image/*"],
      },
    },
  },
});
