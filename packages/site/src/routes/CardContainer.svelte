<script lang="ts">
  import Card from "./Card.svelte";
</script>

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

<style>
  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    width: 100%;
    position: relative;
  }

  @media only screen and (max-width: 800px) {
    .card-container {
      grid-template-columns: 1fr;
    }
  }
</style>