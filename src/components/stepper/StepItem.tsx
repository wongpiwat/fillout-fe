import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DynamicIcon } from "lucide-react/dynamic";

import { type Step } from "@/types/step";
import useStepStore from "@/stores/useStepStore";
import StepContextMenu from "@/components/stepper/StepContextMenu";

interface StepItemProps {
  id: string;
  index: number;
  step: Step;
  isOverlay?: boolean;
  isLastItem?: boolean;
}

const StepItem = ({
  id,
  index,
  step,
  isOverlay,
  isLastItem,
}: StepItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const [openContextMenu, setOpenContextMenu] = React.useState(false);
  const { setSelectedStep, addStep } = useStepStore();

  const isFocused = step.isSelected;

  const handleAddStep = () => {
    addStep({
      index: index + 1,
      label: `New Page`,
    });
  };

  const handleContextMenuOpen = () => {
    setOpenContextMenu(true);
  };

  const handleContextMenuClose = () => {
    setOpenContextMenu(false);
  };

  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
      }}
      className={`flex items-center cursor-pointer`}
    >
      <div
        ref={setActivatorNodeRef}
        {...attributes}
        {...listeners}
        className={`flex items-center p-2 text-sm font-medium rounded-lg border  
            ${isDragging ? "bg-transparent text-transparent border border-dashed border-blue-500 rounded-lg" : "pointer-none"}
            ${isFocused ? "border-blue-500 text-black bg-white" : "text-gray-700 border-gray-300 bg-gray-100"}
            ${isOverlay ? "shadow-md" : ""}
          `}
        onClick={() => setSelectedStep(step.id)}
      >
        <DynamicIcon
          name={step.icon}
          size={18}
          strokeWidth={2}
          className={`mr-1 ${isFocused ? "text-amber-300" : "text-gray-600"} ${isDragging ? "text-transparent" : ""}`}
        />
        <label className="px-2 outline-none truncate cursor-pointer">
          {step.label}
        </label>
        {isFocused && (
          <button
            onClick={handleContextMenuOpen}
            className="ml-1 w-4 h-full flex items-center justify-center hover:text-blue-500"
          >
            <DynamicIcon name="ellipsis-vertical" size={16} strokeWidth={2} />
          </button>
        )}
      </div>
      <DashedLine
        isLastItem={isLastItem}
        isOverlay={isOverlay}
        onAddStep={handleAddStep}
      />
      <StepContextMenu
        id={step.id}
        open={openContextMenu}
        onClose={handleContextMenuClose}
      />
    </div>
  );
};

interface DashedLineProps {
  isLastItem?: boolean;
  isOverlay?: boolean;
  isDragging?: boolean;
  onAddStep?: () => void;
}

const DashedLine = ({ isLastItem, isOverlay, onAddStep }: DashedLineProps) => {
  const disabled = isLastItem;

  return (
    <div
      className={`relative flex  justify-center items-center w-5
        ${isOverlay ? "pointer-none" : "after:absolute after:w-full after:border-t after:border-dashed after:border-gray-400"}
        ${disabled ? "pointer-events-none" : "w-12"}
        `}
    >
      {!disabled && (
        <button
          onClick={onAddStep}
          className="relative z-10 h-4 w-4 rounded-full border border-gray-400 bg-white text-black flex items-center justify-center opacity-0 hover:opacity-100 hover:h-6 hover:w-6 transition-all duration-200"
        >
          <DynamicIcon
            name="plus"
            size={8}
            strokeWidth={3}
            className="transition-all w-4 h-4"
          />
        </button>
      )}
    </div>
  );
};

export default StepItem;
