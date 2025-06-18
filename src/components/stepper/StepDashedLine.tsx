import React from "react";
import { DynamicIcon } from "lucide-react/dynamic";

interface StepDashedLineProps {
  isLastItem?: boolean;
  isOverlay?: boolean;
  isDragging?: boolean;
  onAddStep?: () => void;
}

const StepDashedLine = ({ isLastItem, isOverlay, onAddStep }: StepDashedLineProps) => {
  const disabled = isLastItem;

  return (
    <div
      className={`relative flex  justify-center items-center w-5
        ${isOverlay ? "pointer-none" : "after:absolute after:w-full after:border-t after:border-dashed after:border-gray-border"}
        ${disabled ? "pointer-events-none" : "w-12"}
        `}
    >
      {!disabled && (
        <button
          onClick={onAddStep}
          className="relative flex items-center justify-center bg-step-active-background text-primary border border-gray-border rounded-full opacity-0 hover:opacity-100 hover:h-6 hover:w-6 transition-all duration-120 z-10 h-4 w-4"
        >
          <DynamicIcon
            name="plus"
            size={8}
            strokeWidth={3}
            className="text-black-icon-background w-4 h-4"
          />
        </button>
      )}
    </div>
  );
};

export default StepDashedLine;
