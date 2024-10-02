import { mutationField, nonNull } from 'nexus';

export const CountryLanguageDeleteManyMutation = mutationField(
  'deleteManyCountryLanguage',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'CountryLanguageWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.countryLanguage.deleteMany({ where } as any);
    },
  },
);
