import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let authenticateUserService: AuthenticateUserService;

describe('AuthenticateUserService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    authenticateUserService = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider
    );
  });

  it('should be able to authenticate', async () => {
    await fakeUsersRepository.create({
      name: 'Teste',
      email: 'teste@email.com',
      password: '123456',
    });

    const user = await authenticateUserService.execute({
      email: 'teste@email.com',
      password: '123456',
    });

    expect(user).toHaveProperty('user');
    expect(user).toHaveProperty('token');
  });

  it('should not be able to authenticate with incorrect credentials', async () => {
    await expect(
      authenticateUserService.execute({
        email: 'teste2@email.com',
        password: '1234563',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with incorrect email', async () => {
    await fakeUsersRepository.create({
      name: 'Teste',
      email: 'teste@email.com',
      password: '123456',
    });

    await expect(
      authenticateUserService.execute({
        email: 'teste2@email.com',
        password: '123456',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with incorrect password', async () => {
    await fakeUsersRepository.create({
      name: 'Teste',
      email: 'teste@email.com',
      password: '123456',
    });

    await expect(
      authenticateUserService.execute({
        email: 'teste@email.com',
        password: '1234565',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
