import { error } from "@sveltejs/kit";
import { postFromSlug } from "$lib/sanity";

/** @type {import('./$types').PageLoad} */
export async function load({ params: { slug } }) {
  const post = await postFromSlug(slug);

  if (post !== null) {
    return {
      post,
    };
  }

  throw error(404, "Not found");
}
