import Design from "../assets/images/web-icon.png";
import Arrow from "../assets/images/right-arrow.png";
import MobileApp from "../assets/images/mobile-icon.png";
import UI from "../assets/images/ui-icon.png";
import Graphics from "../assets/images/graphics-icon.png";

export default function Services() {
  return (
    <>
      <section className="w-full px-[12%] py-16 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg">What I Offer</h4>
        <h2 className="text-center text-5xl">My Services</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
          Crafting responsive, user-friendly websites tailored to your business
          needs. From sleek landing pages to complex e-commerce platforms, I
          ensure a seamless experience for your users.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 my-10 justify-items-center">
          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
            <img src={Design} alt="web design" className="w-10" />
            <h3 className="text-lg my-3 text-gray-700">Web Design</h3>
            <p className="text-sm text-gray-600 leading-5">
              Web development is the process of building,programming...
            </p>
            <a href="#" className="flex items-center gap-2 text-sm mt-5">
              Read more
              <img src={Arrow} alt="readmore" className="w-4" />
            </a>
          </div>
          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
            <img src={MobileApp} alt="web design" className="w-10" />
            <h3 className="text-lg my-3 text-gray-700">Web Design</h3>
            <p className="text-sm text-gray-600 leading-5">
              Web development is the process of building,programming...
            </p>
            <a href="#" className="flex items-center gap-2 text-sm mt-5">
              Read more
              <img src={Arrow} alt="readmore" className="w-4" />
            </a>
          </div>
          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
            <img src={Graphics} alt="web design" className="w-10" />
            <h3 className="text-lg my-3 text-gray-700">Web Design</h3>
            <p className="text-sm text-gray-600 leading-5">
              Web development is the process of building,programming...
            </p>
            <a href="#" className="flex items-center gap-2 text-sm mt-5">
              Read more
              <img src={Arrow} alt="readmore" className="w-4" />
            </a>
          </div>
          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
            <img src={UI} alt="web design" className="w-10" />
            <h3 className="text-lg my-3 text-gray-700">Web Design</h3>
            <p className="text-sm text-gray-600 leading-5">
              Web development is the process of building,programming...
            </p>
            <a href="#" className="flex items-center gap-2 text-sm mt-5">
              Read more
              <img src={Arrow} alt="readmore" className="w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
