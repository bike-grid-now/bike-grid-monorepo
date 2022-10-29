<script lang="ts">
  import Agenda from "$lib/components/Agenda.svelte";
  import Slides from "$lib/components/Slides.svelte";
  import Hero from "./Hero.svelte";
  import CallToAction from "./CallToAction.svelte";
  import CardContainer from "./CardContainer.svelte";

  import type { PageData } from "./$types";
  import Container from "$lib/components/Container.svelte";

  export let data: PageData;

  $: upcomingEvents = data.upcomingEvents;
  $: pastEvents = data.pastEvents;
  $: nextEvent = upcomingEvents.length > 0 ? upcomingEvents[0] : null;
  $: siteSettings = data.siteSettings;
</script>

<svelte:head>
  <title>Chicago, Bike Grid Now!</title>
</svelte:head>

<Hero title={siteSettings.heroTitle} tagline={siteSettings.heroTagline} />

<Container>
  <div class="content main-content">
    <CallToAction />
    <div class="sideby">
      {#if nextEvent}
        <Slides events={upcomingEvents} />
      {/if}

      <Agenda events={upcomingEvents} title="Upcoming Events" />
    </div>

    <CardContainer />
    <Agenda events={pastEvents} title="Past Events" />
  </div>
</Container>

<style>
  .sideby {
    display: grid;
    grid-gap: calc(5 * var(--space));
    grid-template-columns: 1fr 1fr;
  }

  .content {
    padding: 0 calc(5 * var(--space));
  }

  .main-content {
    display: flex;
    flex-direction: column;
    grid-gap: calc(6 * var(--space));
    margin-top: calc(6 * var(--space));
  }

  @media only screen and (max-width: 800px) {
    .sideby {
      grid-template-columns: 1fr;
    }
  }
</style>
