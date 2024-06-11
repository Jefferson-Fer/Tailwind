'use client'

import { User } from 'lucide-react'
import { useFileInputContext } from './Root'
import { useMemo } from 'react'

const ImagePreview = () => {
  const { files } = useFileInputContext()

  const previweImage = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    // validação tipo da image
    if (
      !files[0].type.includes('png') &&
      !files[0].type.includes('svg') &&
      !files[0].type.includes('jpg') &&
      !files[0].type.includes('gif')
    ) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previweImage === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
        <User className="h-8 w-8 text-violet-500 dark:text-violet-300" />
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={previweImage}
      alt=""
      className="h-16 w-16 rounded-full object-cover"
    />
  )
}

export default ImagePreview
