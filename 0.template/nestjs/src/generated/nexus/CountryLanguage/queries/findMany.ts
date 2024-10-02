import { queryField, nonNull, list } from 'nexus';

export const CountryLanguageFindManyQuery = queryField(
  'findManyCountryLanguage',
  {
    type: nonNull(list(nonNull('CountryLanguage'))),
    args: {
      where: 'CountryLanguageWhereInput',
      orderBy: list('CountryLanguageOrderByWithRelationInput'),
      cursor: 'CountryLanguageWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('CountryLanguageScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.countryLanguage.findMany({
        ...args,
        ...select,
      });
    },
  },
);
