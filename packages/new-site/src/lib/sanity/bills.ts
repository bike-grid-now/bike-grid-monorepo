import { client } from "./client";

export interface Bill {
  title: string;
  slipLink: string;
	billLink: string;
	summary: string;
  position: "proponent" | "opponent";
	active: boolean;
}

const billQuery = `*[_type == "bill" && active == true]`;
const billQuery2 = `*[_type == "bill" && active == false]`;

export async function getBills() {
  const bills: Bill[] = await client.fetch(
    billQuery
  );

	const pastBills: Bill[] = await client.fetch(
		billQuery2
	)

  return {
    bills,
		pastBills
  };
}
