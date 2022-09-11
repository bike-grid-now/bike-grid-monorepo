<script lang="ts">
  import BackgroundImage from "./BackgroundImage.svelte";
  import headerPhotoUrl from "../static/header-backdrop.jpeg";

  import LocationOn from "@material-symbols/svg-400/rounded/location_on.svg?component";
</script>

<BackgroundImage
  alt="A blue map of Chicago spit up into a grid on a white background."
  src={headerPhotoUrl}
  brightness={0.5}
  maxWidth={1020}
>
  <div class="py-48 flex flex-col justify-center itesm-center space-y-8">
    <div class="text-center space-y-4">
      <h1 class="text-5xl font-semibold">Enough is enough.</h1>
      <p class="leading-7">
        It's time to build a grid of bike-prioritized streets on 10% of Chicago
        streets with a 10mph speed limit.
      </p>
    </div>

    <div
      class="flex flex-row items-center justify-center space-x-1 text-white fill-current"
    >
      <LocationOn viewBox="0 0 48 48" width="2rem" height="2rem" />
      <p>Chicago, IL</p>
    </div>
  </div>
</BackgroundImage>
