import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import UploadUserAvatarService from '@modules/users/services/UploadUserAvatarService';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const uploadUserAvatarService = container.resolve(UploadUserAvatarService);
    const user = await uploadUserAvatarService.execute({
      userId: request.user.id,
      avatarFilename: request.file.filename,
    });
    return response.json(classToClass(user));
  }
}
