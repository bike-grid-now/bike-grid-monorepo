import { error } from "@sveltejs/kit";
import { eventFromSlug } from "$lib/sanity";

/** @type {import('./$types').PageLoad} */
export async function load({ params: { slug } }) {
  const event = await eventFromSlug(slug);

  if (event !== null) {
    return {
      event,
    };
  }

  throw error(404, "Not found");
}
