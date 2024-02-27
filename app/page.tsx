import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link
        href="/portfolio"
        className="underline hover:bg-slate-200 p-2 rounded"
      >
        Portfolio
      </Link>
    </div>
  )
}
