'use client'

import { cn } from '@/lib/cn'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as React from 'react'

function TooltipProvider({
  delayDuration = 100,
  skipDelayDuration = 300,
  disableHoverableContent = false,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
      disableHoverableContent={disableHoverableContent}
      {...props}
    />
  )
}

function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

export interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  showArrow?: boolean
  variant?: 'default' | 'dark' | 'primary' | 'outline' | 'glass'
  size?: 'sm' | 'md' | 'lg'
}

const variantStyles: Record<NonNullable<TooltipContentProps['variant']>, string> = {
  default:
    'bg-white text-neutral-0 shadow-lg dark:bg-[#303040] dark:text-white dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]',
  dark: 'bg-[#101016] text-white shadow-2xl',
  primary: 'bg-primary-1 text-white shadow-lg shadow-primary-1/30',
  outline: 'bg-bg-3 text-neutral-0 shadow-md dark:bg-[#303040] dark:text-white',
  glass: 'backdrop-blur-md bg-bg-3/95 text-neutral-0 shadow-xl dark:bg-[#303040]/95 dark:text-white',
}

const arrowVariantStyles: Record<NonNullable<TooltipContentProps['variant']>, string> = {
  default: 'text-white dark:text-[#303040]',
  dark: 'text-[#101016]',
  primary: 'text-primary-1',
  outline: 'text-bg-3 dark:text-[#303040]',
  glass: 'text-bg-3 dark:text-[#303040]',
}

const sizeStyles: Record<NonNullable<TooltipContentProps['size']>, string> = {
  sm: 'px-2.5 py-1 text-xs rounded-md',
  md: 'px-3 py-1.5 text-xs rounded-lg',
  lg: 'px-4 py-2 text-sm rounded-xl',
}

const TooltipContent = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, TooltipContentProps>(
  ({ className, sideOffset = 6, showArrow = false, variant = 'default', size = 'md', children, ...props }, ref) => {
    return (
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          ref={ref}
          sideOffset={sideOffset}
          data-slot="tooltip-content"
          className={cn(
            'tooltip-content font-body relative z-50 max-w-xs text-xs font-normal tracking-wide transition-all duration-150 select-none',
            variantStyles[variant],
            sizeStyles[size],
            className
          )}
          {...props}
        >
          {children}
          {showArrow && (
            <TooltipPrimitive.Arrow
              width={12}
              height={6}
              className={cn('-my-px fill-current', arrowVariantStyles[variant])}
            />
          )}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    )
  }
)
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export interface QuickTooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  variant?: 'default' | 'dark' | 'primary' | 'outline' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  showArrow?: boolean
  delayDuration?: number
  className?: string
  asChild?: boolean
}

function QuickTooltip({
  content,
  children,
  side = 'top',
  align = 'center',
  variant = 'default',
  size = 'md',
  showArrow = true,
  delayDuration = 100,
  className,
  asChild = true,
}: QuickTooltipProps) {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild={asChild}>{children}</TooltipPrimitive.Trigger>
        <TooltipContent
          side={side}
          align={align}
          variant={variant}
          size={size}
          showArrow={showArrow}
          className={className}
        >
          {content}
        </TooltipContent>
      </TooltipPrimitive.Root>
    </TooltipProvider>
  )
}

export { QuickTooltip, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, QuickTooltip as TooltipWrapper }
