import { LogOut } from 'lucide-react'
import Button from '../ui/Button'

const Profile = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/Jefferson-Fer.png"
        alt="user"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Jefferson Fernandes
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          jeffersonfernandesce@gmail.com
        </span>
      </div>

      <Button type="button" variant="ghost" className="ml-auto">
        <LogOut className="h-5 w-5" />
      </Button>
    </div>
  )
}

export default Profile
