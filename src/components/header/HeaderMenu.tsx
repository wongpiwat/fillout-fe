import React from "react";

interface HeaderMenuProps {
  children: React.ReactNode;
  href?: string;
  selected?: boolean;
}

export default function HeaderMenu({
  children,
  href,
  selected = false,
}: HeaderMenuProps) {
  return (
    <a
      href={href}
      className={
        selected
          ? "bg-[#E4EFFE] text-blue-500 hover:text-blue-500 px-3 py-[7px] font-bold text-sm rounded-md"
          : "text-gray-500 hover:text-gray-700 hover:bg-gray-100 px-3 py-[7px] font-bold text-sm rounded-md"
      }
    >
      {children}
    </a>
  );
}
