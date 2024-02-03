import { RollupOptions } from 'rollup'
import typescript from '@rollup/plugin-typescript'

const config: RollupOptions = {
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'esm',
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.build.json',
    }),
  ],
}

export default config
