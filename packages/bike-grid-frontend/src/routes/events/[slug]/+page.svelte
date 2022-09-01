<script lang="ts">
  import { format } from "date-fns";
  import Slides from "$lib/components/Slides.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  let { event } = data;

  function formatDate(date: string) {
    return format(new Date(date), "EEEE, LLLL d - h:mm a");
  }
</script>

<div class="container">
  {#if event}
    <div class="sideby">
      <div class="card">
        <h1>{event.eventName}</h1>
        <p>
          {formatDate(event.date)}
        </p>

        {#if event.rsvpLink}
          <a href={event.rsvpLink} target="_blank" class="button">RSVP</a>
        {/if}
      </div>

      <Slides media={[event.poster]} />
    </div>

    {#if event.media}
      <div class="slide-container">
        <Slides media={event.media} />
      </div>
    {/if}
  {/if}
</div>

<div class="footer" />

<style>
  .container {
    width: 100%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    margin-top: 20px;
  }

  .sideby {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding: 0px 15px;
  }

  .card {
    background-color: #1b1a1b;
    padding: 25px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    grid-gap: 15px;
  }

  .footer {
    height: 20px;
  }

  .slide-container {
    padding: 0px 15px;
  }

  .button {
    padding: 15px 30px;
    background-color: #c70909;
    border-radius: 15px;
    color: white;
    text-decoration: none;
    cursor: pointer;
    width: fit-content;
    margin-top: 15px;
  }

  @media only screen and (max-width: 600px) {
    .sideby {
      grid-template-columns: 1fr;
    }
  }
</style>
