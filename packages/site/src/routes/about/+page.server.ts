import { getOrganizers } from "$lib/sanity";

/** @type {import('./$types').PageLoad} */
export async function load() {
  return {
    organizers: await getOrganizers(),
  };
}
