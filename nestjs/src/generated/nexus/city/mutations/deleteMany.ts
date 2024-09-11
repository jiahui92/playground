import { mutationField, nonNull } from 'nexus';

export const CityDeleteManyMutation = mutationField('deleteManyCity', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'cityWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.city.deleteMany({ where } as any);
  },
});
