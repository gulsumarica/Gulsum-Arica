import React from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";

function Header() {
  return (
    <div className="flex flex-row items-center justify-around">
      <LanguageSwitcher />
    </div>
  );
}

export default Header;
