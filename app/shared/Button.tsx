"use client";
import clsx from "clsx";
import { IButton } from "@/types";
import { FC } from "react";

const Button: FC<IButton> = (p) => {
  return (
    <button
      onClick={p.onClick}
      type={p.type}
      disabled={p.disabled}
      className={clsx(`
        flex
        justify-center
        rounded-md
        px-3
        py-2
        text-sm
        font-semibold
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        capitalize
        `,
        p.disabled && `opacity-50 cursor-default`,
        p.fullWith && `w-full`,
        p.secondary ? 'text-gray-900' : 'text-white',
        p.danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
        !p.secondary && !p.danger && 'bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600')}
    >
      {p.title}
    </button>
  );
};

export default Button;
