import { create } from "zustand";
import { v4 as uuid } from "uuid";

import { Step } from "@/types/step";
import { STEPS } from "@/constants/steps";

interface StepStore {
  steps: Step[];
  getSelectedStep: () => Step | null;
  setSteps: (steps: Step[]) => void;
  setSelectedStep: (id: string) => void;
  addStep: ({ index, label }: { index: number; label: string }) => void;
  removeStep: (id: string) => void;
}

const useStepStore = create<StepStore>((set, get) => ({
  steps: STEPS,
  getSelectedStep: () => {
    const { steps } = get();
    return steps.find((step) => step.isSelected) || null;
  },
  setSteps: (steps: Step[]) => set({ steps }),
  setSelectedStep: (id: string) =>
    set((state) => ({
      steps: state.steps.map((step) =>
        step.id === id
          ? { ...step, isSelected: true }
          : { ...step, isSelected: false },
      ),
    })),
  addStep: ({ index, label }: { index: number; label: string }) =>
    set((state) => {
      const newStep: Step = {
        id: uuid(),
        label: label,
        icon: "file-text",
        isSelected: false,
      };
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
    }),
  removeStep: (id: string) =>
    set((state) => ({
      steps: state.steps.filter((step) => step.id !== id),
    })),
}));

export default useStepStore;
