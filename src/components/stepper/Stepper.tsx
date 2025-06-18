"use client";

import React, { useState, useRef } from "react";
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
  const { steps, setSteps, addStep, setSelectedStep } = useStepStore();

  const scrollingRef = useRef<HTMLDivElement>(null);

  const handleAddStep = (index: number) => {
    const newStep = addStep({
      index: index,
      label: `New Page`,
    });

    setSelectedStep(newStep.id);

    setTimeout(() => {
      if (scrollingRef.current) {
        scrollingRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 0);
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
          // Use StepItem component to render each step
          <StepItem
            key={step.id}
            id={step.id}
            index={index}
            step={step}
            isLastItem={index === steps.length - 1}
          />
        ))}

        {/* Add page button */}
        <div
          ref={scrollingRef}
          className="flex flex-row gap-2 border-gray-border items-center p-2 w-fit text-sm font-medium rounded-lg border"
          onClick={() => handleAddStep(steps.length)}
        >
          <DynamicIcon name="plus" size={18} strokeWidth={2} />
          <label className="font-semibold whitespace-nowrap">Add page</label>
        </div>
      </SortableContext>

      <DragOverlay>
        {activeId && (
          // Render the active step being dragged as an overlay
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
