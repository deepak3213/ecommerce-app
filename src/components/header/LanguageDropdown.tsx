"use client";

import useOnClickOutside from "@/hooks/useOnClickOutside";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { IoChevronDownSharp } from "react-icons/io5";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸", available: true },
  { code: "es", name: "Español", flag: "🇪🇸", available: false },
  { code: "fr", name: "Français", flag: "🇫🇷", available: false },
  { code: "de", name: "Deutsch", flag: "🇩🇪", available: false },
  { code: "ja", name: "日本語", flag: "🇯🇵", available: false },
];

const languageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLangauge] = useState(languages[0]);
  const { popOverRef } = useOnClickOutside(() => setIsOpen(false), isOpen);
  function handleLanguageSelect(language: (typeof languages)[0]) {
    if (!language.available) return;
    setSelectedLangauge(language);
    setIsOpen(false);
  }
  return (
    <div className="relative" ref={popOverRef}>
      <button
        className="headerTopMenu flex items-center gap-1  cursor-pointer hover:text-orange-300 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="hidden sm:inline">{selectedLanguage.flag}</span>
        <span className="hidden md:inline">{selectedLanguage.name}</span>
        <span className="md:hidden">EN</span>
        <IoChevronDownSharp
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div
          className="bg-white/95 absolute top-full right-0 mt-2  backdrop-blur-sm rounded-lg shadow-xl border border-gray z-50 py-2"
          style={{ backdropFilter: "blur(8px)" }}
        >
          {languages.map((language) => {
            return (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                disabled={!language.available}
                className={`w-full px-4 py-2 text-left flex items-center jutify-between transition-colors ${
                  language.available
                    ? "text-gray-700  hoer:bg-gray-50 cursor-pointer"
                    : "text-gray-400 cursor-not-allowed bg-gray-50/50"
                }`}
              >
                <div className="flex items-center gap-2 flex-1">
                  <span className={language.available ? "" : "opacity-50"}>
                    {language.flag}
                  </span>
                  <span className="text-sm">{language.name}</span>
                  {!language.available && (
                    <span className="text-xs ml-auto text-nowrap text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                      Comming soon
                    </span>
                  )}
                </div>
                {selectedLanguage.code === language.code &&
                  language.available && (
                    <div>
                      <FiCheck className="text-theme-color text-sm" />
                    </div>
                  )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default languageDropdown;
