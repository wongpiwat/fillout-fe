import { Step } from "@/types/step";
import { v4 as uuid } from "uuid";

export const STEPS: Step[] = [
  {
    id: uuid(),
    label: "Info",
    icon: "info",
    isSelected: true,
  },
  {
    id: uuid(),
    label: "Basic info",
    icon: "file-text",
    isSelected: false,
  },
  {
    id: uuid(),
    label: "Content info",
    icon: "file-text",
    isSelected: false,
  },
  {
    id: uuid(),
    label: "Anything else?",
    icon: "file-text",
    isSelected: false,
  },
];