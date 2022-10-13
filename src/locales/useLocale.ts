import { i18n } from './setupI18n'

interface LangModule {
  message: Recordable
  momentLocale: Recordable
  momentLocaleName: string
}

function setI18nLanguage(locale: LocaleType) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    ;(i18n.global.locale as any).value = locale
  }
}

export function useLocale() {
  async function changeLocale(locale: LocaleType) {
    const globalI18n = i18n.global
    const currentLocale = unref(globalI18n.locale)
    if (currentLocale === locale) {
      return locale
    }

    const langModule = ((await import(`./lang/${locale}.ts`)) as any).default as LangModule
    if (!langModule) return

    const { message } = langModule

    globalI18n.setLocaleMessage(locale, message)

    setI18nLanguage(locale)
    return locale
  }

  return { changeLocale }
}
