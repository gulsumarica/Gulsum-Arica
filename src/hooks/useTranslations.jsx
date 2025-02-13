import React from "react";
import { useSelector } from "react-redux";

function useTranslations() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const translations = useSelector(
    (state) => state.language.translations[selectedLanguage]
  );
  return translations;
}

export default useTranslations;
