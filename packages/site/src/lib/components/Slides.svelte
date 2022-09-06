<script lang="ts">
  import type { ParsedEvent } from "$lib/firebase";
  export let events: ParsedEvent[];
  import Image from "$lib/components/Image.svelte";

  let currentEvent = events.length > 0 && events[0];

  function getImageUrl(imagePath: string) {
    const BASE =
      "https://firebasestorage.googleapis.com/v0/b/bike-grid-now.appspot.com/o";
    const PARAMS = "alt=media";

    return `${BASE}/${encodeURIComponent(imagePath)}?${PARAMS}`;
  }
</script>

{#if currentEvent}
  <div class="card">
    {#if currentEvent.poster}
      <Image
        src={getImageUrl(currentEvent.poster)}
        alt={`Poster for ${currentEvent.eventName}`}
        width={600}
        quality={50}
        style="width: 100%; height: 100%; object-fit: cover"
      />
    {/if}
  </div>
{/if}

<style>
  .card {
    background-color: #1b1a1b;
    height: 600px;
    border-radius: 15px;
    width: 100%;
    overflow: hidden;
    position: relative;
  }
</style>
