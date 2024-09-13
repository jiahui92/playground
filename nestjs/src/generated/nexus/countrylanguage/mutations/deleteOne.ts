import { mutationField, nonNull } from 'nexus';

export const CountryLanguageDeleteOneMutation = mutationField(
  'deleteOneCountryLanguage',
  {
    type: 'CountryLanguage',
    args: {
      where: nonNull('CountryLanguageWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.countryLanguage.delete({
        where,
        ...select,
      });
    },
  },
);
