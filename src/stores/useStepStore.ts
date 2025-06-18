import { create } from "zustand";
import { v4 as uuid } from "uuid";

import { Step } from "@/types/step";
import { STEPS } from "@/constants/steps";

interface StepStore {
  steps: Step[];
  setSteps: (steps: Step[]) => void;
  setSelectedStep: (id: string) => void;
  getSelectedStep: () => Step | null;
  addStep: ({ index, label }: { index: number; label: string }) => Step;
  removeStep: (id: string) => void;
}

const useStepStore = create<StepStore>((set, get) => ({
  steps: STEPS,
  setSteps: (steps: Step[]) => set({ steps }),
  setSelectedStep: (id: string) =>
    set((state) => ({
      steps: state.steps.map((step) =>
        step.id === id
          ? { ...step, isSelected: true }
          : { ...step, isSelected: false },
      ),
    })),
  getSelectedStep: () => {
    const { steps } = get();
    return steps.find((step) => step.isSelected) || null;
  },
  addStep: ({ index, label }: { index: number; label: string }) => {
    const newStep: Step = {
      id: uuid(),
      label: label,
      icon: "file-text",
      isSelected: false,
    };

    set((state) => {
      if (index >= 0 && index < state.steps.length) {
        return {
          steps: [
            ...state.steps.slice(0, index),
            newStep,
            ...state.steps.slice(index),
          ],
        };
      }
      return { steps: [...state.steps, newStep] };
    });

    return newStep;
  },
  removeStep: (id: string) =>
    set((state) => ({
      steps: state.steps.filter((step) => step.id !== id),
    })),
}));

export default useStepStore;
