import { ChevronDown, Globe } from "lucide-react";
import React from "react";

const ChangeLanguageButton = () => {
  return (
    <div className="flex items-center text-secondary-foreground hover:text-hover cursor-pointer hover:bg-primary p-2 rounded-xl transition-all">
      <Globe className="scale-90" />
      <ChevronDown className="scale-90" />
    </div>
  );
};

export default ChangeLanguageButton;
