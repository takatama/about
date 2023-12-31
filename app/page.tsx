import Image from "next/legacy/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import takatama from "../public/takatama.png";

export default function Home() {
  return (
    <main className="bg-white px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
        {/* <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">Hello World</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav> */}
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-blue-800 font-medium md:text-6xl">
            Hirokazu TAKATAMA
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl">
            IT and Technical Talent Development Trainer.
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
            Skilled in programming, AI implementation, and spearheading
            innovative technology projects for organizational advancement. Based
            in Tokyo, Japan.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 text-gray-600">
          <a href="https://twitter.com/takatama_jp" target="_blank">
            <AiFillTwitterCircle />
          </a>
          <a href="https://jp.linkedin.com/in/takatama" target="_blank">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/takatama" target="_blank">
            <AiFillGithub />
          </a>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image
            alt="Profile image of Hirokazu Takatama"
            src={takatama}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
    </main>
  );
}
