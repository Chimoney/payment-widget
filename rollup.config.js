import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'lib/index.js',
  output: [
    {
      file: 'dist/chimoney-payment-widget.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/chimoney-payment-widget.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/chimoney-payment-widget.umd.js',
      format: 'umd',
      name: 'PaymentWidget'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    terser()
  ]
};
