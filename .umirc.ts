import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  ssr:{},
  publicPath: '/dist/',
  proxy: {
    "/api": {
      "target": "http://localhost:3333",
      "changeOrigin": true,
      "pathRewrite": { "^/api": "" }
    }
  },
});
