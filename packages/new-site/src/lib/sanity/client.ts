import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "0tfynaki",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: false,
});
