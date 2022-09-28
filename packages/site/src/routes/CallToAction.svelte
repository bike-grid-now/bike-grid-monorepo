<script lang="ts">
  import MailIcon from "@material-symbols/svg-400/rounded/mail.svg?component";
  import EditNote from "@material-symbols/svg-400/rounded/edit_note.svg?component";
  import ChevronRightIcon from "@material-symbols/svg-400/rounded/chevron_right.svg?component";
  import DirectionsBusIcon from "@material-symbols/svg-400/rounded/directions_bus.svg?component";
  import LocationOnIcon from "@material-symbols/svg-400/rounded/location_on.svg?component";

  const iconProps = {
    viewBox: "0 0 48 48",
    style: "width: calc(6 * var(--space)); height: calc(6 * var(--space))",
  };
</script>

<div class="button-group">
  <a href="https://newsletter.bikegridnow.org/" target="_blank" class="light">
    <div class="content">
      <p class="heading">Sign up for the Newsletter</p>
      <p>Keep up with our latest events and actions.</p>
    </div>
    <ChevronRightIcon {...iconProps} />
  </a>

  <a
    href="https://www.change.org/p/chicago-needs-a-bike-grid"
    target="_blank"
    class="light"
  >
    <div class="content">
      <p class="heading">Sign the Petition</p>
      <p>Sign our petition asking city hall for a bike grid.</p>
    </div>
    <ChevronRightIcon {...iconProps} />
  </a>

  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLScmo18WuNDZXnMfEdpVi6NErKp4fvCFHEe6x7GaE0ok1tvDIA/viewform"
    target="_blank"
    class="light"
  >
    <div class="content">
      <p class="heading">Chicago Mobility Collaborative</p>
      <p>
        Help us send a strong message to CDOT and RSVP for the Chicago Mobility
        Collaborative meeting.
      </p>
    </div>
    <ChevronRightIcon {...iconProps} />
  </a>

  <a href="https://bikebustracker.bikegridnow.org/" class="light">
    <div class="content">
      <p class="heading">Track the Bike Bus</p>
      <p>See our bike bus routes and follow the bike bus in real-time.</p>
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
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;

    transition: all 200ms ease-in-out;
  }

  a:hover,
  a:focus {
    background-color: var(--color-primary);
  }

  .button-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: calc(var(--space) * 3);
    overflow: hidden;
  }

  .light {
    background-color: var(--color-card-light);
  }

  .heading {
    font-size: var(--text-2xl);
    margin-bottom: calc(var(--space) * 2);
    font-weight: 500;
  }

  p {
    line-height: 1.4;
  }
</style>
