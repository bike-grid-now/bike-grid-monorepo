<script lang="ts">
  import { format, compareAsc, compareDesc } from "date-fns";
  import CalendarMonthIcon from "@material-symbols/svg-400/rounded/calendar_month.svg?component";
  import ChevronRight from "@material-symbols/svg-400/rounded/chevron_right.svg?component";
  import { paginated } from "$lib/util";

  type Event = {
    name: string;
    date: string;
    slug: string;
  };

  export let events: Event[] = [];
  export let title: string;
  export let maxPerPage: number = 5;
  
  $: pageNumber = 0;

  const getFilteredEvents = (events: Event[], searchValue: string): Event[] => {
    if(searchValue.trim() === '') {
      return events
    }
    
    return events.filter((ev) => ev.name.toLowerCase().includes(searchValue.toLowerCase()))
  };

  
  $: filteredEvents = getFilteredEvents(events, searchValue);
  
  let numPages: number
  $: numPages = Math.ceil(filteredEvents.length / maxPerPage);

  $: currentPageEvents = paginated(filteredEvents, pageNumber, maxPerPage);

  let searchValue: string = '';

  function formatDate(date: string) {
    return format(new Date(date), "EEEE, LLLL d - h:mm a");
  }

  const iconProps = {
    viewBox: "0 0 48 48",
    style: "width: calc(6 * var(--space)); height: calc(6 * var(--space))",
  };

  $: canAdvance = pageNumber < numPages - 1;
  $: canGoBack = pageNumber > 0;

  const goBack = (): void => void pageNumber--;
  const advance = (): void => void pageNumber++;

</script>

{#if events.length > 0}
  <main>
    <div class="top">
      <CalendarMonthIcon {...iconProps} />
      <h2>{title}</h2>
      {#if events.length > maxPerPage }
        <div class="right">
          <input type="text" placeholder="Search" bind:value={searchValue} />
        </div>
      {/if}
    </div>

    <div class="divider" />

    <div>
      {#each currentPageEvents as event}
        <a class="row" href={`/events/${event.slug}`}>
          <div>
            <p class="title">{event.name}</p>
            <p class="time">
              {formatDate(event.date)}
            </p>
          </div>
          <div>
            <ChevronRight {...iconProps} />
          </div>
        </a>
      {/each}
    </div>
    {#if numPages > 1}
      <div class="right group">
        {#if canAdvance }
          <div><button type="button" on:click={advance}>Next</button></div>
        {/if}
        <div>Page {pageNumber + 1} of {numPages}</div>
        {#if canGoBack }
        <div>
          <button type="button" on:click={goBack}>Back</button>
        </div>
        {/if}
      </div>
    {/if}
  </main>
{/if}

<style>
  main {
    background-color: var(--color-card);
    border-radius: 15px;
    padding: calc(5 * var(--space));
    color: var(--color-text);
    fill: currentColor;
    border: 1px solid black;
    box-shadow: 0 2px 3px var(--color-shadow);
    transition: box-shadow 0.15s;
  }

  h2 {
    font-size: var(--text-2xl);
  }

  .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: calc(2 * var(--space));
  }

  .row {
    transition: 0.15s;
    border-radius: 10px;
    color: var(--color-text);
    fill: currentColor;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: calc(3 * var(--space));
  }

  .group {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  
  .group > div {
    padding-left: calc(3 * var(--space));
  }

  .right {
    width: 100%;
  }

  .right > * {
    float: right;
  }

  .row:hover,
  .row:focus {
    background-color: var(--color-primary);
  }

  .title {
    font-size: var(--text-base);
    font-weight: bold;
  }

  .time {
    font-size: var(--text-sm);
    margin-top: calc(0.8 * var(--space));
    color: #ddd;
    text-decoration: none;
  }

  .time:hover,
  .time:focus {
    text-decoration: none;
  }

  .divider {
    width: 100%;
    height: 1px;
    background-color: rgb(201, 201, 201);
    margin-top: calc(5 * var(--space));
    margin-bottom: calc(5 * var(--space));
  }
</style>
