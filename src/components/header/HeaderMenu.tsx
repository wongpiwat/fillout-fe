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
          ? "bg-header-menu-active-background text-header-menu-active-text px-3 py-2 font-semibold text-sm rounded-md"
          : "text-header-menu-default-text hover:text-header-menu-hover-text hover:bg-header-menu-hover-background px-3 py-2 font-semibold text-sm rounded-md"
      }
    >
      {children}
    </a>
  );
}
