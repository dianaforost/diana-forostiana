import taskpro from "../../../public/taskpro.png";
import show from "../../../public/show.png";
import phonebook from "../../../public/phonebook.png";
import data from "@/data/data.json";
export const ExperienceContent = () => {
  const images = [taskpro, show, phonebook];
  const { experience } = data;
  return (
    <>
      <h2 className="text-[30px] font-bold leading-[1.2em] tracking-[-1.8px] md:text-[40px] xl:text-[48px] mb-[40px] xl:mb-[60px]">
        Featured Projects
      </h2>
      <ul className="flex flex-col items-center gap-[25px] md:items-stretch md:gap-0 md:flex-row md:justify-between">
        {images.map((image, index) => (
          <li
            key={index}
            className="py-[15px] px-[12px] shadow-bs rounded-[10px] hover:w-[310px]"
          >
            <img
              src={image.src}
              className="rounded-[10px] mb-[10px] w-[200px] xl:w-[300px]"
              alt="Log"
              width={300}
              height={500}
            ></img>
            <h3 className="font-bold mb-[1px] text-[24px]">
              {experience[index].title}
            </h3>
            <p className="mb-[8px] text-[14px] w-[200px] xl:w-[300px]">
              {experience[index].description}
            </p>
            <p className="text-[12px] w-[200px] xl:w-[300px]">
              {experience[index].text}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
