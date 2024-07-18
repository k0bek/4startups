"use client";

import { useEffect } from "react";

const BlockScroll = () => {
  useEffect(() => {
    // Funkcja blokująca scrollowanie
    const blockScroll = () => {
      document.body.style.overflow = "hidden";
    };

    // Funkcja przywracająca scrollowanie
    const unblockScroll = () => {
      document.body.style.overflow = "";
    };

    blockScroll();

    const timer = setTimeout(unblockScroll, 3500);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default BlockScroll;
