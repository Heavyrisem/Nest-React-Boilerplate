import { Injectable } from '@nestjs/common';
import { User } from '@shared/types/User';

@Injectable()
export class UserService {
  getAllUsers() {
    const users: User[] = [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Jane', age: 20 },
      { id: 3, name: 'Jack', age: 25 },
    ];
    return users;
  }
}
