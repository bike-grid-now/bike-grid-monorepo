import {
  collection,
  getDocs,
  query,
  orderBy,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "./db";
import { withId, withIds } from "@bike-grid-now/cms";
import type { Event, FirebaseType, WithId } from "@bike-grid-now/cms";

export type StringifiedEvent = Omit<WithId<FirebaseType<Event>>, "date"> & {
  date: string;
};
export type ParsedEvent = Omit<StringifiedEvent, "date"> & { date: Date };

function stringifyEvent(event: WithId<FirebaseType<Event>>): StringifiedEvent {
  return {
    ...event,
    date: event.date.toDate().toString(),
  };
}

export function parseEvent(event: StringifiedEvent): ParsedEvent {
  return {
    ...event,
    date: new Date(event.date),
  };
}

export async function getEvents() {
  const eventsRef = collection(db, "events");
  const q = query(eventsRef, orderBy("date"));

  const querySnapshot = await getDocs(q);

  const events = withIds<Event>(querySnapshot).map(stringifyEvent);

  return events;
}

export async function getEvent(slug: string) {
  const snapshot = await getDoc(doc(db, "events", slug));
  const data = withId<Event>(snapshot);

  if (!data) return undefined;

  return stringifyEvent(data);
}
