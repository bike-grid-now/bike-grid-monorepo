import { client } from "./client";
import { type Image, imageProjection } from "./images";

export interface Organizer {
  name: string;
  description: any[];
  image?: Image;
}

const organizerProjection = `{
  name,
  description,
  image${imageProjection}
}`;

const organizerQuery = `*[_type == "organizer"] | order(name)`;

export async function getOrganizers() {
  const query = organizerQuery + organizerProjection;
  const results: Organizer[] = await client.fetch(query);
  return results;
}
