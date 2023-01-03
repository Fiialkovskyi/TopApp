import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IRatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  onRatingChange?: (rating: number) => void;
}
