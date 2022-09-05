<script lang="ts">
  import MailIcon from '@material-symbols/svg-400/rounded/mail.svg?component'
  import EditNoteIcon from '@material-symbols/svg-400/rounded/edit_note.svg?component'
  import ChevronRightIcon from '@material-symbols/svg-400/rounded/chevron_right.svg?component'

  const iconProps = {
    viewBox: "0 0 48 48",
    width: "1.5rem",
    height: "1.5rem"
  }
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

  <a href="https://newsletter.bikegridnow.org/" target="_blank">
      <div class="content">
        <MailIcon {...iconProps} />
        <p>Newsletter Signup</p>
      </div>
      <ChevronRightIcon {...iconProps} />
  </a>
</div>

<style>
  a {
    text-decoration: none;
    color: white;
    fill: currentColor;
    display: block;

    background-color: #c70909;
    padding: 25px;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button-group {
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid black;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  }

  .dark {
    background-color: #1b1a1b;
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
</style>