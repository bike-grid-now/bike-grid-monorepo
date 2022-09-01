<script lang="ts">
  import Agenda from "$lib/components/Agenda.svelte";
  import Card from "$lib/components/Card.svelte";
  import Slides from "$lib/components/Slides.svelte";
  import type { PageData } from "./$types";

  import headerPhotoUrl from "../static/header-backdrop.jpeg";

  export let data: PageData;

  const { events } = data;

  let futureEvents = events.filter(
    (event: { date: number }) => new Date(event.date) >= new Date()
  );
  let previousEvents = events.filter(
    (event: { date: number }) => new Date(event.date) < new Date()
  );

  let nextEvent = futureEvents.sort(
    (a: { date: number }, b: { date: number }) =>
      new Date(a.date) <= new Date(b.date)
  )[0];

  let homePage = true;
</script>

<!-- <a class="twitter-timeline" href="https://twitter.com/bikegridnow?ref_src=twsrc%5Etfw">Tweets by bikegridnow</a>  -->

<div class="hero" style={`--header-background-image: url(${headerPhotoUrl})`}>
  <!-- <video src={videoUrl} autoplay muted loop /> -->

  <div class="hero-overlay">
    <div class="hero-inner">
      <h1>Enough is enough.</h1>
      <p>It's time to build a 450 mile-long network of safe infrastructure</p>

      <div class="location">
        <span class="material-symbols-outlined">location_on</span>
        <p>Chicago, IL</p>
      </div>
    </div>
  </div>
</div>

<div class="content main-content">
  <div class="button-group">
    <a
      href="https://www.gofundme.com/f/flags-and-flyers-for-bike-grid-now"
      target="_blank"
    >
      <div class="button-email">
        <div class="left">
          <span class="material-symbols-outlined">edit_note</span>
          <p>Sign the Petition</p>
        </div>
        <span class="material-symbols-outlined arrow">chevron_right</span>
      </div>
    </a>

    <a href="https://newsletter.bikegridnow.org/" target="_blank">
      <div class="button-jam">
        <div class="left">
          <span class="material-symbols-outlined">mail</span>
          <p>Newsletter Signup</p>
        </div>
        <span class="material-symbols-outlined arrow">chevron_right</span>
      </div>
    </a>
  </div>

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

  {#if homePage}
    <Slides media={homePage} />
  {/if}

  <div class="footer" />
</div>

<style>
  a {
    text-decoration: none;
  }

  .sideby {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  .hero {
    position: relative;
    width: 100%;
    height: 600px;
  }

  .hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: var(--header-background-image);
    filter: brightness(0.5);
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: rgba(102, 51, 153, 0.247); */
    z-index: 2;
    /* pointer-events: all; */
    display: grid;
    place-items: center;
    color: white;
  }

  .hero-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 15px;
  }

  .hero-inner h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    text-align: center;
  }

  .hero-inner p {
    text-align: center;
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

  .location {
    display: flex;
    margin-top: 50px;
    align-items: center;
  }

  .location span {
    margin-right: 5px;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .left span {
    margin-right: 8px;
  }

  .nav p {
    font-size: 1.25rem;
  }

  .nav span {
    cursor: pointer;
  }

  .button,
  .button-jam,
  .button-email {
    /* background-color: #157094; */
    background-color: #c70909;
    /* color: white; */
    padding: 25px;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button-jam {
    /* background-color: white; */
    background-color: #1b1a1b;
    color: white;

    /* color: black; */
  }

  .button-email {
    /* background-color: #3d6779; */
    /* background-color: rgb(44, 44, 44); */
    /* background-color: #85d4ef; */
    color: white;
  }

  .button-group {
    /* margin: 25px 0px; */
    /* border-radius: 20px 20px 0px 0px; */
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid black;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  }

  .arrow {
    font-size: 1.75rem;
    /* margin-right: 20px; */
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
