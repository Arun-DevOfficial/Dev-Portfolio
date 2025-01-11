import Web from "../assets/images/web-icon.png";
import Arrow from "../assets/images/right-arrow.png";
import { FaChalkboardTeacher } from "react-icons/fa";
// import WebDevelopment from "../assets/images/web-development.png"; // Assuming you have this image
// import MobileDevelopment from "../assets/images/mobile-development.png"; // Assuming you have this image
// import GraphicsDesign from "../assets/images/graphics-design.png"; // Assuming you have this image
// import UIDesign from "../assets/images/ui-design.png"; // Assuming you have this image

export default function Services() {
  return (
    <>
      <section className="w-full px-[12%] py-16 scroll-mt-20" id="services">
        <h4 className="text-center mb-2 text-lg">What I Offer</h4>
        <h2 className="text-center text-5xl">My Services</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
          Crafting responsive, user-friendly websites tailored to your business
          needs. From sleek landing pages to complex e-commerce platforms, I
          ensure a seamless experience for your users.
        </p>

        <div className="md:flex gap-6 my-10 justify-center">
          <div className="border border-gray-400 rounded-lg w-full md:w-[500px] px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
            <img src={Web} alt="web development" className="w-10" />
            <h3 className="text-lg my-3 text-gray-700">Web Development</h3>
            <p className="text-sm text-gray-600 leading-5">
              Building scalable and robust web applications using the MERN stack
              (MongoDB, Express.js, React, Node.js) to deliver exceptional user
              experiences.
            </p>
            <a href="#" className="flex items-center gap-2 text-sm mt-5">
              Read more
              <img src={Arrow} alt="read more" className="w-4" />
            </a>
          </div>
          <div className="border border-gray-400 mt-12 md:m-0 rounded-lg px-8 w-full md:w-[500px]  py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
            <FaChalkboardTeacher className="w-10 h-10 bg-[#ff388b] text-white rounded-xl p-2" />
            <h3 className="text-lg my-3 text-gray-700">Mentor</h3>
            <p className="text-sm text-gray-600 leading-5">
              I mentor aspiring developers in mastering the MERN stack, guiding
              them through building full-stack applications with a focus on best
              practices, efficiency, and scalability.
            </p>
            <a href="#" className="flex items-center gap-2 text-sm mt-5">
              Read more
              <img src={Arrow} alt="read more" className="w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
