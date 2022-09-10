<script lang="ts">
  import Agenda from "$lib/components/Agenda.svelte";
  import Slides from "$lib/components/Slides.svelte";
  import Hero from "./Hero.svelte";
  import CallToAction from "./CallToAction.svelte";
  import CardContainer from "./CardContainer.svelte";

  import type { PageData } from "./$types";

  export let data: PageData;

  let upcomingEvents = data.upcomingEvents;
  let pastEvents = data.pastEvents;

  $: upcomingEvents = data.upcomingEvents;
  $: pastEvents = data.pastEvents;

  let nextEvent = upcomingEvents.length > 0 ? upcomingEvents[0] : null;
</script>

<Hero />

<div class="content main-content">
  <CallToAction />
  <div class="sideby">
    {#if nextEvent}
      <Slides events={[nextEvent]} />
    {/if}

    <Agenda events={upcomingEvents} title="Upcoming Events" />
  </div>

  <CardContainer />
  <Agenda events={pastEvents} title="Past Events" />
</div>

<style>
  .sideby {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
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

  @media only screen and (max-width: 800px) {
    .sideby {
      grid-template-columns: 1fr;
    }
  }
</style>
