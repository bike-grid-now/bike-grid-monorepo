<script lang="ts">
  export let events: Event[];
  import Image from "$lib/components/Image.svelte";

  interface Event {
    poster?: {
      altText: string;
      imageUrl: string;
    };
  }

  let currentEvent = events.length > 0 && events[0];
</script>

{#if currentEvent}
  <div class="card">
    {#if currentEvent.poster}
      <Image
        src={currentEvent.poster.imageUrl}
        alt={currentEvent.poster.altText}
        width={600}
        quality={50}
        style="width: 100%; height: 100%; object-fit: contain; position: absolute; top: 0; left: 0; z-index: 2;"
      />

      <Image
        src={currentEvent.poster.imageUrl}
        alt={currentEvent.poster.altText}
        width={600}
        quality={1}
        style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1; filter: blur(10px);"
      />
    {/if}
  </div>
{/if}

<style>
  .card {
    background-color: var(--color-card);
    height: 600px;
    border-radius: 15px;
    width: 100%;
    overflow: hidden;
    position: relative;
  }
</style>
