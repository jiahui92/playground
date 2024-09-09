import { mutationField, nonNull } from 'nexus';

export const CityUpdateManyMutation = mutationField('updateManyCity', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('cityUpdateManyMutationInput'),
    where: 'cityWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.city.updateMany(args as any);
  },
});
