import { mutationField, nonNull } from 'nexus';

export const CityUpsertOneMutation = mutationField('upsertOneCity', {
  type: nonNull('city'),
  args: {
    where: nonNull('cityWhereUniqueInput'),
    create: nonNull('cityCreateInput'),
    update: nonNull('cityUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.city.upsert({
      ...args,
      ...select,
    });
  },
});
