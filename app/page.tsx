"use client";

import Image from "next/image";
import { basePath } from "../next.config";
const BASE_PATH = basePath || "";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import React from "react";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-5 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-6 flex justify-between">
            <h1 className="text-xl"></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white px-4 py-2 rounded-md ml-8"
                  href="https://lapras.com/public/takatama"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-5">
            <h2 className="text-5xl py-2 text-blue-800 font-medium md:text-6xl dark:text-cyan-500">
              Hirokazu TAKATAMA
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              IT and Technical Talent Development Trainer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              Skilled in programming, AI implementation, and spearheading
              innovative technology projects for organizational advancement.
              Based in Tokyo, Japan.
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
              src={`${BASE_PATH}/takatama.png`}
              fill
              style={{ objectFit: "cover" }}
              priority={true}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
