# umi ssr

## Getting Started

serve-api.js 相当于后端api的接口
serve.js node服务端渲染入口文件

本地开发直接yarn start

## 展示下开发完成，部署的流程
```bash
  nodemon serve.js 服务端渲染服务
  nodemon serve-api 后端接口api
  开始nginx 服务
      
```

nginx 配置,

```
server {
        listen       4443;
        server_name  lms.com;

        location / {
						proxy_pass http://127.0.0.1:3000/;   #本地node服务 服务端的入口文件  umi-server.js
        }
				
        location /dist/ {
					root E:/umi-demo/umi-ssr/;     #静态文件目录
				}
				
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        location ^~/api/ {
						rewrite ^/api/(.*)$ /$1 break;
           	proxy_pass http://127.0.0.1:3333/;         #后端接口地址 前端代理  /api 开头
        }
    }
```
