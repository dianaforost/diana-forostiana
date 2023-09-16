import { AboutSection } from "@/sections/AboutSection/AboutSection";
import { EmptySection } from "@/sections/EmptySection/EmptySection";
import { ExperienceSection } from "@/sections/ExperienceSection/ExperienceSection";
import { HeroSection } from "@/sections/HeroSection/HeroSection";
import { TechSkillsSection } from "@/sections/SkillsSection/SkillsSection";

export default function Home() {
  return (
    <main className="flex relative flex-col items-center justify-between">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EmptySection />
      <TechSkillsSection />
    </main>
  );
}
