import { error } from "@sveltejs/kit";
import { headers } from "$lib/caching";
import { eventFromSlug } from "$lib/sanity";

/** @type {import('./$types').PageLoad} */
export async function load({ params: { slug }, setHeaders }) {
  const event = await eventFromSlug(slug);

  setHeaders(headers);

  if (event !== null) {
    return {
      event,
    };
  }

  throw error(404, "Not found");
}
