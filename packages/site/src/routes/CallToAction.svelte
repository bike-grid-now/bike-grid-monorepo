<script lang="ts">
  import MailIcon from "@material-symbols/svg-400/rounded/mail.svg?component";
  import EditNote from "@material-symbols/svg-400/rounded/edit_note.svg?component";
  import CallIcon from "@material-symbols/svg-400/rounded/call.svg?component";
  import EditNoteIcon from "@material-symbols/svg-400/rounded/edit_note.svg?component";
  import ChevronRightIcon from "@material-symbols/svg-400/rounded/chevron_right.svg?component";
  import DirectionsBusIcon from "@material-symbols/svg-400/rounded/directions_bus.svg?component";
  import LocationOnIcon from "@material-symbols/svg-400/rounded/location_on.svg?component";

  const iconProps = {
    viewBox: "0 0 48 48",
    style: "width: calc(6 * var(--space)); height: calc(6 * var(--space))",
  };
</script>

<div class="button-group">
  <a href="https://newsletter.bikegridnow.org/" target="_blank" class="dark">
    <div class="content">
      <MailIcon {...iconProps} />
      <p>Sign up for the Newsletter</p>
    </div>
    <ChevronRightIcon {...iconProps} />
  </a>

  <a href="https://www.change.org/p/chicago-needs-a-bike-grid" target="_blank" class="light">
    <div class="content">
      <EditNote {...iconProps} />
      <p>Sign the Petition</p>
    </div>
    <ChevronRightIcon {...iconProps} />
  </a>

  <!-- <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSegNjFMyIcrGiEKp5Y7RQFUjcu4Mk-gfllJrEC13NFk6SGxvw/viewform?usp=sf_link"
    target="_blank"
    class="dark"
  >
    <div class="content">
      <DirectionsBusIcon {...iconProps} />
      <p>Request a Bike Bus</p>
    </div>
    <ChevronRightIcon {...iconProps} />
  </a> -->

  <!-- <a
    href="https://docs.google.com/forms/d/e/1FAIpQLScmo18WuNDZXnMfEdpVi6NErKp4fvCFHEe6x7GaE0ok1tvDIA/viewform"
    target="_blank"
    class="dark"
  >
    <div class="content">
      <DirectionsBusIcon {...iconProps} />
      <p>Chicago Mobility Collaborative</p>
    </div>
    <ChevronRightIcon {...iconProps} />
  </a> -->

  <a href="https://bikebustracker.bikegridnow.org/" class="dark">
    <div class="content">
      <LocationOnIcon {...iconProps} />
      <p>Track the Bike Bus</p>
    </div>
    <ChevronRightIcon {...iconProps} />
  </a>
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
