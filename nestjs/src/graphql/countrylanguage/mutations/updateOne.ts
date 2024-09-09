import { mutationField, nonNull } from 'nexus';

export const CountrylanguageUpdateOneMutation = mutationField(
  'updateOneCountrylanguage',
  {
    type: nonNull('countrylanguage'),
    args: {
      data: nonNull('countrylanguageUpdateInput'),
      where: nonNull('countrylanguageWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.countrylanguage.update({
        where,
        data,
        ...select,
      });
    },
  },
);
