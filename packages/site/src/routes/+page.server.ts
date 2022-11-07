import { upcomingEvents, pastEvents, type Event } from "$lib/sanity";
import { getCallsToAction, type CallToAction } from "$lib/sanity/callsToAction";
import type { PageServerLoad } from "./$types";

function mapEvent({
  slug: { current: slug },
  name,
  date: { local: date },
  poster,
}: Event) {
  return { slug, name, date, poster };
}

function mapCTA({ text, link, enabled }: CallToAction) {
  return { text, link, enabled };
}

export const load: PageServerLoad = async ({ parent }) => {
  const [futureEventsList, pastEventsList, callsToAction, { siteSettings }] =
    await Promise.all([
      upcomingEvents(),
      pastEvents(),
      getCallsToAction(),
      parent(),
    ]);

  return {
    pastEvents: pastEventsList.map(mapEvent) || [],
    upcomingEvents: futureEventsList.map(mapEvent) || [],
    callsToAction: callsToAction.map(mapCTA) || [],
    siteSettings,
  };
};
