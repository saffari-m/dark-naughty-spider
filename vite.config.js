import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
  plugins: [
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    minify: false, // "terser",
    rollupOptions: {
      output: {
        format: 'cjs',
        generatedCode: 'es5',
      },
      plugins: [
        babel({
          // exclude: 'node_modules/**', // specify exaclty wich one do we need like solid js
          babelHelpers: 'bundled',
          presets: [
            ['@babel/preset-env',  {
              modules: false,
              useBuiltIns: 'entry',
              targets: {
                  chrome: '32',
                  firefox: '40',
                  edge: '16'
              }
          }]
          ],
          plugins: [ ], //"@babel/plugin-transform-runtime" // ["@babel/plugin-transform-arrow-functions"]
        }),
      ],
    },
    terserOptions: {
      ecma: '5',
      compress: true,
      mangle: false,
    },
  },
});
