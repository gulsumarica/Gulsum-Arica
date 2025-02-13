import React from "react";

function Skills() {
  return (
    <div className="flex flex-row items-start justify-around">
      <h1 className="text-4xl mt-10 font-medium text-[#4731D3]">Skills</h1>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center ">
            <img
              src="./img/js.png"
              alt="JavaScript"
              className="w-44 h-44 ml-8"
            />
            <h6 className="text-2xl">JavaScript</h6>
          </div>
          <div className="flex flex-row items-center justify-center ">
            <img src="./img/react.png" alt="REACT" className="w-44 h-44" />
            <h6 className="text-2xl">REACT</h6>
          </div>
          <div className="flex flex-row items-center justify-center">
            <img src="./img/redux.png" alt="REDUX" className="w-44 h-44 ml-2" />
            <h6 className="text-2xl">REDUX</h6>
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center justify-center">
            <img src="./img/node.png" alt="NODE" className="w-44 h-44" />
            <h6 className="text-2xl">NODE</h6>
          </div>
          <div className="flex flex-row items-center justify-center ml-11">
            <img src="./img/vsCode.png" alt="VS CODE" className="w-44 h-44" />
            <h6 className="text-2xl">VS CODE</h6>
          </div>
          <div className="flex flex-row items-center justify-center">
            <img src="./img/figma.png" alt="FIGMA" className="w-44 h-44 ml-6" />
            <h6 className="text-2xl">FIGMA</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
