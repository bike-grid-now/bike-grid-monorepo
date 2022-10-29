<script lang="ts">
  import CalendarMonthIcon from "@material-symbols/svg-400/rounded/calendar_month.svg?component";
  import LinkIcon from "@material-symbols/svg-400/rounded/link.svg?component";
  import DoneIcon from "@material-symbols/svg-400/rounded/done.svg?component";
  import { format } from "date-fns";
  import type { PageData } from "./$types";
  import SocialIcons from "@rodneylab/svelte-social-icons";
  import Image from "$lib/components/Image.svelte";
  import { PortableText } from "@portabletext/svelte";
  import Container from "$lib/components/Container.svelte";

  export let data: PageData;
  let { post } = data;

  function formatDate(date: string) {
    return format(new Date(date), "EEEE, LLLL d");
  }

  let copied = false;

  function copy() {
    if (copied) return;

    copied = true;
    navigator.clipboard.writeText(
      `https://www.bikegridnow.org/posts/${post.slug.current}`
    );
    setTimeout(() => {
      copied = false;
    }, 1000);
  }
</script>

<svelte:head>
  <title>{post.title} | Chicago, Bike Grid Now!</title>
</svelte:head>

<Container>
  <div class="card">
    <div class="card-inner">
      {#if post}
        <h1>{post.title}</h1>

        {#if post.subtitle}
          <h2>{post.subtitle}</h2>
        {/if}

        <div class="horizontal">
          <div class="left">
            <CalendarMonthIcon
              viewBox="0 0 48 48"
              style="width: calc(6 * var(--space)); height: calc(6 * var(--space))"
            />
            <p>{formatDate(post.date.local)}</p>
          </div>

          <div class="right">
            <a
              href="https://twitter.com/intent/tweet?url=https://www.bikegridnow.org/posts/{post
                .slug.current}&text=@bikegridnow"
              target="_blank"
            >
              <SocialIcons width={40} height={40} network="twitter" />
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.bikegridnow.org/posts/{post
                .slug.current}"
              target="_blank"
            >
              <SocialIcons width={40} height={40} network="facebook" />
            </a>
            <a
              href="https://www.linkedin.com/shareArticle/?mini=true&url=https://www.bikegridnow.org/posts/{post
                .slug.current}"
              target="_blank"
            >
              <SocialIcons width={40} height={40} network="linkedin" />
            </a>
            <div class="copy" on:click={copy}>
              <div class="link">
                <div class="link-icon" class:active={!copied}>
                  <LinkIcon
                    viewBox="0 0 48 48"
                    style="width: calc(6 * var(--space)); height: calc(6 * var(--space))"
                  />
                </div>
                <div class="check-icon" class:active={copied}>
                  <DoneIcon
                    viewBox="0 0 48 48"
                    style="width: calc(6 * var(--space)); height: calc(6 * var(--space))"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {#if post.image}
          <Image
            src={post.image.imageUrl}
            alt={post.image.altText}
            width={1000}
            style="width: 100%; border-radius: 15px"
          />
        {/if}

        <div class="markdown">
          <PortableText value={post.body} />
        </div>
      {/if}
    </div>
  </div>
</Container>

<style>
  .card-inner {
    max-width: 700px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: calc(6 * var(--space));
    margin-top: calc(6 * var(--space));
    margin-bottom: calc(6 * var(--space));
  }

  h1 {
    font-size: var(--text-5xl);
    font-weight: 700;
  }

  h2 {
    font-size: var(--text-2xl);
    font-weight: 400;
  }

  .markdown {
    display: flex;
    flex-direction: column;
    gap: calc(6 * var(--space));
  }

  .horizontal {
    color: var(--color-text) !important;
    fill: currentColor;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: calc(12 * var(--space));
  }

  @media only screen and (max-width: 650px) {
    .horizontal {
      flex-direction: column;
      align-items: flex-start;
      gap: calc(6 * var(--space));
    }
  }

  .horizontal .left {
    display: flex;
    gap: calc(2 * var(--space));
    align-items: center;
    opacity: 0.5;
  }

  .horizontal .right {
    display: flex;
    gap: calc(2 * var(--space));
  }

  .horizontal .right a {
    color: var(--color-text);
    fill: currentColor;
    text-decoration: none;
  }

  .copy {
    cursor: pointer;
  }

  .link {
    background-color: var(--color-primary);
    border-radius: 50%;
    width: calc(10 * var(--space));
    height: calc(10 * var(--space));
    position: relative;
  }

  .link-icon,
  .check-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    opacity: 0;
    transform: scale(0.5);
    transition: 0.1s;
  }

  .link-icon.active,
  .check-icon.active {
    transition-delay: 0.05s;
    transform: scale(1);
    opacity: 1;
  }
</style>
