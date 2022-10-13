import type { RemovableRef } from '@vueuse/core'
import website from '@/config/website'

export interface GlobalStorage {
  //主题颜色
  primary: RemovableRef<string>
  // 语言
  language: RemovableRef<string>
}

export const useGlobalStorage = createGlobalState((): GlobalStorage => {
  const primary = useStorage('vueuse-local-primary', website.primary)
  const language = useStorage('vueuse-local-language', website.language)

  return { primary, language }
})
