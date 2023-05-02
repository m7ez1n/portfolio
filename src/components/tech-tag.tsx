import type { ReactNode } from "react";

const TechTag = ({ children }: { children: ReactNode }) => {
  return (
    <span className="p-2 text-base leading-4 rounded-lg bg-[#FF2B51] text-white">
      {children}
    </span>
  );
};

export default TechTag;
