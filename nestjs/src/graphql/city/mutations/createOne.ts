import { mutationField, nonNull } from 'nexus';

export const CityCreateOneMutation = mutationField('createOneCity', {
  type: nonNull('city'),
  args: {
    data: nonNull('cityCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.city.create({
      data,
      ...select,
    });
  },
});
