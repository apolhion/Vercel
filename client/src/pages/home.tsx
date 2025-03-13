import { lazy, Suspense } from "react";
import { Nav } from "@/components/shared/nav";
import { Hero } from "@/components/sections/hero";
import { LoadingOverlay } from "@/components/shared/loading-overlay";

// Lazy load components that are not immediately visible
const Design = lazy(() => import("@/components/sections/design"));
const Display = lazy(() => import("@/components/sections/display"));
const CameraSection = lazy(() => import("@/components/sections/camera"));
const Performance = lazy(() => import("@/components/sections/performance"));
const Limited = lazy(() => import("@/components/sections/limited"));
const Pricing = lazy(() => import("@/components/sections/pricing"));
const VideoReview = lazy(() => import("@/components/sections/video-review"));
const Footer = lazy(() => import("@/components/sections/footer"));

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Suspense fallback={<LoadingOverlay />}>
        <Pricing />
        <VideoReview />
        <Design />
        <Display />
        <CameraSection />
        <Performance />
        <Limited />
        <Footer />
      </Suspense>
    </div>
  );
}