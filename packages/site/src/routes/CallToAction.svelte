<script lang="ts">
  import ChevronRightIcon from "@material-symbols/svg-400/rounded/chevron_right.svg?component";
  export let data;

  const iconProps = {
    viewBox: "0 0 48 48",
    style: "width: calc(6 * var(--space)); height: calc(6 * var(--space))",
  };
</script>

<div class="button-group">
  {#each data as d, i}
   <a href={d.link} class={i % 2 == 0 ? "dark" : "light"}>
    <div class="content">
      <!-- <LocationOnIcon {...iconProps} /> -->
      <p>{d.text}</p>
    </div>
    <ChevronRightIcon {...iconProps} />
    </a>
{/each}
</div>



<style>
  a {
    text-decoration: none;
    color: var(--color-text);
    fill: currentColor;
    display: block;

    background-color: var(--color-primary);
    padding: calc(6 * var(--space));
    font-size: var(--text-2xl);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button-group {
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid var(--color-border);
    box-shadow: 0 2px 3px var(--color-shadow);
  }

  .dark {
    background-color: var(--color-card);
  }

  .light {
    background-color: var(--color-card-light);
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: calc(2 * var(--space));
  }
</style>
