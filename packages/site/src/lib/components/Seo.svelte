<script lang="ts">
  import faviconUrl from "../../static/favicon_io/favicon.ico";

  export let title: string | undefined = undefined;
  export let siteTitle: string;

  $: pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;
</script>

<svelte:head>
  <link rel="icon" href={faviconUrl} />
  <title>{pageTitle}</title>
</svelte:head>
