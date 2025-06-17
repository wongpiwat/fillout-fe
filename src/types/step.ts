import { IconName } from "lucide-react/dynamic";

export interface Step {
  id: string;
  label: string;
  icon: IconName;
  isSelected: boolean;
  isNew?: boolean;
}
