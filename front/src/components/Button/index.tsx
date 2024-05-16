import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button">;

export function Button(props: ButtonProps) {
  return (
    <button
      className="w-[50.38px] h-[34px]  rounded-tl-[9px] bg-[#02274F] text-[#FAFAFA]  font-bold text-[10px]  text-center"
      {...props}
    />
  );
}
