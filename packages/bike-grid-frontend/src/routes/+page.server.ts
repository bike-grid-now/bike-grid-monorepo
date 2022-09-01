import { getEvents } from "$lib/firebase";
import { headers } from "$lib/caching";

/** @type {import('./$types').PageLoad} */
export async function load({ setHeaders }) {
  setHeaders(headers);

  return {
    events: await getEvents(),
  };
}
