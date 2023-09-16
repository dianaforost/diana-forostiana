import image from "../../../public/G.png";

export const HeroContent = () => {
  return (
    <div className="h-full flex flex-col gap-[20px] justify-center items-center text-white">
      <img
        className="absolute"
        src={image.src}
        alt="Log"
        width={900}
        height={900}
      ></img>
      <h1 className="text-center font-bold text-[32px] md:text-[64px] xl:text-[80px] z-[20]">
        “If you can dream it, I can code it!”
      </h1>
      <div className="z-[20] flex gap-[15px]">
        <button className="py-[6px] px-[14px] bg-[#C2C2C2] rounded-[20px] text-black text-[14px] md:text-[20px] xl:text-[24px] leading-[1.2em]">
          About
        </button>
        <button className="text-[14px] md:text-[20px] xl:text-[24px] leading-[1.2em]">
          Projects
        </button>
      </div>
    </div>
  );
};
