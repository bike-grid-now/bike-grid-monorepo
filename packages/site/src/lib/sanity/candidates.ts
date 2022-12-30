import { client } from "./client";

export interface Candidate {
  name: string;
  office: {
    name: string;
  };
  supportsPlatform: boolean;
}

const mayoralCandidatesQuery = `*[_type == "candidate" && office->name == "Mayor"] | order(office->ward, office->name, name) {
  ...,
	office->{...}
}`;

const regularCandidatesQuery = `*[_type == "candidate" && office->name != "Mayor"] | order(office->ward, office->name, name) {
 ...,
 office->{...}
}`;

export async function getCandidates() {
  const mayoralCandidates: Candidate[] = await client.fetch(
    mayoralCandidatesQuery
  );
  const regularCandidates: Candidate[] = await client.fetch(
    regularCandidatesQuery
  );

  return {
    mayoralCandidates,
    regularCandidates,
  };
}
