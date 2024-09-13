import { mutationField, nonNull } from 'nexus';

export const CountryLanguageCreateOneMutation = mutationField(
  'createOneCountryLanguage',
  {
    type: nonNull('CountryLanguage'),
    args: {
      data: nonNull('CountryLanguageCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.countryLanguage.create({
        data,
        ...select,
      });
    },
  },
);
