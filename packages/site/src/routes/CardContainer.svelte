<script lang="ts">
  import Card from "./Card.svelte";
  import CardHeading from "./CardHeading.svelte";

  import GridOnIcon from "@material-symbols/svg-400/rounded/grid_on.svg?component";
  import EditRoadIcon from "@material-symbols/svg-400/rounded/edit_road.svg?component";
  import SignpostIcon from "@material-symbols/svg-400/rounded/signpost.svg?component";
  import SavingsIcon from "@material-symbols/svg-400/rounded/savings.svg?component";

  const iconProps = {
    viewBox: "0 0 48 48",
    width: "4rem",
    height: "4rem",
  };
</script>

<div class="card-container">
  <Card link="https://www.chidocc.org/post/streets-for-bikes-now">
    <GridOnIcon {...iconProps} />
    <CardHeading>What's a Bike Grid?</CardHeading>
    <p>10% of streets. 10mph. Protected. All across Chicago.</p>
  </Card>
  <Card
    link="https://www.chidocc.org/post/why-joining-a-bike-jam-can-change-the-world"
  >
    <EditRoadIcon {...iconProps} />
    <CardHeading>Why do we Jam?</CardHeading>
    <p>Advocacy is good, but it's not cutting it. Read more here.</p></Card
  >
  <Card link="/about" notarget>
    <SignpostIcon {...iconProps} />
    <CardHeading>About us</CardHeading>
    <p>
      We're a grassroots group of Chicagoans who want to see safer streets.
      Learn more about the current organizers.
    </p>
  </Card>
  <Card link="https://www.gofundme.com/f/flags-and-flyers-for-bike-grid-now">
    <SavingsIcon {...iconProps} />
    <CardHeading>Support Us</CardHeading>
    <p>
      We'd love your support through gofundme so we can keep printing flyers,
      stickers, etc. Reach out on Social Media if you'd like some stickers!
    </p>
  </Card>
</div>

<style>
  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: calc(5 * var(--space));
    width: 100%;
    position: relative;
  }

  @media only screen and (max-width: 800px) {
    .card-container {
      grid-template-columns: 1fr;
    }
  }
</style>
