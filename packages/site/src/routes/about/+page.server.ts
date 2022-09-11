import { getOrganizers } from "$lib/sanity";
import { headers } from "$lib/caching";

/** @type {import('./$types').PageLoad} */
export async function load({ setHeaders }) {
  setHeaders(headers);

  return {
    organizers: await getOrganizers(),
  };
}
