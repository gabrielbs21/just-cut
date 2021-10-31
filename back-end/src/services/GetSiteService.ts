import { prisma } from '../prisma';

class GetSiteService {
  async execute(id: string) {
    const site = await prisma.site.findFirst({
      where: {
        id,
      },
    });

    if (!site) throw new Error('This site does not exists');

    return site;
  }
}

export { GetSiteService };
