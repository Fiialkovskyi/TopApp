import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ITagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  size?: "s" | "m";
  href?: string;
  type?: "primary" | "secondary" | "ghost" | "success" | "danger";
}
