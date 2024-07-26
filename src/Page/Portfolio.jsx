import Travel from "../assets/images/work-3.png";
import Education from "../assets/images/work-2.png";
import Blog from "../assets/images/work-4.png";
import Restaurant from "../assets/images/Learn.png";
import { BsGithub } from "react-icons/bs";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";

export default function Portfolio() {
  return (
    <>
      <section
        className="w-full sm:px-[12%] py-12 scroll-mt-20"
        id="portfolio"
      >
        <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
        <h2 className="text-center text-5xl font-Ovo">My Latest Portfolio</h2>
        <p className="text-center max-w-2xl mx-auto font-Ovo mt-5 mb-12 p-3">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end development.
        </p>
        <div className="grid gap-10 my-24 px-5 sm:px-10 md:px-20 justify-items-center">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
            <img
              src={Restaurant}
              alt="Travel"
              className="w-[550px] border rounded-lg"
            />
            <div className="w-full md:w-1/2 max-w-lg text-center sm:text-start">
              <h3 className="text-xl sm:text-2xl font-semibold my-4">
                Learn Mode
              </h3>
              <p className="text-gray-600 my-5 leading-relaxed text-justify font-Ovo">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                ullam iste deleniti aspernatur, autem expedita modi ipsa
                exercitationem culpa id tempora neque est in magni! Dolore
                voluptates est harum ipsam.
              </p>
              <div className="flex gap-5 items-center p-6">
                <a
                  href="#"
                  className="flex items-center px-6 py-3 border rounded-full bg-gradient-to-r text-white font-semibold from-[#b820e6] to-[#da7d20] text-wrap gap-3 cursor-pointer"
                >
                  <BsGithub size={24} />
                  <p>Github</p>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-5 py-3 bg-white rounded-full text-wrap cursor-pointer border border-gray-500"
                >
                  <p className="font-medium text-gray-500">Preview</p>
                  <BsBoxArrowUpRight size={20} className="text-gray-500" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
            <img
              src={Education}
              alt="Education"
              className="w-[550px] border rounded-lg"
            />
            <div className="w-full md:w-1/2 max-w-lg text-center sm:text-start">
              <h3 className="text-xl sm:text-2xl font-semibold my-4">
                Thaai Food Restaurant
              </h3>
              <p className="text-gray-600 my-5 leading-relaxed text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                ullam iste deleniti aspernatur, autem expedita modi ipsa
                exercitationem culpa id tempora neque est in magni! Dolore
                voluptates est harum ipsam.
              </p>
              <div className="flex gap-5 items-center p-6">
                <a
                  href="#"
                  className="flex items-center px-6 py-3 border rounded-full bg-gradient-to-r text-white font-semibold from-[#b820e6] to-[#da7d20] text-wrap gap-3 cursor-pointer"
                >
                  <BsGithub size={24} />
                  <p>Github</p>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-5 py-3 bg-white rounded-full text-wrap cursor-pointer border border-gray-500"
                >
                  <p className="font-medium text-gray-500">Preview</p>
                  <BsBoxArrowUpRight size={20} className="text-gray-500" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
            <img
              src={Blog}
              alt="Blog"
              className="w-[550px] border rounded-lg"
            />
            <div className="w-full md:w-1/2 max-w-lg text-center sm:text-start">
              <h3 className="text-xl sm:text-2xl font-semibold my-4">
                Pixel Pluse
              </h3>
              <p className="text-gray-600 my-5 leading-relaxed text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                ullam iste deleniti aspernatur, autem expedita modi ipsa
                exercitationem culpa id tempora neque est in magni! Dolore
                voluptates est harum ipsam.
              </p>
              <div className="flex gap-5 items-center p-6">
                <a
                  href="#"
                  className="flex items-center px-6 py-3 border rounded-full bg-gradient-to-r text-white font-semibold from-[#b820e6] to-[#da7d20] text-wrap gap-3 cursor-pointer"
                >
                  <BsGithub size={24} />
                  <p>Github</p>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-5 py-3 bg-white rounded-full text-wrap cursor-pointer border border-gray-500"
                >
                  <p className="font-medium text-gray-500">Preview</p>
                  <BsBoxArrowUpRight size={20} className="text-gray-500" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
            <img
              src={Travel}
              alt="Travel"
              className="w-[550px] border rounded-lg"
            />
            <div className="w-full md:w-1/2 max-w-lg text-center sm:text-start">
              <h3 className="text-xl sm:text-3xl font-semibold my-4">
                Trabook
              </h3>
              <p className="text-gray-600 my-5 leading-relaxed text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                ullam iste deleniti aspernatur, autem expedita modi ipsa
                exercitationem culpa id tempora neque est in magni! Dolore
                voluptates est harum ipsam.
              </p>
              <div className="flex gap-5 items-center p-6">
                <a
                  href="#"
                  className="flex items-center px-6 py-3 border rounded-full bg-gradient-to-r text-white font-semibold from-[#b820e6] to-[#da7d20] text-wrap gap-3 cursor-pointer"
                >
                  <BsGithub size={24} />
                  <p>Github</p>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-5 py-3 bg-white rounded-full text-wrap cursor-pointer border border-gray-500"
                >
                  <p className="font-medium text-gray-500">Preview</p>
                  <BsBoxArrowUpRight size={20} className="text-gray-500" />
                </a>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="flex items-center gap-3 px-5 py-3 my-6 sm:my-8 bg-white rounded-full text-wrap cursor-pointer border border-gray-500"
          >
            <p>Show more</p>
            <GoArrowRight />
          </a>
        </div>
      </section>
    </>
  );
}
