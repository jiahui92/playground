import { mutationField, nonNull } from 'nexus';

export const CityUpdateOneMutation = mutationField('updateOneCity', {
  type: nonNull('city'),
  args: {
    data: nonNull('cityUpdateInput'),
    where: nonNull('cityWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.city.update({
      where,
      data,
      ...select,
    });
  },
});
