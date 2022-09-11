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
    width="4rem"
    height="4rem"
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

    text-align: center;

    padding: 2rem;
    grid-gap: 2rem;
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
    outline: 0.25rem solid var(--color-outline);
    outline-offset: 0.25rem;
  }
</style>
