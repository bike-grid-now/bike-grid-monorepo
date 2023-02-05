<script>
  import { PortableText } from "@portabletext/svelte";

  export let body
</script>

<div class="markdown">
  <PortableText value={body} />
</div>