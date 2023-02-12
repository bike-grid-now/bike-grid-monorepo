import { client } from "./client";
import { type Image, imageProjection } from "./images";

const blockContentProjection = `[]{
  ...select(_type == 'image' => ${imageProjection}),
  ...select(_type != 'image' => {...}),
  _type
}`;

const postsProjection = `{
  ...,
  image${imageProjection},
  body${blockContentProjection}
}`;

interface DateType {
  local: string;
  utc: string;
}

export interface Post {
  _type: "event";
  title: string;
  subtitle?: string;
  body: any[];
  image?: Image;
  slug: {
    current: string;
  };
  date: DateType;
}

const postsQuery = `*[_type == "post"]`;

export async function postFromSlug(slug: string): Promise<Post | null> {
  const query = postsQuery + `[slug.current == "${slug}"]` + postsProjection;
  const result: Post[] = await client.fetch(query);
  if (result.length !== 1) return null;

  return result[0];
}
