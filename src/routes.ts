import { NextFunction, Request, Response, Router } from 'express';
import 'express-async-errors';

import { APIError } from '@shared/errors/apiError';
import userRoutes from '@modules/users/infra/http/routes';

const router = Router();

router.use('/users', userRoutes);

router.all('*', function (req, _) {
  throw new APIError(`${req.method} ${req.url}: not found`, 404, 'url_not_found');
});

router.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof APIError) {
    return res.status(err.statusCode).json({
      message: err.message,
      code: err.code
    });
  }
});

export default router;
