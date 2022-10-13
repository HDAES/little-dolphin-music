import type { App } from 'vue'
import type { I18n, I18nOptions } from 'vue-i18n'
import { createI18n } from 'vue-i18n'

import { useGlobalStorage } from '@/storage'

const Storage = useGlobalStorage()

const locale = Storage.language.value

export let i18n: ReturnType<typeof createI18n>

async function createI18nOptions(): Promise<I18nOptions> {
  const defaultLocal = await import(`./lang/${locale}.ts`)

  const message = defaultLocal.default?.message ?? {}
  return {
    locale,
    fallbackLocale: 'zh_CN',
    globalInjection: true,
    formatFallbackMessages: true,
    messages: {
      [locale]: message
    }
  }
}

export async function setupI18n(app: App) {
  const options = await createI18nOptions()
  i18n = createI18n(options) as I18n
  app.use(i18n)
}
