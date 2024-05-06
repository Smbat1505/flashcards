import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementType,
  ForwardRefExoticComponent,
  MemoExoticComponent,
  MouseEventHandler,
  ReactNode,
  RefAttributes,
  SVGProps,
} from 'react'

/**
 * Renders an SVG wrapper component.
 *
 * @template T - The type of the wrapper element.
 * @param {SvgWrapperProps<T>} props - The properties for the SVG wrapper component.
 * @returns {ReactNode} - The rendered SVG wrapper component.
 */
/**
 * Renders an SVG wrapped within a specified HTML element.
 *
 * This function creates a flexible and reusable SVG wrapper component that allows for the dynamic
 * rendering of SVGs with customizable styles, sizes, and wrapper elements. It supports interactive
 * SVGs by optionally handling click events. The wrapper's style can be customized based on the
 * element type, providing specific styles for span and button wrappers.
 *
 * @template T - The type of the wrapper element, extending the ElementType to ensure it's a valid React element type.
 * @param {SvgWrapperProps<T>} props - The properties for configuring the SVG wrapper component. Includes:
 *  - `SvgComponent`: The SVG component to be rendered.
 *  - `color`: The color of the SVG. Defaults to 'currentColor'.
 *  - `onClick`: Optional click event handler for the SVG or its wrapper.
 *  - `size`: The size of the SVG (height and width). Defaults to '1.25rem'.
 *  - `style`: Custom CSS properties for the wrapper element, not applied when the wrapper is a button.
 *  - `svgClassName`: Optional class name for the SVG element.
 *  - `svgStyle`: Custom CSS properties for the SVG element.
 *  - `wrapper`: The type of wrapper element (e.g., 'span', 'button'). Defaults to 'span'.
 *  - `wrapperClassName`: Optional class name for the wrapper element.
 * @returns {ReactNode} - The rendered SVG wrapped in the specified HTML element, with applied styles and optional click handler.
 */
export function SvgWrapper<T extends ElementType>(props: SvgWrapperProps<T>): ReactNode {
  const {
    SvgComponent,
    color = 'currentColor',
    onClick,
    size = '1.25rem',
    style,
    svgClassName,
    svgStyle,
    wrapper: WrapperComponent = 'span',
    wrapperClassName,
  } = props

  const isSpanWrapper = WrapperComponent === 'span'
  const isButtonWrapper = WrapperComponent === 'button'

  // Determines the override styles for the wrapper element based on its type.
  const overrideStyles: CSSProperties = {
    display: isSpanWrapper ? 'flex' : undefined,
    ...(isButtonWrapper ? { background: 'initial', border: 'initial' } : style),
  }

  // Combines the provided SVG styles with the default and specified color and size.
  const combinedStyle: CSSProperties = {
    color,
    height: size,
    width: size,
    ...svgStyle,
  }

  // Renders the wrapper component with the SVG component inside it, applying all specified styles and classes.
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
  onClick?: MouseEventHandler<HTMLElement | SVGElement>
  size?: number | string
  style?: CSSProperties
  svgClassName?: string
  svgStyle?: CSSProperties
  wrapper?: T
  wrapperClassName?: string
} & Omit<ComponentPropsWithoutRef<T>, 'color' | 'size'>
