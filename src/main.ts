import 'virtual:svg-icons-register'
import 'virtual:windi.css'
import { createApp } from 'vue'
import App from './App.vue'

import { setupStore } from '@/store'
import { useGlobalStorage } from '@/storage'
import { setupRouter } from '@/router'
import { setupI18n } from './locales/setupI18n'

async function bootstrap() {
  const app = createApp(App)

  useGlobalStorage()

  setupStore(app)

  setupRouter(app)

  await setupI18n(app)

  app.mount('#app')
}

await bootstrap()
