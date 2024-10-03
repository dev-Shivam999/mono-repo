"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: string;
  className?: string;
  appName: string;
}

export const Button = ({className, children,appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
