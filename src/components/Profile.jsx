import React from "react";
import useTranslations from "../hooks/useTranslations";

function Profile() {
  const translations = useTranslations();
  return (
    <div className="flex flex-col bg-[#4731D3]">
      <h1 className="text-4xl mt-10 pl-40 font-medium text-[#CBF281]">
        Profile
      </h1>
      <div className="flex flex-row items-center justify-around">
        <div className="flex flex-col justify-center w-full pl-20 gap-4">
          <h6 className="text-white text-3xl">{translations.title2}</h6>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2">
              <h6 className="text-[#CBF281]">{translations.dateOfBirth}</h6>
              <h6 className="text-white font-thin">{translations.date}</h6>
            </div>

            <div className="flex flex-row items-center gap-2">
              <h6 className="text-[#CBF281]">{translations.cityOfResidence}</h6>
              <h6 className="text-white font-thin">{translations.city}</h6>
            </div>
            <div className="flex flex-row items-center gap-2">
              <h6 className="text-[#CBF281]">{translations.educationStatus}</h6>
              <h6 className="text-white font-thin">{translations.education}</h6>
            </div>
            <div className="flex flex-row items-center gap-2">
              <h6 className="text-[#CBF281]">{translations.prefferedRole}</h6>
              <h6 className="text-white font-thin">{translations.role}</h6>
            </div>
          </div>
        </div>
        <img src="./img/portfolio.png" alt="portfolio" />
        <div className="flex flex-col text-white justify-center gap-4 pr-10">
          <h4 className="text-2xl font-medium">{translations.aboutMe}</h4>
          <p className="font-thin">{translations.aboutDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
