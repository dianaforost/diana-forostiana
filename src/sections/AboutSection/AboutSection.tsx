import { AboutContent } from "@/components/AboutContent/AboutContent";
import { Container } from "@/components/Container/Container";

export const AboutSection = () => {
  return (
    <section className="w-full bg-black relative overflow-hidden py-[60px] md:py-[50px] xl:py-[100px]">
      <Container className="h-full">
        <AboutContent />
      </Container>
    </section>
  );
};
