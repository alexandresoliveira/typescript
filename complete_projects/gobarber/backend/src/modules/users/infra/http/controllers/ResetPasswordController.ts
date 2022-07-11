import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ResetPassowrdService from '@modules/users/services/ResetPasswordService';

export default class ResetPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { token, password } = request.body;
    const resetPassowrdService = container.resolve(ResetPassowrdService);
    await resetPassowrdService.execute({
      token,
      password,
    });
    return response.status(204).json({});
  }
}
