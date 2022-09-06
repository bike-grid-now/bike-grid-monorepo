import { error } from "@sveltejs/kit";
import { headers } from "$lib/caching";
import { getPost } from "$lib/firebase/posts";

/** @type {import('./$types').PageLoad} */
export async function load({ params: { slug }, setHeaders }) {
  const post = await getPost(slug);
  
  setHeaders(headers);

  if (post) {
    return {
        post,
    };
  }

  throw error(404, "Not found");
}
