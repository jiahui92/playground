import { queryField, nonNull } from 'nexus';

export const CountryLanguageFindUniqueQuery = queryField(
  'findUniqueCountryLanguage',
  {
    type: 'CountryLanguage',
    args: {
      where: nonNull('CountryLanguageWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.countryLanguage.findUnique({
        where,
        ...select,
      });
    },
  },
);
