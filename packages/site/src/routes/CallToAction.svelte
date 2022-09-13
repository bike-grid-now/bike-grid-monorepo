<script lang="ts">
  import MailIcon from "@material-symbols/svg-400/rounded/mail.svg?component";
  import CallIcon from "@material-symbols/svg-400/rounded/call.svg?component";
  import EditNoteIcon from "@material-symbols/svg-400/rounded/edit_note.svg?component";
  import ChevronRightIcon from "@material-symbols/svg-400/rounded/chevron_right.svg?component";

  const iconProps = {
    viewBox: "0 0 48 48",
    style: "width: calc(6 * var(--space)); height: calc(6 * var(--space))",
  };
</script>

<div class="button-group">
  <a
    href="https://www.gofundme.com/f/flags-and-flyers-for-bike-grid-now"
    target="_blank"
    class="dark"
  >
    <div class="content">
      <EditNoteIcon {...iconProps} />
      <p>Sign the Petition</p>
    </div>
    <ChevronRightIcon {...iconProps} />
  </a>

  <a href="/posts/betterbelmont" class="light">
    <div class="content">
      <CallIcon {...iconProps} />
      <p>Call for a Better Belmont</p>
    </div>
    <ChevronRightIcon {...iconProps} />
  </a>

  <a href="https://newsletter.bikegridnow.org/" target="_blank" class="dark">
    <div class="content">
      <MailIcon {...iconProps} />
      <p>Sign up for the Newsletter</p>
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
