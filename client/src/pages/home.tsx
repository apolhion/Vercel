import { Nav } from "@/components/shared/nav";
import { Hero } from "@/components/sections/hero";
import { Design } from "@/components/sections/design";
import { Display } from "@/components/sections/display";
import { CameraSection } from "@/components/sections/camera";
import { Performance } from "@/components/sections/performance";
import { Limited } from "@/components/sections/limited";
import { Pricing } from "@/components/sections/pricing";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
       <Pricing />
      <Design />
      <Display />
      <CameraSection />
      <Performance />
      <Limited />
 
      <Footer />
    </div>
  );
}