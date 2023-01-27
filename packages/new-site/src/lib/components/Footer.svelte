<script lang="ts">
  import Container from "./Container.svelte";
  import VercelBanner from "./VercelBanner.svelte";
</script>

<div class="footer">
  <Container>
    <VercelBanner />
    <a href="https://sanity.io/" target="_blank"
      >Structured content powered by Sanity.io</a
    >
  </Container>
</div>

<style>
  a {
    display: block;
    color: var(--color-text);
    font-size: var(--text-sm);
    margin-top: calc(var(--space) * 2);
    text-decoration: underline;
  }

  .footer {
    background-color: var(--color-bg);
    margin-top: calc(5 * var(--space));
    padding: calc(var(--space) * 5) 0;
  }
</style>
