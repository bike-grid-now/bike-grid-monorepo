<script lang="ts">
  import BackgroundImage from "./BackgroundImage.svelte";
  import headerPhotoUrl from "../static/header-backdrop.jpeg";
  import MailIcon from "@material-symbols/svg-700/rounded/mail.svg?component";

  import * as simpleIcons from "simple-icons/icons";

  export let title: string;
  export let tagline: string;

  const iconProps = {
    viewBox: "0 0 48 48",
    style:
      "width: calc(6 * var(--space)); height: calc(6 * var(--space)); transform: scale(1.2);",
  };
</script>

<BackgroundImage src={headerPhotoUrl} brightness={0.5} maxWidth={1020}>
  <div class="hero">
    <div class="header">
      <h1>{title}</h1>
      <p>{tagline}</p>
    </div>

    <div class="links">
      <a href="https://www.twitter.com/bikegridnow" target="_blank">
        <div class="icon">
          {@html simpleIcons.siTwitter.svg}
        </div>
      </a>
      <a href="https://www.instagram.com/bikegridnow/" target="_blank">
        <div class="icon">
          {@html simpleIcons.siInstagram.svg}
        </div>
      </a>
      <a href="https://www.facebook.com/BikeGridNow/" target="_blank">
        <div class="icon">
          {@html simpleIcons.siFacebook.svg}
        </div>
      </a>
      <a href="https://www.tiktok.com/@chicagobikegridnow" target="_blank">
        <div class="icon">
          {@html simpleIcons.siTiktok.svg}
        </div>
      </a>

      <a href="mailto:grassroots@bikegridnow.org" target="_blank">
        <MailIcon {...iconProps} weight={700} />
      </a>
    </div>
  </div>
</BackgroundImage>

<style>
  .hero {
    font-size: var(--text-base);
    max-width: 1000px;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: calc(36 * var(--space)) calc(var(--space) * 4);
  }

  .hero > * + * {
    margin-top: calc(16 * var(--space));
  }

  .header > * + * {
    margin-top: calc(6 * var(--space));
  }

  h1 {
    font-size: calc(var(--space) * 20);
    background-color: white;
    color: black;
    padding: calc(4 * var(--space));
    mix-blend-mode: lighten;
    text-transform: uppercase;
    font-weight: 900;
  }

  p {
    font-size: var(--text-xl);
    font-weight: 500;
    line-height: 1.8;
    letter-spacing: 0.009rem;
    /* padding: calc(var(--space) * 4); */
    mix-blend-mode: lighten;
  }

  .links {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: calc(var(--space) * 4);
    background-color: white;
    width: fit-content;
    padding: calc(var(--space) * 3) calc(var(--space) * 4);
  }

  .links a {
    color: black;
    fill: currentColor;
    text-decoration: none;
  }

  .links .icon {
    width: calc(var(--space) * 7);
    height: 2rem;
  }
</style>
