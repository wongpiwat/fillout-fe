import React, { useEffect, useRef } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import useStepStore from "@/stores/useStepStore";

interface StepContextMenuProps {
  id: string;
  open: boolean;
  onClose: (value: boolean) => void;
}

const StepContextMenu = ({ id, open, onClose }: StepContextMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { removeStep } = useStepStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose, open]);

  const handleRemoveStep = () => {
    removeStep(id);
    onClose(false);
  };

  if (!open) {
    return null;
  }

  return (
    <div className="context-menu fixed cursor-default">
      <div
        ref={menuRef}
        className="absolute bottom-full origin-bottom-right rounded-md bg-context-menu-background shadow-lg border border-gray-border mb-8 w-40 z-50"
      >
        <div className="text-primary font-semibold border-b border-gray-border px-4 py-2">
          Settings
        </div>
        <ul className="text-primary text-sm py-1">
          <li>
            <button
              className="flex gap-2 w-full text-left hover:bg-context-menu-hover-background cursor-pointer px-4 py-2"
              onClick={() => console.log("Set as first page")}
            >
              <DynamicIcon
                className="text-blue-icon-background"
                name="flag"
                size={16}
                strokeWidth={2}
              />
              Set as first page
            </button>
          </li>
          <li>
            <button
              className="flex gap-2 w-full text-left hover:bg-context-menu-hover-background cursor-pointer px-4 py-2"
              onClick={() => console.log("Rename")}
            >
              <DynamicIcon
                className="text-gray-icon-background"
                name="pen-line"
                size={16}
                strokeWidth={2}
              />
              Rename
            </button>
          </li>
          <li>
            <button
              className="flex gap-2 w-full text-left hover:bg-context-menu-hover-background cursor-pointer px-4 py-2"
              onClick={() => console.log("Copy")}
            >
              <DynamicIcon
                className="text-gray-icon-background"
                name="clipboard"
                size={16}
                strokeWidth={2}
              />
              Copy
            </button>
          </li>
          <li>
            <button
              className="flex gap-2 w-full text-left hover:bg-context-menu-hover-background cursor-pointer px-4 py-2"
              onClick={() => console.log("Duplicate")}
            >
              <DynamicIcon
                className="text-gray-icon-background"
                name="copy"
                size={16}
                strokeWidth={2}
              />
              Duplicate
            </button>
          </li>
          <div id="separator" className="border-t border-gray-border my-1" />
          <li>
            <button
              className="flex gap-2 w-full text-left text-red-icon-background hover:bg-context-menu-hover-background cursor-pointer px-4 py-2"
              onClick={() => {
                console.log("Delete");
                handleRemoveStep();
              }}
            >
              <DynamicIcon
                className="text-red-icon-background"
                name="trash-2"
                size={16}
                strokeWidth={2}
              />
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default StepContextMenu;
