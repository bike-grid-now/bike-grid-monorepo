import { getEvents } from "$lib/firebase";
import { headers } from "$lib/caching";
import { upcomingEvents, pastEvents, type Event } from "$lib/sanity";

function mapEvent({
  slug: { current: slug },
  name,
  date: { local: date },
  poster,
}: Event) {
  return { slug, name, date, poster };
}

/** @type {import('./$types').PageLoad} */
export async function load({ setHeaders }) {
  setHeaders(headers);

  const [future, past] = await Promise.all([upcomingEvents(), pastEvents()]);

  return {
    events: await getEvents(),
    pastEvents: past.map(mapEvent),
    upcomingEvents: future.map(mapEvent),
  };
}
