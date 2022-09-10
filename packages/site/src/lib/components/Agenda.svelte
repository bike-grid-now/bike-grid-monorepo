<script lang="ts">
  import { format, compareAsc, compareDesc } from "date-fns";
  import CalendarMonthIcon from "@material-symbols/svg-400/rounded/calendar_month.svg?component";
  import ChevronRight from "@material-symbols/svg-400/rounded/chevron_right.svg?component";

  type Event = {
    name: string;
    date: string;
    slug: string;
  };

  export let events: Event[] = [];
  export let title: string;

  function formatDate(date: string) {
    return format(new Date(date), "EEEE, LLLL d - h:mm a");
  }
</script>

{#if events.length > 0}
  <main>
    <div class="top">
      <CalendarMonthIcon viewBox="0 0 48 48" width="1.5rem" height="1.5rem" />
      <h2>{title}</h2>
    </div>

    <div class="divider" />

    <div>
      {#each events as event}
        <a class="row" href={`/events/${event.slug}`}>
          <div>
            <p class="title">{event.name}</p>
            <p class="time">
              {formatDate(event.date)}
            </p>
          </div>
          <div>
            <ChevronRight viewBox="0 0 48 48" width="1.5rem" height="1.5rem" />
          </div>
        </a>
      {/each}
    </div>
  </main>
{/if}

<style>
  main {
    background-color: #1b1a1b;
    border-radius: 15px;
    padding: 20px;
    color: white;
    fill: currentColor;
    border-radius: 15px;
    border: 1px solid black;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.15s;
  }

  .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 0.5rem;
    margin-bottom: 20px;
    margin-top: 5px;
  }

  .row {
    transition: 0.15s;
    border-radius: 10px;
    color: white;
    fill: currentColor;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
  }

  .row:hover,
  .row:focus {
    background-color: #c70909;
  }

  .title {
    font-weight: bold;
  }

  .time {
    font-size: 0.9rem;
    margin-top: 0.2rem;
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
    margin-bottom: 20px;
  }
</style>
