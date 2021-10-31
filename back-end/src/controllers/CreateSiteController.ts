import { Request, Response } from 'express';

import { CreateSiteService } from '../services/CreateSiteService';

class CreateSiteController {
  async handle(request: Request, response: Response) {
    const { reference } = request.body;

    const service = new CreateSiteService();

    const result = await service.execute(reference);

    return response.json(result);
  }
}

export { CreateSiteController };
