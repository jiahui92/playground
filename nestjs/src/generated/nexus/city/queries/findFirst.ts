import { queryField, list } from 'nexus';

export const CityFindFirstQuery = queryField('findFirstCity', {
  type: 'city',
  args: {
    where: 'cityWhereInput',
    orderBy: list('cityOrderByWithRelationInput'),
    cursor: 'cityWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CityScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.city.findFirst({
      ...args,
      ...select,
    });
  },
});
