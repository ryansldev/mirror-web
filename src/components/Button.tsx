import { ReactNode } from "react";

interface IButtonProps {
  type?: "primary" | "secondary" | "tertiary";
  htmlType?: "submit" | "button";
  children: ReactNode;
}

export default function Button({
  type = "primary",
  htmlType = "button",
  children,
}: IButtonProps) {
  return (
    <button
      type={htmlType}
      className={`${type === "primary" ? "bg-black text-white" : "bg-white text-black" } uppercase shadow-lg hover:scale-110 transition px-8 py-4 font-bold`}
    >
      {children}
    </button>
  )
}