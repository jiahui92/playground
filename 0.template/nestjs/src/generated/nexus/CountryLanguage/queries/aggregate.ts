import { queryField, list } from 'nexus';

export const CountryLanguageAggregateQuery = queryField(
  'aggregateCountryLanguage',
  {
    type: 'AggregateCountryLanguage',
    args: {
      where: 'CountryLanguageWhereInput',
      orderBy: list('CountryLanguageOrderByWithRelationInput'),
      cursor: 'CountryLanguageWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.countryLanguage.aggregate({ ...args, ...select }) as any;
    },
  },
);
