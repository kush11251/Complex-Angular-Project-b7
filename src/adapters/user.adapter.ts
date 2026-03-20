// User adapter
import { User } from '../models/user.interface';

export class UserAdapter {
  adapt(user: any): User {
    return { id: user.id, name: user.name, email: user.email };
  }
}