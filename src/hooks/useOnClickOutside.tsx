import { useEffect, useRef } from "react";

type Handler = () => void;
const useOnClickOutside = (handler: Handler, isOpen: boolean) => {
  const popOverRef = useRef<HTMLDivElement | null>(null);
  function handleClick(e: MouseEvent) {
    console.log("click outside");
    if (popOverRef.current && !popOverRef?.current.contains(e.target as Node)) {
      handler();
    }
  }
  function handleKeydown(e: KeyboardEvent) {
    if (popOverRef.current && (e.keyCode === 27 || e.code === "Escape")) {
      handler();
    }
  }
  useEffect(() => {
    // if (!popOverRef.current) return;
    if (!isOpen) return;
    document.body.addEventListener("click", handleClick);
    document.body.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.removeEventListener("click", handleClick);
      document.body.removeEventListener("keydown", handleKeydown);
    };
  }, [isOpen]);
  return { popOverRef };
};

export default useOnClickOutside;
