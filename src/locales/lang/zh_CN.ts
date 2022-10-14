import { genMessage } from '../helper'

const modules: Record<string, Record<string, any>> = import.meta.glob('./zh_CN/**/*.ts')
export default {
  message: {
    ...genMessage(modules, 'zh_CN')
  },
  momentLocaleName: 'zh_CN'
}
