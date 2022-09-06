/**
 * This file only contains the types for collections. Do NOT import any FireCMS code directly, only import types.
 * If you import FireCMS code directly, Vite / SvelteKit will load 2.5MB of unnecessary JS because the FireCMS authors
 * fucked up and didn't code split things properly.
 * 
 * To get around this, we put our type definitions here (which Vite just rips out of the JS) and import them in the SvelteKit
 * app. When using these in the SvelteKit app, *always coerce them as `FirebaseType` (defined in `./index.ts`), not the bare type. 
 * This is because FireCMS uses types that differ from standard Firestore types. For example, after loading data from the DB, 
 * FireCMS converts all `Timestamp` Firestore objects into native `Date` objects.
 * 
 * So if you have a query like this, you should unmarshal it like this:
 * 
 * ```
 * import { query, where, collection, getDocs } from 'firestore'
 * import { FirebaseType, Event } from '@bike-grid-now/cms'
 * 
 * // Example: loading events from the database.
 * const collection = collection(db, 'events')
 * 
 * // Load all events today or later.
 * const query = query(collection, where('date', '>=', new Date().toString()))
 * 
 * // `getDocs` returns a *snapshot*, not an array of the documents. `snapshot.docs` contains an array of the docs.
 * const snapshot = await getDocs(query)

 * // Map each doc to its document data. The array is now a `Array<FirebaseType<Event>>`.
 * const docs = snapshot.docs.map(x => x.data() as FirebaseType<Event>);
 * ```
 */

import type { EntityReference } from "@camberi/firecms";

export type Event = {
  eventName: string;
  date: Date;
  rsvpLink: string;
  wards: EntityReference[];
  poster: string;
  media: string[];
};

export type Organizer = {
  name: string;
  description: string;
  image: string;
};

export type Ward = {
  wardNumber: number;
  alderName: string;
  email: string;
  phone: string;
};

export type Post = {
  postLink: string;
  title: string;
  subtitle: string;
  image: string;
  body: string;
  createdOn: Date;
  updatedOn: Date;
};

export type User = {
  admin: boolean;
  email: string;
};
