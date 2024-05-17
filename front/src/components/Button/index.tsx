import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button">;

export function Button(props: ButtonProps) {
  return (
    <button
      className="w-[272px] h-[44px] mt-4 rounded-[9px]  bg-[#02274F] text-[#FAFAFA] font-nunito font-bold text-[18px]  text-center"
      {...props}
    />
  );
}
