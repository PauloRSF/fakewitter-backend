import { Router } from 'express';
import 'express-async-errors';

const router = Router();

router.all('*', function (req, res) {
  res.status(404).send({ detail: `${req.method} ${req.url}: not found` });
});

export default router;
