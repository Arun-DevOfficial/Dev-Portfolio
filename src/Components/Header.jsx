import Profile from "../assets/Avatar.png";
import Hand from "../assets/images/hand-icon.png";
import { TiArrowRight } from "react-icons/ti";
import { FiDownload } from "react-icons/fi";

export default function Header() {
  return (
    <>
      <header className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <img src={Profile} alt="Arun" className="rounded-full w-32 border" />
        <h3 className="flex items-center font-Ovo font-medium gap-2 text-xl md:text-2xl mb-3">
          Hi! I'm Krishna
          <img src={Hand} alt="Welcome" className="w-6" />
        </h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px]">
          MERN Stack Developer Based in India
        </h1>
        <p className="max-w-3xl mx-auto font-Ovo">
          I am a Full Stack Developer from Tamil Nadu, India. With 2 years of
          experience. My expertise spans front-end to back-end development, and
          I also have a passion for mentoring others in the field.
        </p>
        <div className="flex flex-col md:flex-row mt-4 gap-4 items-center cursor-pointer">
          <div className="flex items-center px-6 py-3 border rounded-full bg-gradient-to-r text-white font-semibold from-[#b820e6] to-[#da7d20] text-wrap gap-2">
            <p>Contact Me</p>
            <TiArrowRight size={25} />
          </div>

          <div className="flex items-center px-10 py-3 bg-white rounded-full text-wrap gap-2 cursor-pointer border border-gray-500">
            <p>Resume</p>
            <FiDownload size={18} />
          </div>
        </div>
      </header>
    </>
  );
}
