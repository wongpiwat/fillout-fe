import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DynamicIcon } from "lucide-react/dynamic";

import { type Step } from "@/types/step";
import useStepStore from "@/stores/useStepStore";

import StepContextMenu from "./StepContextMenu";
import StepDashedLine from "./StepDashedLine";

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
        className={`flex flex-row items-center border border-gray-border hover:border-step-focus-border focus:border-step-focus-border text-sm font-medium rounded-lg p-2 
        ${isDragging ? "bg-transparent text-transparent border-dashed rounded-lg" : ""}
        ${isFocused ? "bg-step-active-background text-primary" : "bg-step-default-background text-secondary"}
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
            <DynamicIcon
              className={`text-secondary ${isDragging ? "text-transparent" : ""}`}
              name="ellipsis-vertical"
              size={16}
              strokeWidth={2}
            />
          </button>
        )}
      </div>

      {/* Dashed line */}
      <StepDashedLine
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

export default StepItem;
