import { KeyboardEvent, MouseEvent, TouchEvent } from 'react'
export type ButtonEvent =
  | KeyboardEvent<HTMLElement | SVGElement>
  | MouseEvent<HTMLElement | SVGElement>
  | TouchEvent<HTMLElement | SVGElement>
