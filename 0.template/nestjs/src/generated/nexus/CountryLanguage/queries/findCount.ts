import { queryField, nonNull, list } from 'nexus';

export const CountryLanguageFindCountQuery = queryField(
  'findManyCountryLanguageCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'CountryLanguageWhereInput',
      orderBy: list('CountryLanguageOrderByWithRelationInput'),
      cursor: 'CountryLanguageWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('CountryLanguageScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.countryLanguage.count(args as any);
    },
  },
);
