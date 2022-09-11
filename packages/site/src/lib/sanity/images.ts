export interface Image {
  altText: string;
  imageUrl: string;
}

export const imageProjection = `{
  altText,
  "imageUrl": asset->url
}`;
