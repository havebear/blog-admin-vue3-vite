import { resolve } from 'path'

module.exports = {
  alias: {
    '/@/': resolve(__dirname, 'src')
  },
  optimizeDeps: {
    include: ['@ant-design/icons-vue']
  }
}