"use client";

import Image from "next/image";
import { basePath } from "../../next.config";
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
          <nav className="py-5 mb-6 flex justify-between">
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
              <li>
                <div className="px-4">
                  <a
                    href="/"
                    className="text-blue-600 font-semibold border-b-2 border-blue-600 dark:text-cyan-400 dark:border-cyan-400"
                  >
                    EN
                  </a>
                  <span className="text-gray-500 mx-2">|</span>
                  <a
                    href="/ja"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-300"
                  >
                    JP
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div className="text-center p-5">
            <h2 className="text-5xl py-2 text-blue-800 font-medium md:text-6xl dark:text-cyan-500">
              高玉 広和
            </h2>
            <h3 className="text-blue-800 dark:text-cyan-500">
              TAKATAMA Hirokazu
            </h3>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              人材開発およびテクニカルアドバイザー
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              ソフトウェアエンジニアリングの知識を駆使してビジネスプロセスを効率化。
              事業部人事（HRBP）でエンジニア人材の育成、開発環境の整備を担当。
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600 dark:text-gray-400">
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
