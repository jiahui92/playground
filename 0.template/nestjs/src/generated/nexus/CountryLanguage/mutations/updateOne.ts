import { mutationField, nonNull } from 'nexus';

export const CountryLanguageUpdateOneMutation = mutationField(
  'updateOneCountryLanguage',
  {
    type: nonNull('CountryLanguage'),
    args: {
      data: nonNull('CountryLanguageUpdateInput'),
      where: nonNull('CountryLanguageWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.countryLanguage.update({
        where,
        data,
        ...select,
      });
    },
  },
);
