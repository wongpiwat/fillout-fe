"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { DynamicIcon } from "lucide-react/dynamic";

import HeaderMenu from "@/components/header/HeaderMenu";
import Button from "@/components/button/Button";

import { HEADER_ITEMS } from "@/constants/headers";

export default function HeaderBar() {
  const pathname = usePathname();
  const [currentMenu] = useState(pathname);

  return (
    <header
      id="editor-header-bar"
      className="bg-header-background border-b-[0.5] border-gray-border"
    >
      <nav
        aria-label="editor-header-bar"
        className="flex items-center justify-between p-2 px-8 mx-auto"
      >
        <div className="flex flex-1">
          <a href="#" className="p-2 -m-2">
            <span className="sr-only">Fillout</span>
            <DynamicIcon name="house" color="gray" size={20} />
          </a>
        </div>

        <div className="flex gap-x-2">
          {HEADER_ITEMS.map((item) => (
            <HeaderMenu
              key={item.href}
              // href={item.href}
              selected={currentMenu === item.href}
            >
              {item.label}
            </HeaderMenu>
          ))}
        </div>
        <div className="flex flex-1 justify-end gap-4">
          <Button>Preview</Button>
          <Button>Publish</Button>
        </div>
      </nav>
    </header>
  );
}
