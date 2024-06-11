'use client'

import { useFileInputContext } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import FileItem from './FileItem'

const FileList = () => {
  const { files } = useFileInputContext()
  const [parent] = useAutoAnimate()

  return (
    <div className="mt-4 space-y-3" ref={parent}>
      {files.map((file) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            state="complete"
          />
        )
      })}
    </div>
  )
}

export default FileList
