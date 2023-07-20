import { IAnswerVariant } from "./answer-variant.interface";

export interface IQuestion {
  id: number;
  title_by: string;
  title_ru: string;
  title_pl: string;
  answer_variants: IAnswerVariant[];
  images?: string[];
}
