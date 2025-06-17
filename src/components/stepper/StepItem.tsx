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
    const newStep = addStep({
      index: index + 1,
      label: `New Page`,
    });

    setSelectedStep(newStep.id);
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
      style={
        {
          ...style,
          anchorName: isFocused ? "--active-step-item" : undefined,
        } as React.CSSProperties
      }
      className={`flex items-center cursor-pointer`}
    >
      {/* Step Item */}
      <div
        ref={setActivatorNodeRef}
        {...attributes}
        {...listeners}
        className={`flex items-center p-2 text-sm font-medium rounded-lg border  
            ${isDragging ? "bg-transparent text-transparent border border-dashed border-step-focus-border rounded-lg" : "pointer-none"}
            ${isFocused ? "bg-step-active-background border-step-focus-border text-primary" : "bg-step-default-background border-gray-border text-secondary"}
            ${isOverlay ? "shadow-md" : ""}
          `}
        onClick={() => setSelectedStep(step.id)}
      >
        <DynamicIcon
          name={step.icon}
          size={18}
          strokeWidth={2}
          className={`mr-1 ${isFocused ? "text-orange-icon-background" : "text-gray-icon-background"} ${isDragging ? "text-transparent" : ""}`}
        />
        <label className="font-semibold truncate cursor-pointer px-2">
          {step.label}
        </label>
        {isFocused && (
          <button onClick={handleContextMenuOpen} className="flex w-4">
            <DynamicIcon name="ellipsis-vertical" size={16} strokeWidth={2} />
          </button>
        )}
      </div>

      {/* Dashed line */}
      <DashedLine
        isLastItem={isLastItem}
        isOverlay={isOverlay}
        onAddStep={handleAddStep}
      />

      {/* Context menu */}
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
