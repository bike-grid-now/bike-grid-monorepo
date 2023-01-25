import BackgroundImage from "@/components/BackgroundImage";
import Backdrop from "@/static/header-backdrop.jpeg";
import Hero, { HeroHeading, HeroTagline } from "@/components/Hero";
import { getSiteSettings } from "@/lib/sanity";
import SocialIconList from "@/components/SocialIconList";
import Main from "./Main";

async function Home() {
  const siteSettings = await getSiteSettings();

  return (
    <div>
      <BackgroundImage src={Backdrop} alt="A grid of blue roads." darken>
        <Hero>
          <HeroHeading>{siteSettings.heroTitle}</HeroHeading>
          <HeroTagline>{siteSettings.heroTagline}</HeroTagline>
          <SocialIconList />
        </Hero>
      </BackgroundImage>
      <Main />
    </div>
  );
}

export default Home;
