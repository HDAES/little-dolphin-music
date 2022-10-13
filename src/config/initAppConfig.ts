import { useAppStore } from '@/store/modules/app'

export function initAppConfigStore() {
  const appStore = useAppStore()

  console.log(appStore.getPrimary)
}
