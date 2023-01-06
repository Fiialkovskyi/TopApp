import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

export interface ILayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactElement;
}
