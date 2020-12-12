export default class User {
  id!: string;
  name!: string;
  email!: string;
  tag!: string;
  bio?: string;
  password!: string;
  createdAt!: Date;
  updatedAt!: Date;
}
