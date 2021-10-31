import { customAlphabet } from 'nanoid';

import { prisma } from '../prisma';

class CreateSiteService {
  async execute(reference: string) {
    const nanoid = customAlphabet(
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
      10
    );

    const id = nanoid();

    const site = await prisma.site.create({
      data: {
        id,
        reference,
      },
    });

    return site;
  }
}

export { CreateSiteService };
