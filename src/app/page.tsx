import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import AchievementsBanner from "@/components/landing/AchivementsBanner";
import AboutSection from "@/components/landing/AboutSection";
import RecruitmentCTA from "@/components/landing/RecruitmentCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AchievementsBanner />
        <AboutSection />
        <RecruitmentCTA />
      </main>
      <Footer />
    </>
  );
}