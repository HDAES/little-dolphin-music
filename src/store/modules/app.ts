import { defineStore } from 'pinia'
import { useGlobalStorage } from '@/storage'

const { primary, language } = useGlobalStorage()

export const useAppStore = defineStore({
  id: 'App',
  state: () => ({
    primary,
    language: undefined
  }),
  getters: {
    getPrimary(): string {
      return primary.value
    },
    getLanguage(): string {
      return language.value
    }
  },
  actions: {
    // 改变主题颜色
    setPrimary(color: string): void {
      primary.value = color
    }
  }
})
