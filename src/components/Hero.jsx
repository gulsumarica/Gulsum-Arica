import React from "react";
import useTranslations from "../hooks/useTranslations";
import Header from "../Layout/Header";
import LanguageSwitcher from "./LanguageSwitcher";

function Hero() {
  const translations = useTranslations();
  return (
    <div className="bg-[#4731D3]">
      <div className="flex flex-row justify-between gap-16 m-0 pl-10 h-[400px]">
        {/* Sol Taraf (Yazılar) */}
        <div className="flex flex-col items-start justify-center pl-36 gap-8 w-2/3">
          <h3 className="text-2xl text-[#CBF281] pl-10">Gülsüm</h3>
          <h1 className="text-4xl text-white">{translations.title1}</h1>
          <h2 className="text-white">{translations.desc}</h2>
          <div className="flex flex-row gap-4 mt-4">
            <button className="border w-28 h-10 flex flex-row items-center justify-center rounded-sm text-[#3730A3] bg-white shadow px-4">
              <i data-feather="github"></i> GitHub
            </button>
            <button className="border w-28 h-10 flex flex-row items-center justify-center rounded-sm text-[#3730A3] bg-white shadow px-4">
              <i data-feather="linkedin"></i> LinkedIn
            </button>
          </div>
        </div>

        {/* Sağ Taraf (Profil Resmi ve Dil Seçici) */}
        <div className="bg-[#CBF281] w-2xl h-full flex flex-row items-start justify-end gap-4 p-8 mx-0">
          <img
            src="./img/profile.jpeg"
            alt="profile"
            className="w-60 h-60 rounded-xl shadow-lg mt-15 mr-17"
          />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}

export default Hero;
