import { Container } from "@/components/Container/Container";
import image from "../../../public/pic0Invnuoy8YLI0bVXro1ajJCc.webp";

export const EmptySection = () => {
  return (
    <section className="w-full h-full">
      <Container className="flex items-center justify-center">
        <img
          src={image.src}
          className=""
          alt="Log"
          width={500}
          height={500}
        ></img>
      </Container>
    </section>
  );
};
