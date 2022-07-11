import { compareSync } from 'bcryptjs';

import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let fakeCacheProvider: FakeCacheProvider;
let createUserService: CreateUserService;

describe('CreateUserService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    fakeCacheProvider = new FakeCacheProvider();
    createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
      fakeCacheProvider
    );
  });

  it('should be able to created a new user', async () => {
    const user = await createUserService.execute({
      name: 'Teste',
      email: 'teste@email.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('Teste');
    expect(user.email).toBe('teste@email.com');
  });

  it('should not be able to create to user on the same time', async () => {
    const user = await createUserService.execute({
      name: 'Teste',
      email: 'teste@email.com',
      password: '123456',
    });

    await expect(
      createUserService.execute({
        name: 'Teste',
        email: 'teste@email.com',
        password: '123456',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
