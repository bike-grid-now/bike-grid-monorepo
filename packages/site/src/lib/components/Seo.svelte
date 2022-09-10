<script lang="ts">
  import faviconUrl from "../../static/favicon_io/favicon.ico";

  export let title: string | undefined = undefined;

  $: pageTitle = title ? `${title} | Bike Grid Now` : "Bike Grid Now";
</script>

<svelte:head>
  <link rel="icon" href={faviconUrl} />
  <title>{pageTitle}</title>
</svelte:head>
