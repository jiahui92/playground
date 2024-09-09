import { queryField, nonNull, list } from 'nexus';

export const CountrylanguageFindCountQuery = queryField(
  'findManyCountrylanguageCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'countrylanguageWhereInput',
      orderBy: list('countrylanguageOrderByWithRelationInput'),
      cursor: 'countrylanguageWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('CountrylanguageScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.countrylanguage.count(args as any);
    },
  },
);
