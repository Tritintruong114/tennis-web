import Coaches from "@/components/pages/home-page/Coaches";
import FAQ from "@/components/pages/home-page/FAQ";
import Hero from "@/components/pages/home-page/Hero";
import Locations from "@/components/pages/home-page/Locations";
import Rally from "@/components/pages/home-page/Rally";
import Register from "@/components/pages/home-page/Register";
import { getHomepage } from "@/sanity/queries/homepage";

export default async function Home() {
  const { rally } = await getHomepage();

  return (
    <>
      <Hero />
      <Register />
      <Coaches />
      <Locations />
      <FAQ />
      <Rally rally={rally} />
    </>
  );
}
