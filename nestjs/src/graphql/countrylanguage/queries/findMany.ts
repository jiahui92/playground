import { queryField, nonNull, list } from 'nexus';

export const CountrylanguageFindManyQuery = queryField(
  'findManyCountrylanguage',
  {
    type: nonNull(list(nonNull('countrylanguage'))),
    args: {
      where: 'countrylanguageWhereInput',
      orderBy: list('countrylanguageOrderByWithRelationInput'),
      cursor: 'countrylanguageWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('CountrylanguageScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.countrylanguage.findMany({
        ...args,
        ...select,
      });
    },
  },
);
