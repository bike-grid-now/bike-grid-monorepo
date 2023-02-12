import { type Image, imageProjection } from "./images";
export const blockContentProjection = `[]{
  ...select(_type == 'image' => ${imageProjection}),
  ...select(_type != 'image' => {...}),
  _type
}`;
