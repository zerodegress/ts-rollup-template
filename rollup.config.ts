import { RollupOptions } from 'rollup'
import typescript from '@rollup/plugin-typescript'

export default [{
  input: './src/index.ts',
  output: {
    file: './dist/index.min.js',
    format: 'esm',
  },
  plugins: [
    typescript(),
  ]
}] as RollupOptions
