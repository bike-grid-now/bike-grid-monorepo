import { client } from "./client";
import { type Image, imageProjection } from "./images";

export interface SiteSettings {
  title: string;
  description: string;
  heroTitle: string;
  heroTagline: string;
  heroImage: Image;
  platformText: any;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const query = `*[_type == "siteSettings" && _id == "siteSettings"] { ..., heroImage${imageProjection} }`;
  const document = await client.fetch(query);

  if (!document || !(document.length > 0)) {
    throw new Error("Error: could not get site settings from Sanity.");
  }

  return document[0];
}
