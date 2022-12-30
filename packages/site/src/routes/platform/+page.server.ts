import { getCandidates } from "$lib/sanity/candidates";
import { getSiteSettings } from "$lib/sanity/siteSettings";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const results = await getCandidates();
  const siteSettings = await getSiteSettings();

  return {
    ...results,
    ...siteSettings,
  };
};
