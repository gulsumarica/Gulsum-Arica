import React from "react";
import useTranslations from "../hooks/useTranslations";

function Project() {
  const translations = useTranslations();

  return (
    <div className="bg-[#CBF281] flex flex-row justify-around w-full h-full py-16 ">
      <h5 className="text-4xl text-[#4731D3]">Project</h5>
      <div className="bg-white flex flex-row items-center justify-center w-[800px] h-[300px] rounded-md shadow ">
        <img
          src="./img/e-commerce-project.png"
          alt="Project"
          className="w-full h-full rounded-md shadow"
        />
        <div className="flex flex-col gap-4 m-4">
          <h4 className="text-[#4731D3] font-bold">
            {translations.projectTitle}
          </h4>
          <p className="text-[#383838] font-thin ">
            {translations.projectDesc}
          </p>
          <div className="flex flex-row gap-4">
            <div className="border rounded-xl w-20 h-7 border-[#4731D3] bg-[#4731D3] text-white text-center font-thin">
              react
            </div>
            <div className="border rounded-xl w-20 h-7 border-[#4731D3] bg-[#4731D3] text-white text-center font-thin">
              redux
            </div>
            <div className="border rounded-xl w-20 h-7 border-[#4731D3] bg-[#4731D3] text-white text-center font-thin">
              vercel
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <a
              href="https://e-commerce-black-nine-57.vercel.app/"
              target="_blank"
              className="border-b"
            >
              View Site
            </a>
            <a
              href="https://github.com/gulsumarica/E-commerce"
              target="_blank"
              className="border-b"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
