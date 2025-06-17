import React from "react";

import WidgetItem from "./WidgetItem";
import { WidgetItemType } from "@/types/widgets";

interface WidgetSectionProps {
  title: string;
  items: WidgetItemType[];
}

const WidgetSection = ({ title, items }: WidgetSectionProps) => {
  return (
    <div id="widget-section">
      <p className="text-base text-gray-400 font-bold mt-6">{title}</p>
      <div className="grid grid-cols-3 gap-2 mt-3 gap-y-4">
        {items?.map((item, index) => (
          <WidgetItem key={index} label={item.label} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default WidgetSection;
