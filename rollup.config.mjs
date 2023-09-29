import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import del from 'rollup-plugin-delete';
import nodeExternals from 'rollup-plugin-node-externals';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import styles from 'rollup-plugin-styles';
import ts from 'rollup-plugin-ts';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
  },
  plugins: [
    del({ targets: 'dist/*' }),
    resolve(),
    commonjs(),
    nodePolyfills(),
    nodeExternals(),
    json(),
    ts(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    styles(),
  ],
};
