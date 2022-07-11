import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import UploadUserAvatarService from './UploadUserAvatarService';

let fakeUsersRepository: FakeUsersRepository;
let fakeStorageProvider: FakeStorageProvider;
let uploadUserAvatarService: UploadUserAvatarService;

describe('CreateUserService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeStorageProvider = new FakeStorageProvider();
    uploadUserAvatarService = new UploadUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider
    );
  });
  it('should be able to update a user avatar', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Teste',
      email: 'teste@email.com',
      password: '123456',
    });

    const userAvatar = await uploadUserAvatarService.execute({
      userId: user.id,
      avatarFilename: 'avatar.jpg',
    });

    expect(userAvatar.avatar).toEqual('avatar.jpg');
  });

  it('should not be able to update avatar when user non exists', async () => {
    await expect(
      uploadUserAvatarService.execute({
        userId: 'no-id',
        avatarFilename: 'avatar.jpg',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should delete old avatar when update a new one', async () => {
    const deleteFileFunc = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const user = await fakeUsersRepository.create({
      name: 'Teste',
      email: 'teste@email.com',
      password: '123456',
    });

    await uploadUserAvatarService.execute({
      userId: user.id,
      avatarFilename: 'avatar.jpg',
    });

    const userUpdateAvatar = await uploadUserAvatarService.execute({
      userId: user.id,
      avatarFilename: 'avatar-upload.jpg',
    });

    expect(deleteFileFunc).toHaveBeenCalledWith('avatar.jpg');
    expect(userUpdateAvatar.avatar).toEqual('avatar-upload.jpg');
  });
});
