// @ts-check
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { swc } from 'rollup-plugin-swc3'

/** @type {import('rollup').RollupOptions} */
export default {
  input: './src/index.ts',
  output: {
    file: './dist/index.min.js',
    format: 'esm',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    swc(),
  ]
}
