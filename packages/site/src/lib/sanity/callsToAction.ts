import { client } from "./client";

export interface CallToAction {
  text: string;
  link: string;
  enabled: boolean;
}

const callToActionProjection = `{
  text,
  link,
  enabled
}`;

// const callToActionQuery = `*[_type == "callToAction"] | [enabled == true]`;
const callToActionQuery = `*[_type == "callToAction" && enabled == true]`;

export async function getCallsToAction() {
  const query = callToActionQuery + callToActionProjection;
  const results: CallToAction[] = await client.fetch(query);
  console.log(results);
  return results;
}
