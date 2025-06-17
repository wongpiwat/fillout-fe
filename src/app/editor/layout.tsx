"use client";

import React from "react";
import HeaderBar from "@/components/header/HeaderBar";
import { DynamicIcon } from "lucide-react/dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="md:hidden fixed inset-0 z-100 flex items-center justify-center bg-gray-100 p-4">
        <div className="rounded-2xl bg-white flex flex-col p-4">
          <div className="flex justify-center items-center mb-2">
            <DynamicIcon name="monitor" color="gray" size={32} />
          </div>
          <p className="text-gray-700 text-2xl font-bold">
            The Fillout editor works best on larger screens
          </p>
          <p className="text-gray-500 text-base">
            Note that the forms you build{" "}
            <span className="underline">will work</span> on mobile devices!
          </p>
        </div>
      </div>

      <div>
        <HeaderBar />
        <div
          className="flex w-full items-start justify-start flex-col"
          style={{ height: "calc(-58px + 100vh)" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
