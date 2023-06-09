import { atom } from "jotai";

export type pickedColorType = {
    color: string
}
  
export const PICKED_COLOR_DEFAULT: pickedColorType = { color: '#ff0000' }

export const PICKED_COLOR_ATOM = atom(PICKED_COLOR_DEFAULT);

export type pickedWidthType = {
    width: number
}
  
export const PICKED_WIDTH_DEFAULT: pickedWidthType = { width: 5 }

export const PICKED_WIDTH_ATOM = atom(PICKED_WIDTH_DEFAULT);