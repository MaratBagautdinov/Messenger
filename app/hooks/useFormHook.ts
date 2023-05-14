import { TStatus, TVariant, defaultFormData } from "@/types";
import { data } from "autoprefixer";
import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

function useFormHook() {
  const [variant, setVariant] = useState<TVariant>("sign in");
  const [status, setStatus] = useState<TStatus>("fulfilled");
  const toggleVariant = useCallback(() => {
    setVariant(variant === "sign in" ? "register" : "sign in");
  }, [variant]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: defaultFormData,
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setStatus("pending");
    switch (variant) {
      case "sign in":
        break;
      case "register":
        break;
    }
  };
  const socialAction = (action: string) => {
    setStatus("pending");
    // Next auth social sign in
  };
  return { errors, variant, status, socialAction, onSubmit, handleSubmit, register, toggleVariant, setVariant};
}
export default useFormHook;
