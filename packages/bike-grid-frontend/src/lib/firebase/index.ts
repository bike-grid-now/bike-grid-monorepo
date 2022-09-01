import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_PUBLIC_FIREBASE_API_KEY,
  authDomain: "bike-grid-now.firebaseapp.com",
  projectId: "bike-grid-now",
  storageBucket: "bike-grid-now.appspot.com",
  messagingSenderId: "87272368171",
  appId: "1:87272368171:web:07c10c4954cf7fa7ef226e",
  measurementId: "G-EDKYCVXXW8",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getEvents() {
  const eventsRef = collection(db, "events");
  const q = query(eventsRef, orderBy("date"));

  const querySnapshot = await getDocs(q);

  const events = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return { ...data, id: doc.id, date: data.date.toDate().toString() };
  });

  return events;
}

export async function getOrganizers() {
  const organizersRef = collection(db, "organizers");
  const q = query(organizersRef);

  const querySnapshot = await getDocs(q);

  let organizers = querySnapshot.docs.map((doc) => ({ ...doc.data() }));

  return organizers;
}

export async function getEvent(slug) {
  const events = await getEvents();

  return events.find((event) => event.id === slug);
}
