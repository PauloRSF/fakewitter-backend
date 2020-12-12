import { EntitySchema } from 'typeorm';

import User from '../../../models/user';

const UserEntity = new EntitySchema<User>({
  name: 'user',
  tableName: 'users',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid'
    },
    name: {
      type: String,
      length: 50,
      nullable: false
    },
    email: {
      type: 'text',
      unique: true,
      nullable: false
    },
    tag: {
      type: String,
      unique: true,
      nullable: false
    },
    bio: {
      type: String,
      default: ''
    },
    password: {
      type: String,
      select: false,
      nullable: false
    },
    createdAt: {
      name: 'created_at',
      type: Date,
      createDate: true
    },
    updatedAt: {
      name: 'updated_at',
      type: Date,
      updateDate: true
    }
  }
});

export default UserEntity;
