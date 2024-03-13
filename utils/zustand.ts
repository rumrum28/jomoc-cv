import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Props = {
  tab: string | null
  setTab: (t: boolean) => void
}

const pucspispfjsf = (set: any) =>
  ({
    tab: '',
    setTab: (t) => {
      set(() => ({
        setTab: t,
      }))
    },
  } as Props)

const useZustand = create(
  persist(pucspispfjsf, {
    name: 'lgs10',
  })
)

export default useZustand
