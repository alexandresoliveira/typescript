import { sign } from 'jsonwebtoken';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';

import User from '@modules/users/infra/typeorm/entities/User';

interface IRequestDTO {
  email: string;
  password: string;
}

interface IResponseDTO {
  user: User;
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
    @inject('HashProvider') private hashProvider: IHashProvider
  ) {}

  async execute({ email, password }: IRequestDTO): Promise<IResponseDTO> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password are incorrect!');
    }

    const correctPassword = await this.hashProvider.compareHash(
      password,
      user.password
    );

    if (!correctPassword) {
      throw new AppError('Email or password are incorrect!');
    }

    const token = sign({}, 'f4e0538bbf073a6b79d0dca2f0e9751e', {
      expiresIn: '1d',
      subject: user.id,
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
