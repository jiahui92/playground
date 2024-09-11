import { objectType, list } from 'nexus';

export const country = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'country',
  definition(t) {
    t.string('Code');
    t.string('Name');
    t.field('Continent', { type: 'country_Continent' });
    t.string('Region');
    t.decimal('SurfaceArea');
    t.nullable.int('IndepYear');
    t.int('Population');
    t.nullable.decimal('LifeExpectancy');
    t.nullable.decimal('GNP');
    t.nullable.decimal('GNPOld');
    t.string('LocalName');
    t.string('GovernmentForm');
    t.nullable.string('HeadOfState');
    t.nullable.int('Capital');
    t.string('Code2');
    t.list.field('city', {
      type: 'city',
      args: {
        where: 'cityWhereInput',
        orderBy: list('cityOrderByWithRelationInput'),
        cursor: 'cityWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('CityScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.city;
      },
    });
    t.list.field('countrylanguage', {
      type: 'countrylanguage',
      args: {
        where: 'countrylanguageWhereInput',
        orderBy: list('countrylanguageOrderByWithRelationInput'),
        cursor: 'countrylanguageWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('CountrylanguageScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.countrylanguage;
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
