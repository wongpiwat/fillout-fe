import { Button } from "@headlessui/react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

interface WidgetItemProps {
  label: string;
  icon: IconName;
  onClick?: () => void;
}

const WidgetItem = ({ label, icon, onClick }: WidgetItemProps) => {
  return (
    <Button
      className="flex flex-col items-center bg-white border border-white rounded-md cursor-pointer shadow hover:shadow-md hover:shadow-gray-400/50"
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center gap-2 p-2 rounded-md">
        <div className="bg-icon-sidebar-background border-gray-border border-[0.5px] p-1 rounded-lg">
          <DynamicIcon name={icon} color="gray" size={20} />
        </div>
        <p className="text-primary text-xs font-semibold leading-3">{label}</p>
      </div>
    </Button>
  );
};

export default WidgetItem;
