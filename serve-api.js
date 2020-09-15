const Koa = require('koa');
var Router = require('koa-router');
const app = new Koa();

var router = new Router();


router.get('/home', (ctx, next) => {
  const { query:{ current=1, pageSize=10 } } = ctx
  ctx.body = {
    data: {
      list: [{title: 'a', num: 1*current},{title: 'b', num: 2*current,},{title: 'c', num: 4*current}],
      pagination: {
        current: current,
        pageSize: pageSize,
        total: 100
      }
    }
  }
})

router.get('/users', (ctx, next) => {
  ctx.body = {
    data: [{title: 'cjj', num: 2},{title: 'zj', num: 22},{title: 'hh', num: 20},]
  }
})

app.use(router.routes())




app.listen(3333);