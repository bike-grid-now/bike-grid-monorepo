<script lang="ts">
  import faviconUrl from "../../static/favicon_io/favicon.ico";
  import SvelteSeo from "svelte-seo";

  export let title: string | undefined = undefined;
  export let siteTitle: string;
  export let siteDescription: string;

  $: pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;
</script>

<SvelteSeo title={pageTitle} description={siteDescription} />
