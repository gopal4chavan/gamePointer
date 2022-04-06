import {Router, Request, Response} from 'express';

const router = Router();

router.get('/', (_: Request, res: Response) => {
  res.send('welcom to gpointer')
});


export default router;