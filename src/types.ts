import {
  ButtonHTMLAttributes,
  ImgHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export type ProductCart = {
  imgUrl: string;
  name: string;
  price: number;
  description: string;
};

export type ReactChildrenProps = {
  children?: ReactNode;
};

export type Meal = {
  id: number;
  meal: string;
  img: string;
  price: number;
  category: string;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  variant?: "primary" | "inactive" | "empty";
  size?: "sm" | "md" | "lg";
  isIcon?: boolean;
  className?: string;
};

export type IconProps = ImgHTMLAttributes<HTMLImageElement> & {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export type SimpleCounterInputProps = InputHTMLAttributes<HTMLInputElement> & {
  value: number;
  min?: number;
  onValueChange: (value: number) => void;
  className?: string;
};
