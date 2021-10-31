import { Router } from 'express';

import { AccessSiteController } from './controllers/AccessSiteController';
import { CreateSiteController } from './controllers/CreateSiteController';
import { GetSiteController } from './controllers/GetSiteController';

const router = Router();

router.post('/sites', new CreateSiteController().handle);
router.get('/sites/:id', new GetSiteController().handle);
router.get('/redirect/:id', new AccessSiteController().handle);

export { router };
