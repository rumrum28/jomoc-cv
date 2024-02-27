import ComputerBody from '@/components/computer/computerBody'
import { Loader2 } from 'lucide-react'
import { Suspense } from 'react'

export default function page() {
  return (
    <Suspense
      fallback={
        <div className="loading__background">
          <Loader2 color="error" />
          <div className="loading" />
        </div>
      }
    >
      <ComputerBody />
    </Suspense>
  )
}
