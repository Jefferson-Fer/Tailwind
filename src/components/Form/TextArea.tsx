import { ComponentProps } from 'react'

export interface TextAreaProps extends ComponentProps<'textarea'> {}

const TextArea = (props: TextAreaProps) => {
  return (
    <textarea
      {...props}
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 dark:border-zinc-800 dark:bg-zinc-700 dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus:border-violet-500 dark:focus:ring-violet-500/20"
    />
  )
}

export default TextArea
