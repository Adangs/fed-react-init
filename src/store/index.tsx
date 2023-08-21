import { create } from 'zustand'

export const useSuerStore = create((set) => ({
  token: null,
  login: () => set(() => ({ token: +new Date() })),
}))
