<script lang="ts">
  export let link: string;
  export let notarget: boolean = false;

  import ArrowCircleRight from "@material-symbols/svg-400/rounded/arrow_circle_right.svg?component";
</script>

<a href={link} target={notarget ? "" : "_blank"} class="card">
  <slot />
  <ArrowCircleRight
    class="arrow"
    viewBox="0 0 48 48"
    style="width: calc(16 * var(--space)); height: calc(16 * var(--space))"
  />
</a>

<style>
  a {
    text-decoration: none;
    display: block;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: var(--text-base);

    text-align: center;

    padding: calc(8 * var(--space));
    grid-gap: calc(8 * var(--space));
  }

  .card {
    background-color: var(--color-card);
    box-shadow: 0 0 5px var(--color-shadow);
    color: var(--color-text);
    fill: currentColor;

    border: 1px solid var(--color-border);
    border-radius: 15px;

    transition: 0.15s ease-in-out;
    line-height: 150%;
  }

  .card:hover,
  .card:focus {
    box-shadow: 0 0px 10px var(--color-shadow-hover);
    background-color: var(--color-primary);
  }

  .card:focus {
    outline: var(--space) solid var(--color-outline);
    outline-offset: var(--space);
  }
</style>
