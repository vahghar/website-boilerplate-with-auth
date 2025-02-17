import Navbar from "@/components/navbar";
import { HeroHome} from "@/components/sections/Hero";
import {Footer} from "@/components/sections/footer";
import IntegratedFeatureSection from "@/components/sections/features_2";
import { AnimatedTooltipPreview } from "@/components/sections/categories_2";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroHome />
      <AnimatedTooltipPreview/>
      <IntegratedFeatureSection/>
      <Footer/>
    </>
  );
}
