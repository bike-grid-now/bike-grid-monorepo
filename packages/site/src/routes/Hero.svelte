<script lang="ts">
  import BackgroundImage from "./BackgroundImage.svelte";
  import headerPhotoUrl from "../static/header-backdrop.jpeg";
  import MailIcon from "@material-symbols/svg-700/rounded/mail.svg?component";

  import * as simpleIcons from "simple-icons/icons";

  export let title: string;
  export let tagline: string;

  const iconProps = {
    viewBox: "0 0 48 48",
    style: "width: calc(6 * var(--space)); height: calc(6 * var(--space)); transform: scale(1.2);",
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
      <!-- <a href="https://www.tiktok.com/@chicagobikegridnow" target="_blank">
        <SocialIcons width={40} height={40} network="reddit" />
      </a> -->
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

  .links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: calc(var(--space) * 4);
  }

  .links a {
    color: var(--color-text);
    fill: currentColor;
    text-decoration: none;
  }

  .links .icon {
    width: calc(var(--space) * 7);
    height: 2rem;
  }
</style>
