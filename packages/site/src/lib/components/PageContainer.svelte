<script>
  import Container from "./Container.svelte";
</script>

<Container>
  <div class="card">
    <div class="card-inner">
      <slot />
    </div>
  </div>
</Container>

<style>
  .card {
    background-color: var(--color-card);
    padding: calc(5 * var(--space));
    border-radius: 15px;
    overflow: hidden;
  }

  .card-inner {
    /* max-width: 700px;
    margin: auto; */
    display: flex;
    flex-direction: column;
    gap: calc(6 * var(--space));
    margin-top: calc(6 * var(--space));
    margin-bottom: calc(6 * var(--space));
    padding-left: calc(6 * var(--space));
    padding-right: calc(6 * var(--space));
  }
</style>
