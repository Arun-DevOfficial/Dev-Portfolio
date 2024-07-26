import { TbPhoneCall } from "react-icons/tb";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunMedium } from "react-icons/lu";
import { useState } from "react";
import HeaderBackground from "../assets/images/header-bg-color.png";
import { LuAlignRight } from "react-icons/lu";
import {
  FaFacebookF,
  FaXTwitter,
  FaWhatsapp,
  FaHouseChimney,
  FaXing,
  FaInstagram,
  FaChalkboardUser,
  FaHeadphonesSimple,
  FaPhotoFilm,
} from "react-icons/fa6";

export default function Navbar() {
  const [Theme, setTheme] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <img src={HeaderBackground} alt="Header" className="w-full" />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <h1 className="text-3xl cursor-pointer text-slate-800 flex items-center lg:ml-20 font-Ovo">
          Arun
          <span className="inline-block bg-purple-700 w-2 h-2 rounded-full"></span>
        </h1>

        <ul className="hidden md:flex gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setTheme(!Theme)} aria-label="Toggle theme">
            {!Theme ? <IoMoonOutline size={23} /> : <LuSunMedium size={23} />}
          </button>

          <div className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full cursor-pointer font-Ovo">
            <p className="font-medium text-md">Contact</p>
            <TbPhoneCall size={20} />
          </div>

          <button
            className="md:hidden block ml-3"
            onClick={() => setOpenMenu(!openMenu)}
            aria-label="Toggle menu"
          >
            <LuAlignRight size={23} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            openMenu
              ? "bg-white shadow-md shadow-black/10 rounded-b-lg fixed top-0 left-0 right-0 p-6 flex flex-col justify-start items-center transition-transform duration-300"
              : "fixed top-[-100%] transition-transform duration-300 md:hidden"
          }`}
        >
          <FaXing
            className="w-5 h-5 self-end hover:text-[#15bfae]"
            onClick={() => setOpenMenu(!openMenu)}
          />
          <div className="flex flex-col space-y-6">
            <div className="flex space-x-4 items-center group hover:text-[#15bfae]">
              <FaHouseChimney className="w-5 h-5 group-hover:text-[#15bfae]" />
              <h1 className="font-medium text-lg">Home</h1>
            </div>
            <div className="flex space-x-4 items-center group hover:text-[#15bfae]">
              <FaChalkboardUser className="w-5 h-5 group-hover:text-[#15bfae]" />
              <h1 className="font-medium text-lg">About</h1>
            </div>
            <div className="flex space-x-4 items-center group hover:text-[#15bfae]">
              <FaPhotoFilm className="w-5 h-5 group-hover:text-[#15bfae]" />
              <h1 className="font-medium text-lg">My Work</h1>
            </div>
            <div className="flex space-x-4 items-center group hover:text-[#15bfae]">
              <FaHeadphonesSimple className="w-5 h-5 group-hover:text-[#15bfae]" />
              <h1 className="font-medium text-lg">Contact</h1>
            </div>
          </div>

          <div className="flex space-x-4 mt-6">
            <FaFacebookF className="border rounded-full border-slate-800 w-8 h-8 p-2 hover:text-[#15bfae] hover:border-[#15bfae]" />
            <FaXTwitter className="border rounded-full border-slate-800 w-8 h-8 p-2 hover:text-[#15bfae] hover:border-[#15bfae]" />
            <FaWhatsapp className="border rounded-full border-slate-800 w-8 h-8 p-2 hover:text-[#15bfae] hover:border-[#15bfae]" />
            <FaInstagram className="border rounded-full border-slate-800 w-8 h-8 p-2 hover:text-[#15bfae] hover:border-[#15bfae]" />
          </div>
        </div>
      </nav>
    </>
  );
}
