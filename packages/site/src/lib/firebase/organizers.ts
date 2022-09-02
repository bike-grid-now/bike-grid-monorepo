import { collection, getDocs, query } from "firebase/firestore";
import { withIds, type Organizer } from "@bike-grid-now/cms";
import { db } from "./db";

export async function getOrganizers() {
  const organizersRef = collection(db, "organizers");
  const q = query(organizersRef);

  const querySnapshot = await getDocs(q);

  return withIds<Organizer>(querySnapshot);
}
