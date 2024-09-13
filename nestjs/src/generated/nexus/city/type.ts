import { objectType } from 'nexus';

export const City = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'City',
  definition(t) {
    t.int('id');
    t.string('name');
    t.string('countryCode');
    t.string('district');
    t.int('population');
    t.field('country', {
      type: 'Country',
      resolve(root: any) {
        return root.country;
      },
    });
  },
});
