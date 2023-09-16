import { Container } from "@/components/Container/Container";
import data from "@/data/data.json";

export const Header = () => {
  const { footer } = data;

  return (
    <header className="pt-[20px] absolute w-full text-white z-[20]">
      <Container className="flex justify-evenly items-center">
        <a href="/" className="text-[24px] hidden xl:block">
          Diana <span className="font-bold">Forostiana</span>
        </a>
        <nav>
          <ul className="flex justify-around gap-[20px] md:gap-[70px] xl:gap-[50px]">
            <li>
              <a
                href="#about"
                className="text-[12px] leading-[1.2em] md:text-[16px] md:leading-[1.2em] xl:text-[] xl:leading-[]"
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-[12px] leading-[1.2em] md:text-[16px] md:leading-[1.2em] xl:text-[] xl:leading-[]"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#soft"
                className="text-[12px] leading-[1.2em] md:text-[16px] md:leading-[1.2em] xl:text-[] xl:leading-[]"
              >
                Soft Skills
              </a>
            </li>
            <li>
              <a
                href="#tech"
                className="text-[12px] leading-[1.2em] md:text-[16px] md:leading-[1.2em] xl:text-[] xl:leading-[]"
              >
                Technical Skills
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
