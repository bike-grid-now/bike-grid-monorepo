<script lang="ts">
  import { format, compareAsc, compareDesc } from "date-fns";

  export let events = [];
  export let previous = false;

  let title = previous ? "Previous Events" : "Upcoming Events";

  let sortedEvents = events.sort((a, b) =>
    previous ? compareDesc(a.date, b.date) : compareAsc(a.date, b.date)
  );

  function formatDate(date: string) {
    return format(new Date(date), "EEEE, LLLL d - h:mm a");
  }
</script>

{#if sortedEvents.length > 0}
  <main>
    <div class="top">
      <span class="material-symbols-outlined"> calendar_month </span>
      <h2>{title}</h2>
    </div>

    <div class="divider" />

    <div>
      {#each sortedEvents as event}
        <a class="row" href={`/events/${event.id}`}>
          <div>
            <p class="title">{event.eventName}</p>
            <p class="time">
              {formatDate(event.date)}
            </p>
          </div>
          <div>
            <span class="material-symbols-outlined arrow">chevron_right</span>
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
    border-radius: 15px;
    border: 1px solid black;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.15s;
  }

  .top {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 5px;
  }

  .top span {
    margin-right: 10px;
  }

  .row {
    transition: 0.15s;
    border-radius: 10px;
    color: white;

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
