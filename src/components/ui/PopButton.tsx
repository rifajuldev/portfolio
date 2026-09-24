import { cn } from '@/lib/cn'
import Link from 'next/link'
import React from 'react'

export interface PopButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  href?: string
  target?: string
  rel?: string
  download?: boolean | string
  variant?: 'default' | 'icon'
  className?: string
}

const PopButton = React.forwardRef<HTMLElement, PopButtonProps>(
  ({ children, href, target, rel, download, variant = 'default', className, ...props }, ref) => {
    const isIcon = variant === 'icon'

    const buttonClasses = cn(
      // Base layout & typography
      'group relative inline-flex cursor-pointer items-center justify-center select-none',
      'font-secondary text-xs font-bold tracking-wider uppercase italic md:text-sm',
      'rounded-2xl border',
      // Ultra-smooth mechanical keycap press animation
      'transition-all duration-200 ease-[cubic-bezier(0.25,1,0.5,1)]',
      // Sizing
      isIcon ? 'h-14 w-14 min-w-[56px] p-0 md:h-15 md:w-15 md:min-w-[60px]' : 'h-14 px-6 md:h-15 md:px-8',
      // Light Mode (matching portfolio's clean light slate/white theme with green accents)
      'text-neutral-0 border-[#cbd5e1] bg-gradient-to-b from-[#ffffff] to-[#e4e8ec]',
      'shadow-[inset_0_1px_0_rgba(255,255,255,1),0_7px_0_0_#b0b8c4,0_10px_18px_rgba(0,0,0,0.08)]',
      'hover:translate-y-[5px] hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_2px_0_0_#b0b8c4,0_4px_8px_rgba(0,0,0,0.05)]',
      'active:translate-y-[7px] active:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0px_0_0_#b0b8c4,0_0px_0px_rgba(0,0,0,0)]',
      // Dark Mode (rich charcoal slate with high-contrast visible 3D bottom shadow and top rim highlight)
      'dark:border-[#3c3f4e] dark:bg-gradient-to-b dark:from-[#2e2f3a] dark:to-[#21222b] dark:text-white',
      'dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_7px_0_0_#0f1015,0_12px_24px_rgba(0,0,0,0.75)]',
      'dark:hover:translate-y-[5px] dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_2px_0_0_#0f1015,0_6px_12px_rgba(0,0,0,0.4)]',
      'dark:active:translate-y-[7px] dark:active:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0px_0_0_#0f1015,0_0px_0px_rgba(0,0,0,0)]',
      className
    )

    if (href) {
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
          download={download}
          className={buttonClasses}
        >
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={buttonClasses} {...props}>
        {children}
      </button>
    )
  }
)

PopButton.displayName = 'PopButton'

export default PopButton
