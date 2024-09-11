import { objectType } from 'nexus';

export const countrylanguage = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'countrylanguage',
  definition(t) {
    t.string('CountryCode');
    t.string('Language');
    t.field('IsOfficial', { type: 'countrylanguage_IsOfficial' });
    t.decimal('Percentage');
    t.field('country', {
      type: 'country',
      resolve(root: any) {
        return root.country;
      },
    });
  },
});
