"use client";

import React from "react";
import { DynamicIcon } from "lucide-react/dynamic";

interface StepAddButtonProps {
  ref: React.RefObject<HTMLDivElement | null>;
  onClick: () => void;
}

const StepAddButton = ({ ref, onClick }: StepAddButtonProps) => {
  return (
    <div
      ref={ref}
      className="flex flex-row items-center gap-2 bg-step-active-background border border-gray-border hover:bg-step-hover-background focus:border-step-focus-border text-sm font-medium rounded-lg cursor-pointer p-2"
      onClick={onClick}
    >
      <DynamicIcon
        className="text-black-icon-background"
        name="plus"
        size={18}
        strokeWidth={2}
        color="black"
      />
      <label className="text-primary font-semibold whitespace-nowrap cursor-pointer">
        Add page
      </label>
    </div>
  );
};

export default StepAddButton;
