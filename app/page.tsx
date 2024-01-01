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

type Profile = {
  name: string;
  romaji?: string;
  title: string;
  description: string;
};

type Locale = "en" | "ja";

type Content = {
  [key in Locale]: Profile;
};

const content: Content = {
  en: {
    name: "Hirokazu TAKATAMA",
    title: "Talent Development & Technical Advisor",
    description:
      "Leverages software engineering knowledge to optimize business processes. Responsible for nurturing engineering talent and maintaining development environments in HRBP roles. Based in Tokyo, Japan.",
  },
  ja: {
    name: "高玉 広和",
    romaji: "TAKATAMA Hirokazu",
    title: "人材開発およびテクニカルアドバイザー",
    description:
      "ソフトウェアエンジニアリングの知識を駆使してビジネスプロセスを効率化。事業部人事（HRBP）でエンジニア人材の育成、開発環境の整備を担当。",
  },
};

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  locale,
  setLocale,
}) => {
  const selected =
    "font-semibold border-b-2 border-blue-600 dark:border-cyan-400 dark:text-cyan-400 text-blue-600";
  const unselected = "text-gray-500 hover:text-blue-600 dark:text-gray-300";

  return (
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
            <button
              onClick={() => setLocale("en")}
              className={`${locale === "en" ? selected : unselected}`}
            >
              EN
            </button>
            <span className="text-gray-500 mx-2">|</span>
            <button
              onClick={() => setLocale("ja")}
              className={`${locale === "ja" ? selected : unselected}`}
            >
              JP
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

const ProfileSection: React.FC<Profile> = ({
  name,
  romaji,
  title,
  description,
}) => (
  <div className="text-center p-5">
    <h2 className="text-5xl py-2 text-blue-800 font-medium md:text-6xl dark:text-cyan-500">
      {name}
    </h2>
    {romaji && <h3 className="text-blue-800 dark:text-cyan-500">{romaji}</h3>}
    <h3 className="text-2xl py-2 md:text-3xl dark:text-white">{title}</h3>
    <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
      {description}
    </p>
  </div>
);

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [locale, setLocale] = useState<"en" | "ja">("en");
  const { name, romaji, title, description } = content[locale];

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-5 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            locale={locale}
            setLocale={setLocale}
          />
          <ProfileSection
            name={name}
            romaji={romaji}
            title={title}
            description={description}
          />
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
