<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import VercelBanner from "$lib/components/VercelBanner.svelte";
  import Footer from '$lib/components/Footer.svelte';

  import "../styles/globals.css";

  import type { LayoutData } from "./$types";
  export let data: LayoutData;

  $: siteSettings = data.siteSettings;
</script>

<Nav title={siteSettings.title} />
<Seo
  siteTitle={siteSettings.title}
  siteDescription={siteSettings.description}
/>

<slot />

<Footer />

<style global>
  * {
    font-family: "Inter", sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: var(--color-card);
    color: var(--color-text);
    background-image: linear-gradient(
        var(--color-grid-lines) 1px,
        transparent 1px
      ),
      linear-gradient(
        to right,
        var(--color-grid-lines) 1px,
        var(--color-bg) 1px
      );
    background-size: calc(5 * var(--space)) calc(5 * var(--space));

    box-sizing: border-box;
  }

  a {
    color: rgb(0, 100, 200);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:visited {
    color: rgb(0, 80, 160);
  }

  label {
    display: block;
  }

  input,
  button,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    -webkit-padding: 0.4em 0;
    padding: 0.4em;
    margin: 0 0 0.5em 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 2px;
  }

  input:disabled {
    color: #ccc;
  }

  button {
    color: #333;
    background-color: #f4f4f4;
    outline: none;
  }

  button:disabled {
    color: #999;
  }

  button:not(:disabled):active {
    background-color: #ddd;
  }

  button:focus {
    border-color: #666;
  }

  .responsive-container {
    padding: 0 calc(5 * var(--space));
    width: 100%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }

  .card {
    background-color: var(--color-card);
    padding: calc(5 * var(--space));
    border-radius: 15px;
    overflow: hidden;
  }

  .markdown p {
    line-height: 200%;
  }

  .markdown a {
    color: var(--color-primary);
    text-decoration: underline;
  }

  .markdown li {
    line-height: 200%;
    margin-left: calc(5 * var(--space));
  }
</style>
