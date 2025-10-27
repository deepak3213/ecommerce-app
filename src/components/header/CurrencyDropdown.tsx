"use client";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { IoChevronDownSharp } from "react-icons/io5";

type CurrencyCode =
  | "USD"
  | "EUR"
  | "GBP"
  | "JPY"
  | "CAD"
  | "AUD"
  | "INR"
  | "BDT"
  | "PKR";

type Currency = {
  code: CurrencyCode;
  name: string;
  symbol: string;
  region?: string;
};
const currencies: Currency[] = [
  { code: "USD", name: "US Dollar", symbol: "$", region: "Global" },
  { code: "EUR", name: "Euro", symbol: "€", region: "Europe" },
  { code: "GBP", name: "British Pound", symbol: "£", region: "Europe" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥", region: "Asia" },
  {
    code: "CAD",
    name: "Canadian Dollar",
    symbol: "C$",
    region: "North America",
  },
  { code: "AUD", name: "Australian Dollar", symbol: "A$", region: "Oceania" },
  { code: "BDT", name: "Bangladeshi Taka", symbol: "৳", region: "South Asia" },
  { code: "INR", name: "Indian Rupee", symbol: "₹", region: "South Asia" },
  { code: "PKR", name: "Pakistani Rupee", symbol: "₨", region: "South Asia" },
];
const CurrencyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  function handleCurrencySelect(currency: Currency) {
    setSelectedCurrency(currency);
    setIsOpen(false);
  }
  return (
    <div className="relative">
      <button
        className="headerTopMenu flex items-center gap-1  cursor-pointer hover:text-orange-300 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="hidden sm:inline">{selectedCurrency.symbol}</span>
        <span className="hidden md:inline">{selectedCurrency.code}</span>
        <IoChevronDownSharp
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div
          className="bg-white/95 w-52 absolute top-full right-0 mt-2  backdrop-blur-sm rounded-lg shadow-xl border border-gray z-50 py-2"
          style={{ backdropFilter: "blur(8px)" }}
        >
          {currencies.map((currency) => {
            const isSouthAsia = currency.region === "South Asia";
            return (
              <button
                key={currency.code}
                onClick={() => handleCurrencySelect(currency)}
                className={`w-full px-4 py-2 text-left flex items-center jutify-between transition-colors ${
                  isSouthAsia
                    ? "border-l-2 border-l-green-500 bg-green-50/30"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-lg font-medium text-gray-700">
                    {currency.symbol}
                  </span>
                  <div>
                    <div className="text-sm font-medium text-gray-900 flex items-center gap-1">
                      {currency.code}
                      {isSouthAsia && (
                        <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-gray-900">{currency.name}</div>
                  </div>
                </div>
                {selectedCurrency.code === currency.code && (
                  <FiCheck className="text-theme-color text-sm" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default CurrencyDropdown;
