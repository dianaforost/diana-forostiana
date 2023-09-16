import image from "../../../public/H6tDpdaTTXc3RJGu804TmGu1mw.webp";

export const AboutContent = () => {
  return (
    <>
      <img
        src={image.src}
        className="absolute top-0 right-[-120px] md:right-[-255px] xl:right-[-100px] z-[1] w-[400px] h-[400px] md:w-[500px] h-[500px] xl:w-[600px] xl:h-[600px]"
        alt="Log"
        width={600}
        height={600}
      ></img>
      <div className="z-[999] relative flex flex-col gap-[40px]">
        <h2 className="text-[#B9FBC0] text-[20px] leading-[1.5em] md:text-[16px]">
          Junior Full-Stack Developer
        </h2>
        <p className="text-white font-extrabold text-[32px] leading-[1.2em] md:text-[50px] md:w-[610px]">
          Diana Forostiana, a wizard in crafting flawless and interactive web
          experiences.
        </p>
      </div>
    </>
  );
};
