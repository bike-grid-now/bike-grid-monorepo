import sanityClient from "@sanity/client";
import makeImageBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "0tfynaki",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});

export const imageBuilder = makeImageBuilder(client);
