<script lang="ts">
  import Container from "$lib/components/Container.svelte";
  import Image from "$lib/components/Image.svelte";
  import { PortableText } from "@portabletext/svelte";

  import type { PageData } from "./$types";
  export let data: PageData;

  let { organizers } = data;
</script>

<svelte:head>
  <title>About | Chicago, Bike Grid Now!</title>
</svelte:head>

{#if organizers && organizers.length > 0}
  <Container>
    <div class="content">
      <div class="grid">
        {#each organizers as organizer}
          <div class="card">
            {#if organizer.image}
              <Image
                style="height: calc(36 * var(--space)); width: calc(36 * var(--space)); object-fit: cover; border-radius: 50%"
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
  </Container>
{/if}

<style>
  .grid {
    display: grid;
    grid-gap: calc(5 * var(--space));
    grid-template-columns: 1fr 1fr;
  }

  .card {
    background-color: var(--color-card);
    padding: calc(12 * var(--space));
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    grid-gap: calc(8 * var(--space));
    box-shadow: 0 0 5px var(--color-shadow);
  }

  .content {
    padding: 0 calc(5 * var(--space));

    margin-top: calc(5 * var(--space));
  }

  @media only screen and (max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
