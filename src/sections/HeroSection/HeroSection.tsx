import { Container } from "@/components/Container/Container";
import { HeroContent } from "@/components/HeroContent/HeroContent";

export const HeroSection = () => {
  return (
    <section className="bg-black w-full relative h-[500px] md:h-[800px] overflow-hidden">
      <Container className="h-full">
        <HeroContent />
      </Container>
    </section>
  );
};
