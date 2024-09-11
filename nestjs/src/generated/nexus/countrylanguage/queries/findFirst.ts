import { queryField, list } from 'nexus';

export const CountrylanguageFindFirstQuery = queryField(
  'findFirstCountrylanguage',
  {
    type: 'countrylanguage',
    args: {
      where: 'countrylanguageWhereInput',
      orderBy: list('countrylanguageOrderByWithRelationInput'),
      cursor: 'countrylanguageWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('CountrylanguageScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.countrylanguage.findFirst({
        ...args,
        ...select,
      });
    },
  },
);
