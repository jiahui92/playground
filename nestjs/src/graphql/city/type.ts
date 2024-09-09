import { objectType } from 'nexus';

export const city = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'city',
  definition(t) {
    t.int('ID');
    t.string('Name');
    t.string('CountryCode');
    t.string('District');
    t.int('Population');
    t.field('country', {
      type: 'country',
      resolve(root: any) {
        return root.country;
      },
    });
  },
});
