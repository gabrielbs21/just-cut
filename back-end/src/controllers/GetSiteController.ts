import { Request, Response } from 'express';

import { GetSiteService } from '../services/GetSiteService';

class GetSiteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new GetSiteService();

    try {
      const result = await service.execute(id);

      return response.json(result);
    } catch (err) {
      return response.json({
        error: err.message,
      });
    }
  }
}

export { GetSiteController };
