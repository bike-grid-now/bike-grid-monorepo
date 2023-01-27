<script lang="ts">
  export let src: string;
  export let alt: string;
  export let maxWidth: number;
  export let brightness: string | number = "1.0";

  let style = `--background-image: url(${src})`;
  style += `; --brightness: ${brightness.toString()}`;
</script>

<div {style}>
  <div class="image">
    <img
      {src}
      {alt}
      width={maxWidth}
      style="width: 100%; height: 100%; object-fit: cover; object-position: center"
    />
  </div>
  <slot />
</div>

<style>
  div {
    /* Required for the filter on the background. */
    position: relative;
    width: 100%;
    display: block;
  }
  /* 
  div::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: var(--background-image);
    filter: brightness(var(--brightness));
  } */

  .image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    filter: brightness(var(--brightness));
  }
</style>
