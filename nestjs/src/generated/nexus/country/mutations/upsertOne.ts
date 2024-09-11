import { mutationField, nonNull } from 'nexus';

export const CountryUpsertOneMutation = mutationField('upsertOneCountry', {
  type: nonNull('country'),
  args: {
    where: nonNull('countryWhereUniqueInput'),
    create: nonNull('countryCreateInput'),
    update: nonNull('countryUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.country.upsert({
      ...args,
      ...select,
    });
  },
});
