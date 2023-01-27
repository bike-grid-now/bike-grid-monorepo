import type { HTMLAttributes } from "astro/types";
export type Test = HTMLAttributes<"svg">;

export interface Props extends Test {
  name: string;
}
