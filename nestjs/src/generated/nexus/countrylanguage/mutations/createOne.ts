import { mutationField, nonNull } from 'nexus';

export const CountrylanguageCreateOneMutation = mutationField(
  'createOneCountrylanguage',
  {
    type: nonNull('countrylanguage'),
    args: {
      data: nonNull('countrylanguageCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.countrylanguage.create({
        data,
        ...select,
      });
    },
  },
);
