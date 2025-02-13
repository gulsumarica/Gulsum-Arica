import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/actions/actions";
import Flag from "react-world-flags";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );

  const toggleLanguage = () => {
    dispatch(setLanguage(currentLanguage === "tr" ? "en" : "tr"));
  };

  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            toggleLanguage();
          }}
          className={`text-[#3730A3] font-bold`}
        >
          {currentLanguage === "tr" ? (
            <Flag code="GB" className="w-8 h-full rounded-sm" />
          ) : (
            <Flag code="TR" className="w-8 h-full rounded-sm" />
          )}
        </a>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
