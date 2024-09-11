import { queryField, nonNull } from 'nexus';

export const CountrylanguageFindUniqueQuery = queryField(
  'findUniqueCountrylanguage',
  {
    type: 'countrylanguage',
    args: {
      where: nonNull('countrylanguageWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.countrylanguage.findUnique({
        where,
        ...select,
      });
    },
  },
);
