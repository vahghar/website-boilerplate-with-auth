import Navbar from "@/components/navbar";
import FeatureSection from "@/components/sections/features";
import { HeroHome} from "@/components/sections/Hero";
import BusinessCategories from "@/components/sections/categories";
import {Footer} from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroHome />
      <BusinessCategories/>
      <FeatureSection/>
      <Footer/>
    </>
  );
}
