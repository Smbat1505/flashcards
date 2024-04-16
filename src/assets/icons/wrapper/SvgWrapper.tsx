import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementType,
  ForwardRefExoticComponent,
  MemoExoticComponent,
  ReactNode,
  RefAttributes,
  SVGProps,
} from 'react'

type SvgWrapperProps<T extends ElementType = 'span'> = {
  SvgComponent?: MemoExoticComponent<
    ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'> & RefAttributes<SVGSVGElement>>
  >
  color?: string
  onClick?: () => void
  size?: number
  svgClassName?: string
  wrapper?: T
  wrapperClassName?: string
} & Omit<ComponentPropsWithoutRef<T>, 'color' | 'size'>

export function SvgWrapper<T extends ElementType = 'span'>(props: SvgWrapperProps<T>): ReactNode {
  const {
    SvgComponent,
    children,
    color,
    onClick,
    size = 20,
    style,
    svgClassName,
    wrapper,
    wrapperClassName,
  } = props
  const WrapperComponent = wrapper || 'button'

  const isSpanWrapper = WrapperComponent === 'span'
  const isButtonWrapper = wrapper === 'button'

  const overrideStyles: CSSProperties = {
    display: isSpanWrapper ? 'flex' : undefined,
    ...(isButtonWrapper ? { background: 'initial', border: 'initial' } : {}),
  }
  const combinedStyle: CSSProperties = {
    color: color,
    height: size,
    width: size,
    ...style,
  }

  return (
    <WrapperComponent className={wrapperClassName} onClick={onClick} style={overrideStyles}>
      {SvgComponent && <SvgComponent className={svgClassName} style={combinedStyle} />}
      {!SvgComponent && children}
    </WrapperComponent>
  )
}
