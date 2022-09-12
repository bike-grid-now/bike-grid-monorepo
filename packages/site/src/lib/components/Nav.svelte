<script lang="ts">
  import PedalBike from "@material-symbols/svg-400/rounded/pedal_bike.svg?component";
</script>

<div class="nav-outer">
  <div class="content">
    <nav>
      <a href="/" class="logo">
        <PedalBike viewBox="0 0 48 48" height="2rem" width="2rem" />
        <b>Chicago, Bike Grid Now!</b>
      </a>

      <div class="spacer" />
    </nav>
  </div>
</div>

<style>
  .nav-outer {
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
    justify-content: start;
  }

  a.logo {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: var(--color-text);
    fill: currentColor;
    gap: 0.5rem;
  }

  nav {
    width: 100%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;

    background-color: var(--color-card);

    color: var(--color-text);
    padding: 1.2rem;
    margin-bottom: calc(6 * var(--space));
    border-radius: 15px;

    box-shadow: 0 0 10px var(--color-shadow);
    transition: box-shadow 0.15s;
  }
</style>
