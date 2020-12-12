import { Request, Response } from 'express';

import { container } from '@shared/container';
import CheckEmailAvailabilityService from '@modules/users/services/checkEmailAvailability';
import { EmailAvailabilityRequest } from '@modules/users/interfaces/dtos/emailAvailabilityDTOs';

export default class UserVerificationController {
  public async emailAvailable (req: Request, res: Response): Promise<Response> {
    const emailAvailabilityService = container.resolve(CheckEmailAvailabilityService);
    const { email } = req.query as EmailAvailabilityRequest;
    const availability = await emailAvailabilityService.execute(email);

    return res.json(availability);
  }
}
