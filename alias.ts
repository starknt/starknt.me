import path from 'path'

const r = (...paths: string[]) => path.join(__dirname, ...paths)

export const alias = {
  '~': r('./src'),
}
