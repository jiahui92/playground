import { mutationField, nonNull } from 'nexus';

export const CountryLanguageUpsertOneMutation = mutationField(
  'upsertOneCountryLanguage',
  {
    type: nonNull('CountryLanguage'),
    args: {
      where: nonNull('CountryLanguageWhereUniqueInput'),
      create: nonNull('CountryLanguageCreateInput'),
      update: nonNull('CountryLanguageUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.countryLanguage.upsert({
        ...args,
        ...select,
      });
    },
  },
);
