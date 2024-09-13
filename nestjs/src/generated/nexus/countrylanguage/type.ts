import { objectType } from 'nexus';

export const CountryLanguage = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'CountryLanguage',
  definition(t) {
    t.string('countryCode');
    t.string('language');
    t.field('isOfficial', { type: 'CountryLanguageIsOfficial' });
    t.decimal('percentage');
    t.field('country', {
      type: 'Country',
      resolve(root: any) {
        return root.country;
      },
    });
  },
});
