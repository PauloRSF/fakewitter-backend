import User from '../../models/user';

export default interface IUserRepository {
  create(name: string, email: string, tag: string, password: string): Promise<User>,
  save(user: User): Promise<User>,
  findByEmail(email: string): Promise<User | undefined>
}
