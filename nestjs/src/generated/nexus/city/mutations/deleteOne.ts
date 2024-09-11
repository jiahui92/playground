import { mutationField, nonNull } from 'nexus';

export const CityDeleteOneMutation = mutationField('deleteOneCity', {
  type: 'city',
  args: {
    where: nonNull('cityWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.city.delete({
      where,
      ...select,
    });
  },
});
