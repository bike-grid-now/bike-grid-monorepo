export interface Image {
  altText: string;
  image: {
    url: string;
    assetId: string;
  };
}

export const imageProjection = `{
  altText,
  "image": asset->{...}
}`;
