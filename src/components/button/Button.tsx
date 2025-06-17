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
      className="bg-white hover:bg-gray-100 text-gray-500 border border-gray-300 rounded-md shadow-sm text-sm font-medium leading-4 px-4 h-8.5"
      {...rest}
    >
      {children}
    </HeadlessButton>
  );
};

export default Button;
