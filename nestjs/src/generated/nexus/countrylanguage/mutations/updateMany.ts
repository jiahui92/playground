import { mutationField, nonNull } from 'nexus';

export const CountryLanguageUpdateManyMutation = mutationField(
  'updateManyCountryLanguage',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('CountryLanguageUpdateManyMutationInput'),
      where: 'CountryLanguageWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.countryLanguage.updateMany(args as any);
    },
  },
);
