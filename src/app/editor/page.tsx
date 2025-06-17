"use client";

import Sidebar from "./components/sidebar/Sidebar";
import FormEditor from "./components/form-editor/FormEditor";
import Stepper from "@/components/stepper/Stepper";

export default function Editor() {
  return (
    <div className="flex h-full w-full overflow-hidden">
      <div className="flex  h-full bg-gray-50 lg:max-w-[300px] lg:min-w-[270px]">
        <Sidebar />
      </div>

      <div className="flex flex-col w-full  bg-white border-x-[0.5px] border-gray-300 overflow-hidden">
        <div className="flex h-full p-5">
          <FormEditor />
        </div>
        <div className="flex p-4 overflow-x-scroll scrollbar-hide">
          <Stepper />
        </div>
      </div>
    </div>
  );
}
