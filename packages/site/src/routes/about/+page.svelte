<script lang="ts">
  import Image from "$lib/components/Image.svelte";
  import { PortableText } from "@portabletext/svelte";

  import type { PageData } from "./$types";
  export let data: PageData;

  let { organizers } = data;
</script>

{#if organizers && organizers.length > 0}
  <div class="content">
    <div class="grid">
      {#each organizers as organizer}
        <div class="card">
          {#if organizer.image}
            <Image
              style="height: 150px; width: 150px; object-fit: cover; border-radius: 50%"
              src={organizer.image.imageUrl}
              alt={organizer.image.altText}
              width={150}
            />
          {/if}
          <h2>{organizer.name}</h2>
          <PortableText value={organizer.description} />
        </div>
      {/each}
    </div>
  </div>

  <div class="footer" />
{/if}

<style>
  .grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  .card {
    background-color: var(--color-card);
    padding: 50px;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    grid-gap: 30px;
    box-shadow: 0 0 5px var(--color-shadow);
  }

  .content {
    width: 100%;
    max-width: 1000px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 20px;

    margin-top: 20px;
  }

  .footer {
    height: 15px;
  }

  @media only screen and (max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
