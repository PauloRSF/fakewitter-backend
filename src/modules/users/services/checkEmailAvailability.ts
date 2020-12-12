import { inject, injectable } from 'inversify';
import { validate as validateEmail } from 'email-validator';

import ContainerSymbols from '@shared/container/symbols';
import IUserRepository from '../interfaces/repositories/userRepositoryIntf';
import { EmailAvailabilityResponse } from '../interfaces/dtos/emailAvailabilityDTOs';

@injectable()
export default class CheckEmailAvailabilityService {
  private userRepository: IUserRepository;

  constructor (
    @inject(ContainerSymbols.UserRepository)
      _userRepository: IUserRepository
  ) {
    this.userRepository = _userRepository;
  }

  public async execute (email: string): Promise<EmailAvailabilityResponse> {
    if (!validateEmail(email)) {
      return { valid: false, taken: false }
    }

    const user = await this.userRepository.findByEmail(email);

    if (user) {
      return { valid: true, taken: true }
    }

    return { valid: true, taken: false }
  }
}
