import { Request, Response } from 'express';

import { AccessSiteService } from '../services/AccessSiteService';

class AccessSiteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new AccessSiteService();

    try {
      const reference = await service.execute(id);

      return response.redirect(reference);
    } catch (err) {
      return response.json({
        error: err.message,
      });
    }
  }
}

export { AccessSiteController };
