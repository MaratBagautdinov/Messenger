"use client";
import { BsGithub, BsGoogle } from "react-icons/bs";
import useFormHook from "@/hooks/useFormHook";
import AuthSocialButton from "@/shared/AuthSocialButton";
import Button from "@/shared/Button";
import Input from "@/shared/Input";
const AuthForm = () => {
  const form = useFormHook();
  return (
    <div
      className="
    mt-8
    sm:mx-auto
    sm:w-full
    sm:max-w-md
    "
    >
      <div
        className="
        bg-white
        px-4
        py-8
        shadow
        sm:rounded-lg
        sm:px-10
        "
      >
        <form className="space-y-3" onSubmit={form.handleSubmit(form.onSubmit)}>
          {form.variant === "register" && (
            <Input
              label="name"
              type="text"
              register={form.register}
              errors={form.errors}
            />
          )}
          <Input
            label="email"
            type="email"
            register={form.register}
            errors={form.errors}
          />
          <Input
            label="password"
            type="password"
            register={form.register}
            errors={form.errors}
          />
          <Button
            disabled={form.status === "pending"}
            fullWith
            type="submit"
            title={form.variant}
          />
        </form>
        <div className="mt-6">
          <div className="relative">
            <div
              className="
              absolute
              inset-0
              flex
              items-center
            "
            >
              <div
                className="
                w-full
                border-t
                border-gray-300"
              />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => form.socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => form.socialAction("google")}
            />
          </div>
        </div>
        <div
          className="
          flex
          gap-2
          justify-center
          text-sm
          mt-6
          px-2
          text-gray-500
        "
        >
          <div>
            {form.variant === "sign in"
              ? "New to Pero?"
              : "Already have an account?"}
          </div>
          <div
            onClick={form.toggleVariant}
            className="underline cursor-pointer"
          >
            {form.variant === "sign in"
              ? "Create an account"
              : "Login to Pero"}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthForm;
