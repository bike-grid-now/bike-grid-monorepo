<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  let { organizers } = data;
</script>

{#if organizers && organizers.length > 0}
  <div class="content">
    <div class="grid">
      {#each organizers as o}
        <div class="card">
          {#if o.attributes?.Image?.data?.attributes?.url}
            <!-- <img src={url + o.attributes.Image.data.attributes.url} alt=""> -->
          {/if}
          <h2>{o.name}</h2>
          <p>{o.description}</p>
        </div>
      {/each}
    </div>
  </div>

  <div class="footer" />
{/if}

<style>
  .grid {
    display: grid;
    /* margin: 50px 20px; */
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
    padding: 0px 15px;

    margin-top: 20px;
  }

  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    object-fit: cover;
  }

  p {
    line-height: 200%;
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
