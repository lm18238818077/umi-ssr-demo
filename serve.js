const express = require('express');
const app = express();



const port = 3000;

const domain = 'http://localhost';

// Express
app.use(async (req, res) => {
  // 或者从 CDN 上下载到 server 端
  // const serverPath = await downloadServerBundle('http://cdn.com/bar/umi.server.js');
  const render = require('./umi-ssr/dist/umi.server');
  res.setHeader('Content-Type', 'text/html');
  const context = {};
  const { html, error, rootContainer } = await render({
    // 有需要可带上 query
    path: req.url,
    context,
    // 可自定义 html 模板
    // htmlTemplate: defaultHtml,
    // 启用流式渲染
    //mode: 'stream',
    // html 片段静态标记（适用于静态站点生成）
    // staticMarkup: false,
    // 扩展 getInitialProps 在服务端渲染中的参数
    getInitialPropsCtx: {
      title: 'aaaaaaaaaaa'
    },
    // manifest，正常情况下不需要
  });
  // support stream content
  // if (content && content instanceof Stream) {
  //   html.pipe(res);
  //   html.on('end', function() {
  //     res.end();
  //   });
  // } else {
  //   res.send(res);
  // }
  res.send(html);
})

app.listen(port, err => {
  if (err) {
    throw err;
  }
  console.log(`> Ready on port ${port}, ${domain}:${port}`);
});