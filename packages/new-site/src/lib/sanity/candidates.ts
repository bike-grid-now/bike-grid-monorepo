import { client } from "./client";

export interface Candidate {
  name: string;
  office: {
    name: string;
    wardNumber: number;
  };
  supportsPlatform: boolean;
}

const mayoralCandidatesQuery = `*[_type == "candidate" && office->name == "Mayor"] | order(name) {
  ...,
	office->{...}
}`;

const regularCandidatesQuery = `*[_type == "candidate" && office->name != "Mayor"] | order(office->wardNumber, office->name, name) {
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
