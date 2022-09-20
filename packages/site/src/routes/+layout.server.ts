import { headers } from "$lib/caching";
import { getSiteSettings, type SiteSettings } from "$lib/sanity";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({
  setHeaders,
}): Promise<{ siteSettings: SiteSettings }> => {
  setHeaders(headers);

  const siteSettings = await getSiteSettings();

  return { siteSettings };
};
