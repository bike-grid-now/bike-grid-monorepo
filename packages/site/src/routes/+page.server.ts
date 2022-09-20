import { upcomingEvents, pastEvents, type Event } from "$lib/sanity";
import type { PageServerLoad } from "./$types";

function mapEvent({
  slug: { current: slug },
  name,
  date: { local: date },
  poster,
}: Event) {
  return { slug, name, date, poster };
}

export const load: PageServerLoad = async ({ parent }) => {
  const [futureEventsList, pastEventsList, { siteSettings }] =
    await Promise.all([upcomingEvents(), pastEvents(), parent()]);

  return {
    pastEvents: pastEventsList.map(mapEvent) || [],
    upcomingEvents: futureEventsList.map(mapEvent) || [],
    siteSettings,
  };
};
