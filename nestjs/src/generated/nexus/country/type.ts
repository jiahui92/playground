import { objectType, list } from 'nexus';

export const Country = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Country',
  definition(t) {
    t.string('code');
    t.string('name');
    t.field('continent', { type: 'CountryContinent' });
    t.string('region');
    t.decimal('surfaceArea');
    t.nullable.int('indepYear');
    t.int('population');
    t.nullable.decimal('lifeExpectancy');
    t.nullable.decimal('gnp');
    t.nullable.decimal('gnpoId');
    t.string('localName');
    t.string('governmentForm');
    t.nullable.string('headOfState');
    t.nullable.int('capital');
    t.string('code2');
    t.list.field('city', {
      type: 'City',
      args: {
        where: 'CityWhereInput',
        orderBy: list('CityOrderByWithRelationInput'),
        cursor: 'CityWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('CityScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.city;
      },
    });
    t.list.field('countryLanguage', {
      type: 'CountryLanguage',
      args: {
        where: 'CountryLanguageWhereInput',
        orderBy: list('CountryLanguageOrderByWithRelationInput'),
        cursor: 'CountryLanguageWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('CountryLanguageScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.countryLanguage;
      },
    });
    t.field('_count', {
      type: 'CountryCountOutputType',
      resolve(root: any) {
        return root._count;
      },
    });
  },
});
