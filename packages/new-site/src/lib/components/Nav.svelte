<script lang="ts">
  import PedalBike from "@material-symbols/svg-400/rounded/pedal_bike.svg?component";
  import Container from "./Container.svelte";

  export let title: string;
</script>

<nav>
  <Container>
    <div class="align-items">
      <a href="/" class="logo">
        <PedalBike
          viewBox="0 0 48 48"
          style="width: calc(8 * var(--space)); height: calc(8 * var(--space))"
        />
        <b>{title}</b>
      </a>

      <div class="spacer" />
    </div>
  </Container>
</nav>

<style>
  nav {
    font-size: var(--text-base);
    position: sticky;
    top: 0;
    z-index: 99;
    width: 100%;
    padding: 0 calc(5 * var(--space));

    background-color: var(--color-card);

    color: var(--color-text);
    padding: calc(5 * var(--space));

    box-shadow: 0 0 10px var(--color-shadow);
  }

  .align-items {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  a.logo {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: var(--color-text);
    fill: currentColor;
    gap: calc(2 * var(--space));
  }
</style>
