<script lang="ts">
  import Agenda from "$lib/components/Agenda.svelte";
  import Card from "$lib/components/Card.svelte";
  import Slides from "$lib/components/Slides.svelte";
  import Hero from './Hero.svelte';
  import CallToAction from './CallToAction.svelte'

  import type { PageData } from "./$types";
  import { compareAsc, compareDesc } from "date-fns";
  import { parseEvent } from "$lib/firebase";

  export let data: PageData;

  const { events: stringifiedEvents } = data;

  let events = stringifiedEvents.map(parseEvent);

  let futureEvents = events
    .filter((event) => event.date >= new Date())
    .sort((a, b) => compareAsc(a.date, b.date));

  let previousEvents = events
    .filter((event) => new Date(event.date) < new Date())
    .sort((a, b) => compareDesc(a.date, b.date));

  let nextEvent = futureEvents.length > 0 ? futureEvents[0] : null;
</script>

<!-- <a class="twitter-timeline" href="https://twitter.com/bikegridnow?ref_src=twsrc%5Etfw">Tweets by bikegridnow</a>  -->

<Hero />

<div class="content main-content">
  <CallToAction />
  <div class="sideby">
    {#if events && nextEvent}
      <Slides media={[nextEvent.poster]} />
    {/if}

    <Agenda events={futureEvents} />
  </div>

  <div class="card-container">
    <Card
      icon="grid_on"
      heading="What's a Bike Grid?"
      subheading="10% of streets. 10mph. Protected. All across Chicago."
      link="https://www.chidocc.org/post/streets-for-bikes-now"
    />
    <Card
      icon="edit_road"
      heading="Why do we Jam?"
      subheading="Advocacy is good, but it's not cutting it. Read more here."
      link="https://www.chidocc.org/post/why-joining-a-bike-jam-can-change-the-world"
    />
    <Card
      icon="signpost"
      heading="About Us"
      subheading="We are a grassroots group of Chicagoans who want to see safer streets. Learn more about the current organizers."
      link="/about"
      notarget
    />
    <Card
      icon="savings"
      heading="Support Us"
      subheading="We'd love your support through gofundme so we can keep printing flyers, stickers, etc. Reach out on social media if you'd like some stickers!"
      link="https://www.gofundme.com/f/flags-and-flyers-for-bike-grid-now"
    />
  </div>

  <Agenda events={previousEvents} previous />

  <div class="footer" />
</div>

<style>
  .sideby {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-template-columns: auto; */
    /* grid-template-rows: auto; */
    /* margin: 20px; */
    grid-gap: 20px;
    width: 100%;
    position: relative;
    /* margin-top: 50px; */
  }

  .content {
    width: 100%;
    max-width: 1000px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 20px;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    grid-gap: 25px;
    margin-top: 25px;
  }

  .footer {
    height: 15px;
  }

  @media only screen and (max-width: 800px) {
    .card-container,
    .sideby {
      grid-template-columns: 1fr;
    }
  }
</style>
