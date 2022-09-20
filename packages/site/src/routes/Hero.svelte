<script lang="ts">
  import BackgroundImage from "./BackgroundImage.svelte";
  import headerPhotoUrl from "../static/header-backdrop.jpeg";

  import LocationOn from "@material-symbols/svg-400/rounded/location_on.svg?component";

  export let title: string;
  export let tagline: string;
  import SocialIcons from "@rodneylab/svelte-social-icons";
</script>

<BackgroundImage src={headerPhotoUrl} brightness={0.5} maxWidth={1020}>
  <div class="hero">
    <div class="header">
      <h1>{title}</h1>
      <p>{tagline}</p>
    </div>

    <!-- <div class="location">
      <LocationOn
        viewBox="0 0 48 48"
        style="width: calc(8 * var(--space)); height: calc(8 * var(--space))"
      />
      <p>Chicago, IL</p>
    </div> -->

    <div class="socials">
      <a href="https://www.twitter.com/bikegridnow" target="_blank">
        <SocialIcons width={40} height={40} network="twitter" />
      </a>
      <a href="https://www.instagram.com/bikegridnow/" target="_blank">
        <SocialIcons width={40} height={40} network="instagram" />
      </a>
      <a href="https://www.facebook.com/BikeGridNow/" target="_blank">
        <SocialIcons width={40} height={40} network="facebook" />
      </a>
      <!-- <a href="https://www.tiktok.com/@chicagobikegridnow" target="_blank">
        <SocialIcons width={40} height={40} network="reddit" />
      </a> -->
      <a href="https://www.tiktok.com/@chicagobikegridnow" target="_blank">
        <SocialIcons width={40} height={40} network="tiktok" />
      </a>
    </div>
  </div>
</BackgroundImage>

<style>
  .hero {
    font-size: var(--text-base);
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

  .socials a {
    color: var(--color-text);
    fill: currentColor;
    text-decoration: none;
  }
</style>
