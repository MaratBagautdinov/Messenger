"use client";
import clsx from "clsx";
import { IInput } from "@/types";
import { FC } from "react";

const Input: FC<IInput> = (p) => {
  return (
    <>
      <label
        className="
        block
        text-sm
        form-medium
        leading-6
        text-gray-900
        capitalize
        font-medium
        "
        htmlFor={p.label}
      >
        {p.label}
      </label>
      <div className="space-y-0">
        <input 
        type={p.type} 
        id={p.label} 
        autoComplete={p.label}
        disabled={p.disabled}
        {...p.register(p.label, {required: p.required})}
        className={clsx(`
            form-input
            block
            w-full
            rounded-md
            border-0
            py-1.5
            text-gray-900
            shadow-sm
            ring-1
            ring-inset
            ring-gray-300
            placeholder:text-gray-400
            focus:ring-2
            focus:ring-inset
            focus:ring-sky-600
            sm:text-sm
            s,:leading-6`,
            p.errors[p.label] && "focus:ring-rose-500",
            p.disabled && "opacity-50 cursor-default",
            )} />
      </div>
    </>
  );
};

export default Input;
 