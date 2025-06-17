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
      className="bg-white flex flex-col items-center  rounded-md cursor-pointer  border border-white shadow hover:shadow-md hover:shadow-gray-400/50"
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center gap-2 p-2 rounded-lg">
        <div className="p-1 rounded bg-gray-50 border-[0.5px]">
          <DynamicIcon name={icon} color="gray" size={20} />
        </div>
        <p className="text-gray-700 text-xs font-bold leading-3">{label}</p>
      </div>
    </Button>
  );
};

export default WidgetItem;
