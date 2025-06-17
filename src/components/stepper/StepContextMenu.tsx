import React, { useEffect, useRef } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import useStepStore from "@/stores/useStepStore";

const StepContextMenu = ({ id, open, onClose }) => {
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
    <div className="absolute cursor-default">
      <div
        ref={menuRef}
        className="absolute bottom-full mb-8 w-40 origin-bottom-right rounded-md bg-white shadow-lg border border-gray-200 z-50"
      >
        <div className="px-4 py-2 text-gray-700 font-semibold border-b border-gray-200">
          Settings
        </div>
        <ul className="py-1 text-sm text-gray-700">
          <li>
            <button
              className="flex gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => console.log("Set as first page")}
            >
              <DynamicIcon
                name="flag"
                size={16}
                strokeWidth={2}
                color="#2F72E2"
              />
              Set as first page
            </button>
          </li>
          <li>
            <button
              className="flex gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => console.log("Rename")}
            >
              <DynamicIcon
                name="pen-line"
                size={16}
                strokeWidth={2}
                color="gray"
              />
              Rename
            </button>
          </li>
          <li>
            <button
              className="flex gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => console.log("Copy")}
            >
              <DynamicIcon
                name="clipboard"
                size={16}
                strokeWidth={2}
                color="gray"
              />
              Copy
            </button>
          </li>
          <li>
            <button
              className="flex gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => console.log("Duplicate")}
            >
              <DynamicIcon
                name="copy"
                size={16}
                strokeWidth={2}
                color="gray"
              />
              Duplicate
            </button>
          </li>
          <div id="separator" className="border-t border-gray-200 my-1" />
          <li>
            <button
              className="flex gap-2 w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                console.log("Delete");
                handleRemoveStep();
              }}
            >
              <DynamicIcon
                name="trash-2"
                size={16}
                strokeWidth={2}
                color="red"
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
