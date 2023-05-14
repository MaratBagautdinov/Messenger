"use client";
import clsx from "clsx";
import { IAuthSocialButton } from "@/types";
import { FC } from "react";
const AuthSocialButton: FC<IAuthSocialButton> = ({icon:Icon, onClick}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex
        w-full
        justify-center
        rounded-md
        bg-white
        px-4
        py-2
        text-gray-500
        shadow-sm
        ring-1
        ring-inset
        ring-gray-300
        hover:bg-gray-50
        focus:outline-offset-0
      "
      >
      <Icon/>
    </button>
  );
};

export default AuthSocialButton;
