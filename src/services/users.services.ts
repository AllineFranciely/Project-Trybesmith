import connection from '../models/connection';
import UsersModel from '../models/users.models';
import { User } from '../interfaces/products.interface';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async createUser(user: User): Promise<User> {
    return this.model.createUser(user);
  }
}