import Web from "../assets/images/web-icon.png";
import Arrow from "../assets/images/right-arrow.png";
import MobileApp from "../assets/images/mobile-icon.png";
import UI from "../assets/images/ui-icon.png";
import Graphics from "../assets/images/graphics-icon.png";
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

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 my-10 justify-items-center">
          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
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
          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
            <img src={MobileApp} alt="mobile development" className="w-10" />
            <h3 className="text-lg my-3 text-gray-700">Mobile Development</h3>
            <p className="text-sm text-gray-600 leading-5">
              Creating seamless and efficient mobile applications that run
              smoothly on both iOS and Android platforms, using React Native and
              other technologies.
            </p>
            <a href="#" className="flex items-center gap-2 text-sm mt-5">
              Read more
              <img src={Arrow} alt="read more" className="w-4" />
            </a>
          </div>
          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
            <img src={UI} alt="graphics design" className="w-10" />
            <h3 className="text-lg my-3 text-gray-700">Graphics Design</h3>
            <p className="text-sm text-gray-600 leading-5">
              Crafting visually stunning designs that enhance the user
              experience and bring digital concepts to life through creative
              graphic design solutions.
            </p>
            <a href="#" className="flex items-center gap-2 text-sm mt-5">
              Read more
              <img src={Arrow} alt="read more" className="w-4" />
            </a>
          </div>
          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
            <img src={Graphics} alt="UI/UX design" className="w-10" />
            <h3 className="text-lg my-3 text-gray-700">UI/UX Design</h3>
            <p className="text-sm text-gray-600 leading-5">
              Designing intuitive user interfaces and experiences that provide a
              seamless journey for users, ensuring accessibility and usability
              across devices.
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
