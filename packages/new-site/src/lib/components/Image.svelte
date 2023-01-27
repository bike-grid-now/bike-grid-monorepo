<script type="ts">
  export let src: string;
  export let alt: string;

  export let width: number;
  export let quality: number | undefined = 80;
  export let style: string | undefined = undefined;

  function generateImageUrl(
    path: string,
    width: number,
    format?: string | undefined
  ) {
    const urlParams = new URLSearchParams();
    urlParams.append("url", encodeURIComponent(path));
    urlParams.append("w", width.toString());
    if (format) {
      urlParams.append("format", format);
    }
    urlParams.append("quality", quality.toString());

    return `/images?${urlParams.toString()}`;
  }
</script>

<picture>
  <source srcset={generateImageUrl(src, width, "webp")} type="image/webp" />

  <img src={generateImageUrl(src, width)} {alt} {style} />
</picture>
