<script lang="ts">
  export let src: string;
  export let brightness: string | number = "1.0"

  let style = `--background-image: url(${src})`
  style += `; --brightness: ${brightness.toString()}`
</script>

<div {style}>
  <slot />
</div>

<style>
  div {
    /* Required for the filter on the background. */
    position: relative;
    width: 100%;
    display: block;
  }

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
  }
</style>