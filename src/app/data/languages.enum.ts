import { IDefaultControl } from "../interfaces/default-control.interface";

export enum LanguagesLabelsEnum {
  BY = 'BY',
  RU = 'RU',
  PL = 'PL',
}

export enum LanguagesEnum {
  BY = 'by',
  RU = 'ru',
  PL = 'pl',
}

export const Languages: IDefaultControl[] = [
  { value: LanguagesEnum.BY, label: LanguagesLabelsEnum.BY },
  { value: LanguagesEnum.RU, label: LanguagesLabelsEnum.RU },
  { value: LanguagesEnum.PL, label: LanguagesLabelsEnum.PL },
]
