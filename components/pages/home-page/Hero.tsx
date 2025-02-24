import { getHomepage } from "@/sanity/queries/homepage";
import { HeroContent } from "./HeroContent";

// Hero fetches data & passes it to HeroContent
const Hero = async () => {
  const { hero } = await getHomepage();

  return <HeroContent hero={hero} />;
};

export default Hero;
