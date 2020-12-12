import { injectable } from 'inversify';
import { getRepository, Repository } from 'typeorm';

import User from '../../../models/user';
import UserEntity from '../entities/userEntity';
import IUserRepository from '@modules/users/interfaces/repositories/userRepositoryIntf';

@injectable()
export default class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor () {
    this.repository = getRepository<User>(UserEntity);
  }

  async create (name: string, email: string, tag: string, password: string): Promise<User> {
    const user = this.repository.create({ name, email, tag, password });
    await this.repository.save(user);

    return user;
  }

  async save (user: User): Promise<User> {
    await this.repository.save(user);

    return user;
  }

  async findByEmail (email: string): Promise<User | undefined> {
    return this.repository.findOne({ email });
  }
}
