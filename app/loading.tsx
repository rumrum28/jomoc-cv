import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div
      className="flex min-h-screen min-w-screen items-center justify-center z-50"
      style={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Loader2 className="w-16 h-16 dark:text-white text-gray-900 animate-spin" />
    </div>
  )
}
