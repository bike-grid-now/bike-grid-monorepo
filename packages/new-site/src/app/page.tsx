import BackgroundImage from "@/components/BackgroundImage";
import Backdrop from "@/static/header-backdrop.jpeg";
import Hero, { HeroHeading, HeroTagline } from "@/components/Hero";
import { getSiteSettings } from "@/lib/sanity";
import SocialIconList from "@/components/SocialIconList";
import GridBackground from "@/components/GridBackground";
import Container from "@/components/Container";

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
      <GridBackground className="py-56">
        <Container>
          <h1 className="text-4xl text-white">Hi!</h1>
        </Container>
      </GridBackground>
    </div>
  );
}

export default Home;
