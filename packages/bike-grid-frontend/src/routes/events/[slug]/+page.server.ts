import { error } from "@sveltejs/kit";
import { getEvent } from "$lib/firebase";
import { headers } from "$lib/caching";

/** @type {import('./$types').PageLoad} */
export async function load({ params: { slug }, setHeaders }) {
  const event = await getEvent(slug);

  setHeaders(headers);

  if (event) {
    return {
      event,
    };
  }

  throw error(404, "Not found");
}
