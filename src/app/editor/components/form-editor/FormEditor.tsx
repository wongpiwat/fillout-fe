import React from "react";

import useStepStore from "@/stores/useStepStore";

const FormEditor = ({}) => {
  const { getSelectedStep } = useStepStore();
  const step = getSelectedStep();
  return (
    <div className="bg-[#14213d] w-full p-4 rounded-2xl">
      <h1 className="text-white text-2xl font-bold mb-4">
        {step && (
          <div key={step.id} className="mb-2">
            <h2 className="text-lg font-semibold">{step.label}</h2>
          </div>
        )}
      </h1>
    </div>
  );
};

export default FormEditor;
