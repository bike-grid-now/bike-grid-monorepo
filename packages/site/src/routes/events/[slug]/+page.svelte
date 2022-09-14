<script lang="ts">
  import { format } from "date-fns";
  import Slides from "$lib/components/Slides.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Image from "$lib/components/Image.svelte";
  import { PortableText } from "@portabletext/svelte";
  import { atcb_action } from 'add-to-calendar-button';

  import type { PageData } from "./$types";

  export let data: PageData;

  let event = data.event;
  
  function formatDate(date: string) {
    return format(new Date(date), "M/dd/yyyy 'at' h:mm a");
  }

  let addToCalendarButton: HTMLButtonElement;

  const addToCalendarAction = () => {
    const startTime = new Date(event.date.local)
    const endTime = (() => {
      const temp = new Date(startTime);
      temp.setHours(temp.getHours() + 1);
      return temp;
    })();

    atcb_action({
      name: event.name,
      description: 'BikeGridNow.org event',
      startDate: format(startTime, 'yyyy-MM-dd'),
      startTime: format(startTime, 'HH:MM'),
      // End time is one hour after start by default
      endTime: format(endTime, 'HH:MM'),
      location: event.name,
      images: (event.media ?? []).map((img) => img.imageUrl),
      options:[
        "Apple",
        "Google",
        "iCal",
        "Microsoft365",
        "MicrosoftTeams",
        "Outlook.com",
        "Yahoo"
      ],
      "timeZone":"US/Central",
      "trigger":"click",
      "listStyle":"modal",
      "iCalFileName":"BikeGridNow-Event"
    })
  }
  
  
</script>

<Seo title={event.name} />

<div class="container">
  <div class="sideby">
    <div class="card">
      <h1>{event.name}</h1>
      <p>
        Date: {formatDate(event.date.local)}
      </p>

      {#if event.description}
        <div>
          <PortableText value={event.description} />
        </div>
      {/if}

      {#if event.rsvpLink}
        <a href={event.rsvpLink} target="_blank" class="button">RSVP</a>
      {/if}
      <button class="button" bind:this={addToCalendarButton} on:click={addToCalendarAction}>Add to Calendar</button>
    </div>

    <Slides events={[event]} />
  </div>
</div>

<div class="footer" />

<style>
  @import '../../../styles/atcb.css';

  .container {
    width: 100%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    grid-gap: calc(5 * var(--space));
    margin-top: calc(5 * var(--space));
  }

  .sideby {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: calc(5 * var(--space));
    padding: 0 calc(5 * var(--space));
  }

  .card {
    background-color: var(--color-card);
    padding: calc(6 * var(--space));
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    grid-gap: calc(4 * var(--space));
  }

  .footer {
    height: calc(5 * var(--space));
  }

  .button {
    padding: calc(4 * var(--space)) calc(8 * var(--space));
    background-color: var(--color-primary);
    border-radius: 15px;
    color: var(--color-text);
    text-decoration: none;
    cursor: pointer;
    width: fit-content;
    margin-top: calc(4 * var(--space));
  }

  @media only screen and (max-width: 600px) {
    .sideby {
      grid-template-columns: 1fr;
    }
  }
</style>
