import FooterColor from "../assets/images/footer-bg-color.png";
import { GoArrowRight } from "react-icons/go";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-[length:90%_auto] bg-center"
        style={{ backgroundImage: `url(${FooterColor})` }}
      >
        <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
        <h4 className="text-center text-5xl font-Ovo">Get in touch</h4>
        <h2 className="text-center max-w-lg mx-auto font-Ovo mt-5 mb-12">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below
        </h2>
        <form action="#" className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
            <input
              type="text"
              placeholder="Enter you name"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            />
            <input
              type="text"
              placeholder="Enter you email"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            />
          </div>
          <textarea
            rows="6"
            placeholder="Enter your message"
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          ></textarea>
          <button className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500">
            <p>Submit now</p>
            <GoArrowRight />
          </button>
        </form>
        <Footer />
      </div>
    </>
  );
}
