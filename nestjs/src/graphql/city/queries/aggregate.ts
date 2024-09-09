import { queryField, list } from 'nexus';

export const CityAggregateQuery = queryField('aggregateCity', {
  type: 'AggregateCity',
  args: {
    where: 'cityWhereInput',
    orderBy: list('cityOrderByWithRelationInput'),
    cursor: 'cityWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.city.aggregate({ ...args, ...select }) as any;
  },
});
