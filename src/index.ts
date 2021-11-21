import Koa, { Context } from 'koa'
import bodyParser from 'koa-body'
import logger from 'koa-logger'
import Router from 'koa-router'
import config from './config'

const app = new Koa()
const router = new Router()

const healthHandler = (ctx: Context) => {
  ctx.body = { ok: true }
}

router.get('/healthz', healthHandler)

app.use(logger())
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

app.listen(config.API_PORT, () => {
  console.info(`App listening on port ${config.API_PORT}...`)
})
