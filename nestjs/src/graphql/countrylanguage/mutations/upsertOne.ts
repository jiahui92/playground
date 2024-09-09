import { mutationField, nonNull } from 'nexus';

export const CountrylanguageUpsertOneMutation = mutationField(
  'upsertOneCountrylanguage',
  {
    type: nonNull('countrylanguage'),
    args: {
      where: nonNull('countrylanguageWhereUniqueInput'),
      create: nonNull('countrylanguageCreateInput'),
      update: nonNull('countrylanguageUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.countrylanguage.upsert({
        ...args,
        ...select,
      });
    },
  },
);
