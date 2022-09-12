<script lang="ts">
  export let events: Event[];

  import Image from "$lib/components/Image.svelte";
  import ChevronRight from "@material-symbols/svg-400/rounded/chevron_right.svg?component";
  import ChevronLeft from "@material-symbols/svg-400/rounded/chevron_left.svg?component";

  interface Poster {
    altText: string;
    imageUrl: string;
  }

  interface Event {
    poster?: Poster
  }

  let posters: Poster[]
  $: posters = events.flatMap((ev) => ev.poster ? [ev.poster] : [])

  $: currentIdx = 0;

  const advance = (): void => void currentIdx++;
  const goBack = (): void => void currentIdx--;

  $: canAdvance = currentIdx < posters.length - 1;
  $: canGoBack = currentIdx > 0;

  let current: Poster | undefined;
  $: current = posters[currentIdx];
</script>

{#if current}
  <div class="card">
    {#if canGoBack }
      <div class="swap left" on:click={goBack}><ChevronLeft /></div>
    {/if}
    <Image
      src={current.imageUrl}
      alt={current.altText}
      width={600}
      quality={50}
      style="width: 100%; height: 100%; object-fit: contain; position: absolute; top: 0; left: 0; z-index: 2;"
    />

    <Image
      src={current.imageUrl}
      alt={current.altText}
      width={600}
      quality={1}
      style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1; filter: blur(10px);"
    />
    {#if canAdvance }
      <div class="swap right" on:click={advance}><ChevronRight /></div>
    {/if}
  </div>
{/if}

<style>
  .card {
    background-color: var(--color-card);
    height: calc(150 * var(--space));
    border-radius: 15px;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .card .swap {
    z-index: 99;
    position: absolute;
    top: calc(75 * var(--space));
    cursor: pointer;
  }

  .card .swap.right {
    right: var(--space);
  }

  .card .swap.left {
    left: var(--space);
  }
</style>
