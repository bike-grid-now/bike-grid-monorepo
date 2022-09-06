import type { RequestHandler } from "./$types";
import Sharp from "sharp";

const sharpParamNames = ["w", "h", "format"] as const;
const availableFormats = ["png", "webp", "avif"] as const;

export const GET: RequestHandler = async ({ request, params, url }) => {
  const queryParams = new URL(request.url).searchParams;
  const imageUrl = decodeURIComponent(queryParams.get("url"));

  let parsed: URL;

  try {
    parsed = new URL(imageUrl);
  } catch (e) {
    parsed = new URL(imageUrl, url.origin);
  }

  console.log(parsed);

  const image = await fetch(parsed, {
    method: "GET",
  });
  let bytes: Blob | Buffer = await image.blob();

  if (sharpParamNames.some((x) => queryParams.has(x))) {
    const arrayBuf = await bytes.arrayBuffer();
    const typedArray = new Uint8Array(arrayBuf);
    let sharp = Sharp(typedArray);

    const width = queryParams.get("w");
    const height = queryParams.get("h");
    if (width || height) {
      sharp = sharp.resize({
        height: height && parseInt(height),
        width: width && parseInt(width),
      });
    }

    const format = queryParams.get("format");
    const quality = queryParams.get("quality");
    if (format && availableFormats.includes(format as any)) {
      sharp = sharp.toFormat(format as typeof availableFormats[0], {
        quality: quality && parseInt(quality),
        // nearLossless: quality !== undefined && quality !== null,
      });
    }

    bytes = await sharp.toBuffer();
  }

  const response = new Response(bytes);
  const format = queryParams.get("format");
  if (format && availableFormats.includes(format as any)) {
    response.headers.set("content-type", `image/${format}`);
  } else {
    response.headers.set("content-type", image.headers.get("content-type"));
  }

  const validFor = 12 * 60 * 60;
  const revalidateAfter = 24 * 60 * 60;
  response.headers.set(
    "cache-control",
    `s-maxage=${validFor}, stale-while-revalidate=${revalidateAfter}`
  );

  return response;
};
