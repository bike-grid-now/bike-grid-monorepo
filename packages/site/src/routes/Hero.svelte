<script lang="ts">
  import BackgroundImage from './BackgroundImage.svelte'
  import headerPhotoUrl from '../static/header-backdrop.jpeg'

  import LocationOn from '@material-symbols/svg-400/rounded/location_on.svg?component'
</script>

<BackgroundImage src={headerPhotoUrl} brightness={0.5}>
  <div class="hero">
    <div class="header">
      <h1>Enough is enough.</h1>
      <p>It's time to build a 450 mile-long network of safe infrastructure</p>
    </div>

    <div class="location">
      <LocationOn viewBox="0 0 48 48" width="2rem" height="2rem" />
      <p>Chicago, IL</p>
    </div>
  </div>
</BackgroundImage>

<style>
  .hero {
    padding-top: 12rem;
    padding-bottom: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hero > * + * {
    margin-top: 2.5rem;
  }

  .header > * + * {
    margin-top: 0.5rem;
  }

  .header {
    text-align: center;
  }

  h1 {
    font-size: 3rem;
  }

  .location {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    fill: currentColor;
  }

  .location > * + * {
    margin-left: 0.25rem;
  }
</style>