import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/User';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { classToClass } from 'class-transformer';

interface IRequestDTO {
  user_id?: string;
}

@injectable()
class ListProvidersService {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
    @inject('CacheProvider') private cacheProvider: ICacheProvider
  ) {}

  async execute({ user_id }: IRequestDTO): Promise<User[]> {
    let users = await this.cacheProvider.recover<User[]>(
      `providers-list:${user_id}`
    );
    if (!users) {
      users = await this.usersRepository.findAllProviders({
        except_user_id: user_id,
      });
      this.cacheProvider.save(`providers-list:${user_id}`, classToClass(users));
    }
    return users;
  }
}

export default ListProvidersService;
