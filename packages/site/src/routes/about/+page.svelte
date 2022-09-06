<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  let { organizers } = data;

  console.log('org', organizers)

  function getImageUrl(imagePath: string) {
    const BASE = "https://firebasestorage.googleapis.com/v0/b/bike-grid-now.appspot.com/o";
    const PARAMS = "alt=media";

    return `${BASE}/${encodeURIComponent(imagePath)}?${PARAMS}`;
  }
</script>

{#if organizers && organizers.length > 0}
  <div class="content">
    <div class="grid">
      {#each organizers as organizer}
        <div class="card">
          {#if organizer.image}
             <img src={getImageUrl(organizer.image)} alt=""/>
          {/if}
          <h2>{organizer.name}</h2>
          <p>{organizer.description}</p>
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
    background-color: #1b1a1b;
    padding: 50px;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    grid-gap: 30px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
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

  p {
    line-height: 200%;
  }

  .footer {
    height: 15px;
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
  }

  @media only screen and (max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
