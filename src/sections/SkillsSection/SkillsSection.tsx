import { Container } from "@/components/Container/Container";
import { SkillsContent } from "@/components/SkillsContent/SkillsContent";

export const TechSkillsSection = () => {
  return (
    <section className="w-full h-full relative overflow-hidden">
      <Container className="sec py-[30px] md:py-[40px] xl:py-[100px]">
        <SkillsContent />
      </Container>
    </section>
  );
};
