import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/actions/actions";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language);

  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        {/* Türkçe dilini seçme */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault(); // Sayfa yeniden yüklenmesin
            dispatch(setLanguage("tr"));
          }}
          className={`text-[#3730A3] ${
            currentLanguage === "tr" ? "font-bold" : ""
          }`}
        >
          Türkçe
        </a>
        {/* İngilizce dilini seçme */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault(); // Sayfa yeniden yüklenmesin
            dispatch(setLanguage("en"));
          }}
          className={`text-[#3730A3] ${
            currentLanguage === "en" ? "font-bold" : ""
          }`}
        >
          English
        </a>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
