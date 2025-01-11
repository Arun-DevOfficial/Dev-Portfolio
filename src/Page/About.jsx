import Avatar from "../assets/Profile.png";
import Code from "../assets/images/code-icon.png";
import Education from "../assets/images/edu-icon.png";
import Project from "../assets/images/project-icon.png";
import Vscode from "../assets/images/vscode.png";
import Firebase from "../assets/images/firebase.png";
import Mongodb from "../assets/images/mongodb.png";
import Git from "../assets/images/git.png";
import CirculorText from "../assets/images/circular-text.png";
import Dev from "../assets/images/dev-icon.png";

export default function About() {
  return (
    <section className="mx-auto sm:px-[6%] py-10 scroll-mt-20" id="about">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>
      <div className="flex flex-col lg:flex-row items-center gap-20 my-20 max-w-[70%] mx-auto">
        <div className="max-w-max mx-auto relative">
          <img
            src={Avatar}
            alt="Avatar"
            className="w-64 sm:w-80 px-6 rounded-3xl max-w-none border"
          />
          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
            <img src={CirculorText} alt="Circular Text" />

            <img
              src={Dev}
              alt="Circular Text"
              className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-5xl leading-relaxed text-lg text-justify font-Ovo">
            I am a passionate Full Stack Developer with a keen eye for detail
            and a focus on building responsive, high-performance web
            applications. Specializing in front-end development, I craft
            seamless user experiences using modern JavaScript frameworks like
            React.js, ensuring both functionality and design are perfectly
            aligned. My collaborative approach allows me to work closely with
            teams to design intuitive interfaces and optimize web interactions.
            I am committed to following best practices in coding, version
            control, and documentation to build scalable and efficient web
            solutions that drive user satisfaction.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
              <img src={Code} alt="code" className="w-7 mt-3" />
              <h3 className="my-4 font-semibold text-gray-700">Languages</h3>
              <p className="text-gray-600 text-sm">
                HTML, CSS, Tailwind CSS, JavaScript, React JS
              </p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
              <img src={Education} alt="education" className="w-7 mt-3" />
              <h3 className="my-4 font-semibold text-gray-700">Education</h3>
              <p className="text-gray-600 text-sm">B.E in Computer Science</p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
              <img src={Project} alt="Project" className="w-7 mt-3" />
              <h3 className="my-4 font-semibold text-gray-700">Projects</h3>
              <p className="text-gray-600 text-sm">
                Build more than 5 projects
              </p>
            </li>
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo font-bold">Tools I Use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={Vscode} alt="vscode" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={Firebase} alt="firebase" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={Mongodb} alt="mongodb" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s"
                alt="react"
                className="w-5 sm:w-7"
              />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={Git} alt="git" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img
                src={`https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png`}
                alt="react"
                className="w-5 sm:w-7"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
