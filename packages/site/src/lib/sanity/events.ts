import { client } from "./client";

const imageProjection = `{
  altText,
  "imageUrl": asset->url
}`;

const eventsProjection = `{
  ...,
  poster${imageProjection},
  media[]${imageProjection}
}`;

interface Image {
  altText: string;
  imageUrl: string;
}

interface DateType {
  local: string;
  utc: string;
}

export interface Event {
  _type: "event";
  name: string;
  rsvpLink?: string;
  date: DateType;
  poster?: Image;
  media?: Image[];
  slug: {
    current: string;
  };
  description?: unknown;
}

const eventsQuery = `*[_type == "event"]`;

export async function upcomingEvents() {
  const query =
    eventsQuery +
    "[dateTime(date.utc) >= dateTime(now())] | order(dateTime(date.utc))" +
    eventsProjection;
  const results: Event[] = await client.fetch(query);

  return results;
}

export async function pastEvents() {
  const query =
    eventsQuery +
    "[dateTime(date.utc) < dateTime(now())] | order(dateTime(date.utc) desc)" +
    eventsProjection;
  const result: Event[] = await client.fetch(query);
  return result;
}

export async function eventFromSlug(slug: string): Promise<Event | null> {
  const query = eventsQuery + `[slug == "${slug}"]` + eventsProjection;

  const results: Event[] = await client.fetch(query);
  if (results.length === 0) return null;

  return results[0];
}
