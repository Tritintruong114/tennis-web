import Coaches from "@/components/pages/home-page/Coaches";
import FAQ from "@/components/pages/home-page/FAQ";
import Hero from "@/components/pages/home-page/Hero";
import Locations from "@/components/pages/home-page/Locations";
import Rally from "@/components/pages/home-page/Rally";
import Register from "@/components/pages/home-page/Register";

export default function Home() {
  return (
    <>
      <Hero />
      <Register />
      <Coaches />
      <Locations />
      <FAQ />
      <Rally />
    </>
  );
}
