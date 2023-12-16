import { Response, Router } from 'express'

const router = Router()
router.get('/', (_, res: Response) => {
  res.send('Hello friend')
})
export default router
