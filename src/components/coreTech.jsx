import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";

const CoreTech = () =>
{
  return (
    <>
      <div className="text-gray-50">
        <div className="py-8 flex justify-center items-center">
          <GrTechnology />
          <span className="mx-1 uppercase font-light text-md font-mono">Core technologies</span>
        </div>
        <div className="flex justify-around items-center">
          <div className="flex justify-center items-center font-semibold mx-auto w-fit px-3 py-1.5 rounded-sm shadow border border-gray-700">
            <FaReact color="00ffff" size={ 16 } /> <span className="mx-1 text-sm ">React</span>
          </div>
          <div className="flex justify-center items-center font-semibold mx-auto w-fit px-3 py-1.5 rounded-sm shadow border border-gray-700">
            <IoLogoNodejs color="7dc823" size={ 16 } /> <span className="mx-1 text-sm">Express.Js</span>
          </div>
          <div className="flex justify-center items-center font-semibold mx-auto w-fit px-3 py-1.5 rounded-sm shadow border border-gray-700">
            <SiMongodb color="419432" size={ 16 } /> <span className="mx-1 text-sm">MongoDB</span>
          </div>
          <div className="flex justify-center items-center font-semibold mx-auto w-fit px-3 py-1.5 rounded-sm shadow border border-gray-700">
            <RiTailwindCssFill color="6366f1" size={ 16 } /> <span className="mx-1 text-sm">Tailwind</span>
          </div>
          <div className="flex justify-center items-center font-semibold mx-auto w-fit px-3 py-1.5 rounded-sm shadow border border-gray-700">
            <SiTypescript className="rounded" color="3178c6" size={ 16 } /> <span className="mx-1 text-sm">Typescript</span>
          </div>
        </div>
      </div>
    </>
  )
};

export default CoreTech
