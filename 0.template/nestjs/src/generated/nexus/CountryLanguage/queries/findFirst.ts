import { queryField, list } from 'nexus';

export const CountryLanguageFindFirstQuery = queryField(
  'findFirstCountryLanguage',
  {
    type: 'CountryLanguage',
    args: {
      where: 'CountryLanguageWhereInput',
      orderBy: list('CountryLanguageOrderByWithRelationInput'),
      cursor: 'CountryLanguageWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('CountryLanguageScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.countryLanguage.findFirst({
        ...args,
        ...select,
      });
    },
  },
);
