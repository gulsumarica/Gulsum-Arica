import React, { useEffect } from "react";

import useTranslations from "../hooks/useTranslations";

function Footer() {
  const translations = useTranslations();

  return (
    <div className="flex flex-col items-center justify-between gap-4 m-4">
      <h1 className="text-3xl text-[#4731D3]">{translations.sendMessage}</h1>
      <p className="text-[#120B39] font-thin">{translations.sayHello}</p>
      <a
        href="mailto:gulsumarica.biz@gmail.com"
        className="text-[#4731D3] border-b"
      >
        gulsumarica.biz@gmail.com
      </a>
      <div className="flex flex-row gap-2 text-[#4731D3]">
        <a
          href="https://twitter.com/gulsumarica_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i data-feather="twitter"></i>
        </a>
        <a
          href="https://codepen.io/G-ls-m-Arca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i data-feather="codepen"></i>
        </a>
        <a href="mailto:gulsumarica.biz@gmail.com">
          <i data-feather="at-sign"></i>
        </a>
        <a
          href="https://instagram.com/gulsumarica_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i data-feather="instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
