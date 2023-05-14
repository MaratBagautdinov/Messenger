
import {
  FieldValues,
  UseFormRegister,
  FieldErrors
} from 'react-hook-form'
import {IconType} from 'react-icons'
export type TVariant = "sign in" | "register";
export type TStatus = "pending" | "fulfilled" | "rejected";
export const defaultFormData = {
  name: "",
  email: "",
  password: "",
};
export type TFormData = keyof typeof defaultFormData;
export type TChildren = {
  children: React.ReactNode;
};
export interface IInput{
  label: TFormData
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  type: 'password' | 'text' | 'email'
  required?: boolean
  disabled?: boolean
}
export interface IButton {
  title: string
  icon?: string
  type?: 'button' | 'submit' | 'reset'
  fullWith?: boolean
  secondary?: boolean
  danger?: boolean
  disabled?: boolean
  onClick?: ()=> void  
}
export interface IAuthSocialButton {
  icon: IconType
  onClick?: ()=> void  
}