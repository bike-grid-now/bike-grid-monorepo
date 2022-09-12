<script lang="ts">
  import BackgroundImage from "./BackgroundImage.svelte";
  import headerPhotoUrl from "../static/header-backdrop.jpeg";

  import LocationOn from "@material-symbols/svg-400/rounded/location_on.svg?component";
</script>

<BackgroundImage src={headerPhotoUrl} brightness={0.5} maxWidth={1020}>
  <div class="hero">
    <div class="header">
      <h1>Enough is enough.</h1>
      <p>
        It's time to build a grid of bike-prioritized streets on 10% of Chicago
        streets with a 10mph speed limit.
      </p>
    </div>

    <div class="location">
      <LocationOn
        viewBox="0 0 48 48"
        style="width: calc(8 * var(--space)); height: calc(8 * var(--space))"
      />
      <p>Chicago, IL</p>
    </div>
  </div>
</BackgroundImage>

<style>
  .hero {
    padding-top: calc(48 * var(--space));
    padding-bottom: calc(48 * var(--space));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hero > * + * {
    margin-top: calc(10 * var(--space));
  }

  .header > * + * {
    margin-top: calc(2 * var(--space));
  }

  .header {
    text-align: center;
  }

  h1 {
    font-size: var(--text-5xl);
  }

  .location {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text);
    fill: currentColor;
  }

  .location > :global(* + *) {
    margin-left: var(--space);
  }
</style>
