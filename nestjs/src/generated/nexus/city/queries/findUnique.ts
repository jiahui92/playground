import { queryField, nonNull } from 'nexus';

export const CityFindUniqueQuery = queryField('findUniqueCity', {
  type: 'city',
  args: {
    where: nonNull('cityWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.city.findUnique({
      where,
      ...select,
    });
  },
});
