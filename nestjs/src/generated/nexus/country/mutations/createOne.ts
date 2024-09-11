import { mutationField, nonNull } from 'nexus';

export const CountryCreateOneMutation = mutationField('createOneCountry', {
  type: nonNull('country'),
  args: {
    data: nonNull('countryCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.country.create({
      data,
      ...select,
    });
  },
});
