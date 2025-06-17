import React from "react";
import {
  Button as HeadlessButton,
  type ButtonProps as HeadlessButtonProps,
} from "@headlessui/react";

interface IButton {
  children: React.ReactNode;
}

type ButtonProps = IButton & HeadlessButtonProps;

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <HeadlessButton
      className="px-4 border shadow-sm leading-4 font-medium rounded-md focus:outline-none h-8.5 text-sm border-gray-300 text-gray-500 bg-white hover:bg-gray-100"
      {...rest}
    >
      {children}
    </HeadlessButton>
  );
};

export default Button;
