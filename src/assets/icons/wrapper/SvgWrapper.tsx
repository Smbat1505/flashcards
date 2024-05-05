import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementType,
  ForwardRefExoticComponent,
  MemoExoticComponent,
  MouseEvent,
  ReactNode,
  RefAttributes,
  SVGProps,
  TouchEvent,
} from 'react'

/**
 * Renders an SVG wrapper component.
 *
 * @template T - The type of the wrapper element.
 * @param {SvgWrapperProps<T>} props - The properties for the SVG wrapper component.
 * @returns {ReactNode} - The rendered SVG wrapper component.
 */
export function SvgWrapper<T extends ElementType>(props: SvgWrapperProps<T>): ReactNode {
  const {
    SvgComponent,
    color: colorProp,
    onClick,
    size: sizeProp,
    style,
    svgClassName,
    svgStyle,
    wrapper,
    wrapperClassName,
  } = props
  const WrapperComponent = wrapper || 'span'

  const isSpanWrapper = WrapperComponent === 'span'
  const isButtonWrapper = wrapper === 'button'

  const color = !colorProp ? 'currentColor' : colorProp
  const size = !sizeProp ? '1.25rem' : sizeProp
  const overrideStyles: CSSProperties = {
    display: isSpanWrapper ? 'flex' : undefined,
    ...(isButtonWrapper ? { background: 'initial', border: 'initial' } : { ...style }),
  }
  const combinedStyle: CSSProperties = {
    color: color,
    height: size,
    width: size,
    ...svgStyle,
  }

  return (
    <WrapperComponent className={wrapperClassName} onClick={onClick} style={overrideStyles}>
      {SvgComponent && <SvgComponent className={svgClassName} style={combinedStyle} />}
    </WrapperComponent>
  )
}

export type SvgWrapperProps<T extends ElementType> = {
  SvgComponent?: MemoExoticComponent<
    ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'> & RefAttributes<SVGSVGElement>>
  >
  color?: string
  onClick?: (event?: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => void
  size?: number | string
  style?: CSSProperties
  svgClassName?: string
  svgStyle?: CSSProperties
  wrapper?: T
  wrapperClassName?: string
} & Omit<ComponentPropsWithoutRef<T>, 'color' | 'size'>
