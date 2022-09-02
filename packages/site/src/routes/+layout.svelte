<script lang="ts">
  import "../styles/global.css";
  import Nav from "$lib/components/Nav.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import VercelBanner from "$lib/components/VercelBanner.svelte";
</script>

<Nav />
<Seo />

<slot />

<VercelBanner />
