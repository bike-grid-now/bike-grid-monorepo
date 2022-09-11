<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import VercelBanner from "$lib/components/VercelBanner.svelte";
  import "../tailwind.css";
</script>

<Nav />
<Seo />

<slot />

<VercelBanner />

<style global>
  /* * {
    font-family: "Inter", sans-serif;
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  */
  body {
    background-color: #1b1a1b;
    color: white;
    background-image: linear-gradient(#1b1a1b 1px, transparent 1px),
      linear-gradient(to right, #1b1a1b 1px, #000000 1px);
    background-size: 20px 20px;

    box-sizing: border-box;
  }

  /*a {
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
    padding: 0px 20px;
    width: 100%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }

  .card {
    background-color: #1b1a1b;
    padding: 20px;
    border-radius: 15px;
    overflow: hidden;
  }

  .markdown p {
    line-height: 200%;
  }

  .markdown a {
    color: #c70909;
    text-decoration: underline;
  }

  .markdown li {
    line-height: 200%;
    margin-left: 20px;
  } */

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
