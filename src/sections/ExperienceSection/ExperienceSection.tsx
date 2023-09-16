import { Container } from "@/components/Container/Container";
import { ExperienceContent } from "@/components/ExperienceContent/ExperienceContent";

export const ExperienceSection = () => {
  return (
    <section className="py-[60px] md:py-[50px] xl:py-[100px] w-full h-full">
      <Container className="Projects">
        <ExperienceContent />
      </Container>
    </section>
  );
};
