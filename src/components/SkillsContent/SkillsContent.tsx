import data from "@/data/data.json";
import image from "../../../public/pic0Invnuoy8YLI0bVXro1ajJCc 1.png";
export const SkillsContent = () => {
  const { techSkiils } = data;
  const { softSkills } = data;
  return (
    <>
      <h2 className="text-[30px] font-bold leading-[1.2em] tracking-[-1.8px] md:text-[40px] xl:text-[48px] mb-[40px] xl:mb-[60px]">
        Skills
      </h2>
      <div className="flex flex-col gap-[15px] md:gap-[0] md:flex-row justify-between md:justify-evenly">
        <div className="flex flex-col gap-[10px] md:gap-[30px] items-center">
          <h3 className="text-[20px] text-[#247EFF]">{techSkiils.title}</h3>
          <ul className="grid justify-items-center md:justify-items-start gap-x-[15px] gap-y-[20px] grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {techSkiils.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-[10px] md:gap-[30px] items-center">
          <h3 className="text-[20px] text-[#247EFF]">{softSkills.title}</h3>
          <ul className="grid justify-items-center gap-[20px]">
            {softSkills.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
