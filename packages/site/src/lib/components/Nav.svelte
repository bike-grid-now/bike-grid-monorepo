<script lang="ts">
  import PedalBike from "@material-symbols/svg-400/rounded/pedal_bike.svg?component";

  export let title: string;
</script>

<div class="nav-outer">
  <div class="content">
    <nav>
      <a href="/" class="logo">
        <PedalBike
          viewBox="0 0 48 48"
          style="width: calc(8 * var(--space)); height: calc(8 * var(--space))"
        />
        <b>{title}</b>
      </a>

      <div class="spacer" />
    </nav>
  </div>
</div>

<style>
  .nav-outer {
    font-size: var(--text-base);
    position: sticky;
    top: calc(3 * var(--space));
    z-index: 99;
    width: 100%;
  }

  .content {
    padding: 0 calc(5 * var(--space));
    width: 100%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }

  nav {
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

  nav {
    width: 100%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;

    background-color: var(--color-card);

    color: var(--color-text);
    padding: calc(5 * var(--space));
    margin-bottom: calc(6 * var(--space));
    border-radius: 15px;

    box-shadow: 0 0 10px var(--color-shadow);
    transition: box-shadow 0.15s;
  }
</style>
