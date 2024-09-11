import { mutationField, nonNull } from 'nexus';

export const CountrylanguageDeleteOneMutation = mutationField(
  'deleteOneCountrylanguage',
  {
    type: 'countrylanguage',
    args: {
      where: nonNull('countrylanguageWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.countrylanguage.delete({
        where,
        ...select,
      });
    },
  },
);
