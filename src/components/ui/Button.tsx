import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80',
  ],

  variants: {
    variant: {
      primary:
        'bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:bg-violet-600',
      secondary:
        'border border-zinc-300 text-zinc-500 shadow-sm hover:bg-zinc-100 dark:hover:bg-white/5 dark:border-zinc-700 dark:text-zinc-400',
      ghost:
        'rounded-md px-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 shadow-none',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

const Button = ({ variant, className, ...props }: ButtonProps) => {
  return <button {...props} className={button({ variant, className })} />
}

export default Button
