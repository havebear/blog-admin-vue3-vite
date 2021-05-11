import { resolve } from 'path'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

module.exports = {
  alias: [
    {
      find: /\/@\//,
      replacement: pathResolve('src') + '/',
    }
  ],
  optimizeDeps: {
    include: ['@ant-design/icons-vue'],
  }
}