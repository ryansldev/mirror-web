import { ReactNode } from "react";

interface ICardProps {
  icon?: ReactNode;
  type?: "primary" | "secondary" | "tertiary";
  extend?: boolean;
  extendChildren?: ReactNode;
  children: ReactNode;
}

export function Card({ icon, extendChildren, children, type = "primary", extend = false  }: ICardProps) {
  return (
    <>
      <div className={`flex gap-3 w-full px-8 py-14 ${!extend ? "sm:max-w-[270px]" : "min-w-[300px]" } min-h-[268px] rounded-lg relative`}>
      <div className={`w-full h-full absolute ${type === "primary" ? "bg-black" : type === "secondary" ? "bg-white" : "bg-white" } opacity-5 top-0 left-0 rounded-lg`}></div>
        <div className="flex flex-col gap-3 z-10 w-full">
          { icon && icon }
          <div className="w-full">
            <span className={`flex-1 w-full sm:flex-auto ${extend ? "flex-1" : ""}`}>
              {children}
            </span>
          </div>
        </div>
        {extend && (
          <div className="flex-1">
            {extendChildren}
          </div>
        )}
      </div>
    </>
  )
}