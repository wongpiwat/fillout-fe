"use client";

import React, { useState } from "react";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import {
  restrictToHorizontalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";
import { DynamicIcon } from "lucide-react/dynamic";

import useStepStore from "@/stores/useStepStore";

import StepItem from "./StepItem";

const Stepper = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { steps, setSteps, addStep } = useStepStore();

  const handleAddStep = (index: number) => {
    addStep({
      index: index,
      label: `New Page`,
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        // delay: 100,
        // tolerance: 10,
        distance: 3,
      },
    }),
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    if (active && active.id) {
      setActiveId(active.id as string);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (active.id !== over?.id) {
      const oldIndex = steps.findIndex((s) => s.id === active.id);
      const newIndex = steps.findIndex((s) => s.id === over?.id);
      setSteps(arrayMove(steps, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToHorizontalAxis, restrictToWindowEdges]}
    >
      <SortableContext items={steps} strategy={horizontalListSortingStrategy}>
        {steps.map((step, index) => (
          <StepItem
            key={step.id}
            id={step.id}
            index={index}
            step={step}
            isLastItem={index === steps.length - 1}
          />
        ))}
        <div
          className="flex flex-row gap-2 border-gray-300 bg-white items-center p-2 w-fit text-sm font-medium rounded-lg border"
          onClick={() => handleAddStep(steps.length + 1)}
        >
          <DynamicIcon name="plus" size={18} strokeWidth={2} />
          <label className="whitespace-nowrap">Add page</label>
        </div>
      </SortableContext>
      <DragOverlay>
        {activeId && (
          <StepItem
            id={activeId}
            index={steps.findIndex((page) => page.id === activeId)}
            step={steps.find((page) => page.id === activeId)!}
            isLastItem={false}
            isOverlay={true}
          />
        )}
      </DragOverlay>
    </DndContext>
  );
};

export default Stepper;
