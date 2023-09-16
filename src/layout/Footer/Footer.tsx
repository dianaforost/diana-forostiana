import { Container } from "@/components/Container/Container";
import data from "@/data/data.json";
import image from "../../../public/pq2TeLawbkeJCarurNVOzawp1o.webp";
import Telegram from "../../../public/icons/Telegram.svg";
import GitHub from "../../../public/icons/github.svg";

export const Footer = () => {
  const { footer } = data;

  return (
    <section className="py-[30px] md:py-[40px] xl:py-[100px]">
      <Container className="flex flex-col gap-[100px]">
        <h2 className="visually-hidden">{footer.title}</h2>
        <div className="flex justify-around">
          {footer.info.map((section, index) => (
            <div key={index}>
              <h3 className="text-[16px] font-bold mb-[15px]">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-[15px]">
                {section.list.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center text-[16px] leading-[1.5em] flex flex-col gap-[30px]">
          <img
            src={image.src}
            className="mx-[auto]"
            alt="Log"
            width={200}
            height={200}
          ></img>
          <div className="flex flex-col gap-[10px]">
            <ul className="flex gap-[20px] justify-center">
              <li>
                <a
                  href="https://t.me/dianaforost"
                  className="hover:fill-[#247EFF]"
                >
                  <Telegram className="w-[30px] h-[30px]" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dianaforost"
                  className="hover:fill-[#247EFF]"
                >
                  <GitHub className="w-[30px] h-[30px]" />
                </a>
              </li>
            </ul>
            <p>{footer.footerContent}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
