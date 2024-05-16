import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button">;

export function Button(props: ButtonProps) {
  return (
    <button
      className="w-[385.88px] h-[54px] mt-8 p-[14.63px_0px_15.75px_0px] rounded-tl-[9px] bg-[#02274F] text-[#FAFAFA] font-nunito font-bold text-[18px] leading-[56.25px] text-center"
      {...props}
    />
  );
}
