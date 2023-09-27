const esbuild = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  splitting: true,
  platform: 'browser',
  format: 'esm',
  outdir: 'dist',
  define: {
    process: '{ "env": { "NODE_ENV": "production" } }',
  },
  plugins: [
    nodeExternalsPlugin({
      dependencies: true,
      devDependencies: false,
      peerDependencies: true,
    }),
  ],
  logLevel: 'info',
});
