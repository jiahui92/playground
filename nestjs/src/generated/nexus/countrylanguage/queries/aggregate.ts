import { queryField, list } from 'nexus';

export const CountrylanguageAggregateQuery = queryField(
  'aggregateCountrylanguage',
  {
    type: 'AggregateCountrylanguage',
    args: {
      where: 'countrylanguageWhereInput',
      orderBy: list('countrylanguageOrderByWithRelationInput'),
      cursor: 'countrylanguageWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.countrylanguage.aggregate({ ...args, ...select }) as any;
    },
  },
);
