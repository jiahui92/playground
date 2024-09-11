import { enumType, inputObjectType, objectType } from 'nexus';

export const TransactionIsolationLevel = enumType({
  name: 'TransactionIsolationLevel',
  members: [
    'ReadUncommitted',
    'ReadCommitted',
    'RepeatableRead',
    'Serializable',
  ],
});

export const CityScalarFieldEnum = enumType({
  name: 'CityScalarFieldEnum',
  members: ['ID', 'Name', 'CountryCode', 'District', 'Population'],
});

export const CountryScalarFieldEnum = enumType({
  name: 'CountryScalarFieldEnum',
  members: [
    'Code',
    'Name',
    'Continent',
    'Region',
    'SurfaceArea',
    'IndepYear',
    'Population',
    'LifeExpectancy',
    'GNP',
    'GNPOld',
    'LocalName',
    'GovernmentForm',
    'HeadOfState',
    'Capital',
    'Code2',
  ],
});

export const CountrylanguageScalarFieldEnum = enumType({
  name: 'CountrylanguageScalarFieldEnum',
  members: ['CountryCode', 'Language', 'IsOfficial', 'Percentage'],
});

export const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
});

export const NullsOrder = enumType({
  name: 'NullsOrder',
  members: ['first', 'last'],
});

export const country_Continent = enumType({
  name: 'country_Continent',
  members: [
    'Asia',
    'Europe',
    'North_America',
    'Africa',
    'Oceania',
    'Antarctica',
    'South_America',
  ],
});

export const countrylanguage_IsOfficial = enumType({
  name: 'countrylanguage_IsOfficial',
  members: ['T', 'F'],
});

export const cityWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'cityWhereInput' });
    t.list.field('OR', { type: 'cityWhereInput' });
    t.list.field('NOT', { type: 'cityWhereInput' });
    t.field('ID', { type: 'IntFilter' });
    t.field('Name', { type: 'StringFilter' });
    t.field('CountryCode', { type: 'StringFilter' });
    t.field('District', { type: 'StringFilter' });
    t.field('Population', { type: 'IntFilter' });
    t.field('country', { type: 'CountryRelationFilter' });
  },
});

export const cityOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityOrderByWithRelationInput',
  definition(t) {
    t.field('ID', { type: 'SortOrder' });
    t.field('Name', { type: 'SortOrder' });
    t.field('CountryCode', { type: 'SortOrder' });
    t.field('District', { type: 'SortOrder' });
    t.field('Population', { type: 'SortOrder' });
    t.field('country', { type: 'countryOrderByWithRelationInput' });
  },
});

export const cityWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityWhereUniqueInput',
  definition(t) {
    t.field('ID', { type: 'Int' });
    t.list.field('AND', { type: 'cityWhereInput' });
    t.list.field('OR', { type: 'cityWhereInput' });
    t.list.field('NOT', { type: 'cityWhereInput' });
    t.field('Name', { type: 'StringFilter' });
    t.field('CountryCode', { type: 'StringFilter' });
    t.field('District', { type: 'StringFilter' });
    t.field('Population', { type: 'IntFilter' });
    t.field('country', { type: 'CountryRelationFilter' });
  },
});

export const cityOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityOrderByWithAggregationInput',
  definition(t) {
    t.field('ID', { type: 'SortOrder' });
    t.field('Name', { type: 'SortOrder' });
    t.field('CountryCode', { type: 'SortOrder' });
    t.field('District', { type: 'SortOrder' });
    t.field('Population', { type: 'SortOrder' });
    t.field('_count', { type: 'cityCountOrderByAggregateInput' });
    t.field('_avg', { type: 'cityAvgOrderByAggregateInput' });
    t.field('_max', { type: 'cityMaxOrderByAggregateInput' });
    t.field('_min', { type: 'cityMinOrderByAggregateInput' });
    t.field('_sum', { type: 'citySumOrderByAggregateInput' });
  },
});

export const cityScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'cityScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'cityScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'cityScalarWhereWithAggregatesInput' });
    t.field('ID', { type: 'IntWithAggregatesFilter' });
    t.field('Name', { type: 'StringWithAggregatesFilter' });
    t.field('CountryCode', { type: 'StringWithAggregatesFilter' });
    t.field('District', { type: 'StringWithAggregatesFilter' });
    t.field('Population', { type: 'IntWithAggregatesFilter' });
  },
});

export const countryWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'countryWhereInput' });
    t.list.field('OR', { type: 'countryWhereInput' });
    t.list.field('NOT', { type: 'countryWhereInput' });
    t.field('Code', { type: 'StringFilter' });
    t.field('Name', { type: 'StringFilter' });
    t.field('Continent', { type: 'Enumcountry_ContinentFilter' });
    t.field('Region', { type: 'StringFilter' });
    t.field('SurfaceArea', { type: 'DecimalFilter' });
    t.field('IndepYear', { type: 'IntNullableFilter' });
    t.field('Population', { type: 'IntFilter' });
    t.field('LifeExpectancy', { type: 'DecimalNullableFilter' });
    t.field('GNP', { type: 'DecimalNullableFilter' });
    t.field('GNPOld', { type: 'DecimalNullableFilter' });
    t.field('LocalName', { type: 'StringFilter' });
    t.field('GovernmentForm', { type: 'StringFilter' });
    t.field('HeadOfState', { type: 'StringNullableFilter' });
    t.field('Capital', { type: 'IntNullableFilter' });
    t.field('Code2', { type: 'StringFilter' });
    t.field('city', { type: 'CityListRelationFilter' });
    t.field('countrylanguage', { type: 'CountrylanguageListRelationFilter' });
  },
});

export const countryOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryOrderByWithRelationInput',
  definition(t) {
    t.field('Code', { type: 'SortOrder' });
    t.field('Name', { type: 'SortOrder' });
    t.field('Continent', { type: 'SortOrder' });
    t.field('Region', { type: 'SortOrder' });
    t.field('SurfaceArea', { type: 'SortOrder' });
    t.field('IndepYear', { type: 'SortOrderInput' });
    t.field('Population', { type: 'SortOrder' });
    t.field('LifeExpectancy', { type: 'SortOrderInput' });
    t.field('GNP', { type: 'SortOrderInput' });
    t.field('GNPOld', { type: 'SortOrderInput' });
    t.field('LocalName', { type: 'SortOrder' });
    t.field('GovernmentForm', { type: 'SortOrder' });
    t.field('HeadOfState', { type: 'SortOrderInput' });
    t.field('Capital', { type: 'SortOrderInput' });
    t.field('Code2', { type: 'SortOrder' });
    t.field('city', { type: 'cityOrderByRelationAggregateInput' });
    t.field('countrylanguage', {
      type: 'countrylanguageOrderByRelationAggregateInput',
    });
  },
});

export const countryWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryWhereUniqueInput',
  definition(t) {
    t.field('Code', { type: 'String' });
    t.list.field('AND', { type: 'countryWhereInput' });
    t.list.field('OR', { type: 'countryWhereInput' });
    t.list.field('NOT', { type: 'countryWhereInput' });
    t.field('Name', { type: 'StringFilter' });
    t.field('Continent', { type: 'Enumcountry_ContinentFilter' });
    t.field('Region', { type: 'StringFilter' });
    t.field('SurfaceArea', { type: 'DecimalFilter' });
    t.field('IndepYear', { type: 'IntNullableFilter' });
    t.field('Population', { type: 'IntFilter' });
    t.field('LifeExpectancy', { type: 'DecimalNullableFilter' });
    t.field('GNP', { type: 'DecimalNullableFilter' });
    t.field('GNPOld', { type: 'DecimalNullableFilter' });
    t.field('LocalName', { type: 'StringFilter' });
    t.field('GovernmentForm', { type: 'StringFilter' });
    t.field('HeadOfState', { type: 'StringNullableFilter' });
    t.field('Capital', { type: 'IntNullableFilter' });
    t.field('Code2', { type: 'StringFilter' });
    t.field('city', { type: 'CityListRelationFilter' });
    t.field('countrylanguage', { type: 'CountrylanguageListRelationFilter' });
  },
});

export const countryOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryOrderByWithAggregationInput',
  definition(t) {
    t.field('Code', { type: 'SortOrder' });
    t.field('Name', { type: 'SortOrder' });
    t.field('Continent', { type: 'SortOrder' });
    t.field('Region', { type: 'SortOrder' });
    t.field('SurfaceArea', { type: 'SortOrder' });
    t.field('IndepYear', { type: 'SortOrderInput' });
    t.field('Population', { type: 'SortOrder' });
    t.field('LifeExpectancy', { type: 'SortOrderInput' });
    t.field('GNP', { type: 'SortOrderInput' });
    t.field('GNPOld', { type: 'SortOrderInput' });
    t.field('LocalName', { type: 'SortOrder' });
    t.field('GovernmentForm', { type: 'SortOrder' });
    t.field('HeadOfState', { type: 'SortOrderInput' });
    t.field('Capital', { type: 'SortOrderInput' });
    t.field('Code2', { type: 'SortOrder' });
    t.field('_count', { type: 'countryCountOrderByAggregateInput' });
    t.field('_avg', { type: 'countryAvgOrderByAggregateInput' });
    t.field('_max', { type: 'countryMaxOrderByAggregateInput' });
    t.field('_min', { type: 'countryMinOrderByAggregateInput' });
    t.field('_sum', { type: 'countrySumOrderByAggregateInput' });
  },
});

export const countryScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'countryScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'countryScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'countryScalarWhereWithAggregatesInput' });
    t.field('Code', { type: 'StringWithAggregatesFilter' });
    t.field('Name', { type: 'StringWithAggregatesFilter' });
    t.field('Continent', { type: 'Enumcountry_ContinentWithAggregatesFilter' });
    t.field('Region', { type: 'StringWithAggregatesFilter' });
    t.field('SurfaceArea', { type: 'DecimalWithAggregatesFilter' });
    t.field('IndepYear', { type: 'IntNullableWithAggregatesFilter' });
    t.field('Population', { type: 'IntWithAggregatesFilter' });
    t.field('LifeExpectancy', { type: 'DecimalNullableWithAggregatesFilter' });
    t.field('GNP', { type: 'DecimalNullableWithAggregatesFilter' });
    t.field('GNPOld', { type: 'DecimalNullableWithAggregatesFilter' });
    t.field('LocalName', { type: 'StringWithAggregatesFilter' });
    t.field('GovernmentForm', { type: 'StringWithAggregatesFilter' });
    t.field('HeadOfState', { type: 'StringNullableWithAggregatesFilter' });
    t.field('Capital', { type: 'IntNullableWithAggregatesFilter' });
    t.field('Code2', { type: 'StringWithAggregatesFilter' });
  },
});

export const countrylanguageWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'countrylanguageWhereInput' });
    t.list.field('OR', { type: 'countrylanguageWhereInput' });
    t.list.field('NOT', { type: 'countrylanguageWhereInput' });
    t.field('CountryCode', { type: 'StringFilter' });
    t.field('Language', { type: 'StringFilter' });
    t.field('IsOfficial', { type: 'Enumcountrylanguage_IsOfficialFilter' });
    t.field('Percentage', { type: 'DecimalFilter' });
    t.field('country', { type: 'CountryRelationFilter' });
  },
});

export const countrylanguageOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageOrderByWithRelationInput',
  definition(t) {
    t.field('CountryCode', { type: 'SortOrder' });
    t.field('Language', { type: 'SortOrder' });
    t.field('IsOfficial', { type: 'SortOrder' });
    t.field('Percentage', { type: 'SortOrder' });
    t.field('country', { type: 'countryOrderByWithRelationInput' });
  },
});

export const countrylanguageWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageWhereUniqueInput',
  definition(t) {
    t.field('CountryCode_Language', {
      type: 'countrylanguageCountryCodeLanguageCompoundUniqueInput',
    });
    t.list.field('AND', { type: 'countrylanguageWhereInput' });
    t.list.field('OR', { type: 'countrylanguageWhereInput' });
    t.list.field('NOT', { type: 'countrylanguageWhereInput' });
    t.field('CountryCode', { type: 'StringFilter' });
    t.field('Language', { type: 'StringFilter' });
    t.field('IsOfficial', { type: 'Enumcountrylanguage_IsOfficialFilter' });
    t.field('Percentage', { type: 'DecimalFilter' });
    t.field('country', { type: 'CountryRelationFilter' });
  },
});

export const countrylanguageOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageOrderByWithAggregationInput',
  definition(t) {
    t.field('CountryCode', { type: 'SortOrder' });
    t.field('Language', { type: 'SortOrder' });
    t.field('IsOfficial', { type: 'SortOrder' });
    t.field('Percentage', { type: 'SortOrder' });
    t.field('_count', { type: 'countrylanguageCountOrderByAggregateInput' });
    t.field('_avg', { type: 'countrylanguageAvgOrderByAggregateInput' });
    t.field('_max', { type: 'countrylanguageMaxOrderByAggregateInput' });
    t.field('_min', { type: 'countrylanguageMinOrderByAggregateInput' });
    t.field('_sum', { type: 'countrylanguageSumOrderByAggregateInput' });
  },
});

export const countrylanguageScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', {
      type: 'countrylanguageScalarWhereWithAggregatesInput',
    });
    t.list.field('OR', {
      type: 'countrylanguageScalarWhereWithAggregatesInput',
    });
    t.list.field('NOT', {
      type: 'countrylanguageScalarWhereWithAggregatesInput',
    });
    t.field('CountryCode', { type: 'StringWithAggregatesFilter' });
    t.field('Language', { type: 'StringWithAggregatesFilter' });
    t.field('IsOfficial', {
      type: 'Enumcountrylanguage_IsOfficialWithAggregatesFilter',
    });
    t.field('Percentage', { type: 'DecimalWithAggregatesFilter' });
  },
});

export const cityCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityCreateInput',
  definition(t) {
    t.nonNull.field('Name', { type: 'String' });
    t.nonNull.field('District', { type: 'String' });
    t.field('Population', { type: 'Int' });
    t.nonNull.field('country', {
      type: 'countryCreateNestedOneWithoutCityInput',
    });
  },
});

export const cityUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityUncheckedCreateInput',
  definition(t) {
    t.field('ID', { type: 'Int' });
    t.nonNull.field('Name', { type: 'String' });
    t.nonNull.field('CountryCode', { type: 'String' });
    t.nonNull.field('District', { type: 'String' });
    t.field('Population', { type: 'Int' });
  },
});

export const cityUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityUpdateInput',
  definition(t) {
    t.field('Name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('District', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Population', { type: 'IntFieldUpdateOperationsInput' });
    t.field('country', {
      type: 'countryUpdateOneRequiredWithoutCityNestedInput',
    });
  },
});

export const cityUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityUncheckedUpdateInput',
  definition(t) {
    t.field('ID', { type: 'IntFieldUpdateOperationsInput' });
    t.field('Name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('CountryCode', { type: 'StringFieldUpdateOperationsInput' });
    t.field('District', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Population', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const cityCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityCreateManyInput',
  definition(t) {
    t.field('ID', { type: 'Int' });
    t.nonNull.field('Name', { type: 'String' });
    t.nonNull.field('CountryCode', { type: 'String' });
    t.nonNull.field('District', { type: 'String' });
    t.field('Population', { type: 'Int' });
  },
});

export const cityUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityUpdateManyMutationInput',
  definition(t) {
    t.field('Name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('District', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Population', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const cityUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityUncheckedUpdateManyInput',
  definition(t) {
    t.field('ID', { type: 'IntFieldUpdateOperationsInput' });
    t.field('Name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('CountryCode', { type: 'StringFieldUpdateOperationsInput' });
    t.field('District', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Population', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const countryCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryCreateInput',
  definition(t) {
    t.nonNull.field('Code', { type: 'String' });
    t.nonNull.field('Name', { type: 'String' });
    t.field('Continent', { type: 'country_Continent' });
    t.nonNull.field('Region', { type: 'String' });
    t.field('SurfaceArea', { type: 'Decimal' });
    t.field('IndepYear', { type: 'Int' });
    t.field('Population', { type: 'Int' });
    t.field('LifeExpectancy', { type: 'Decimal' });
    t.field('GNP', { type: 'Decimal' });
    t.field('GNPOld', { type: 'Decimal' });
    t.nonNull.field('LocalName', { type: 'String' });
    t.nonNull.field('GovernmentForm', { type: 'String' });
    t.field('HeadOfState', { type: 'String' });
    t.field('Capital', { type: 'Int' });
    t.nonNull.field('Code2', { type: 'String' });
    t.field('city', { type: 'cityCreateNestedManyWithoutCountryInput' });
    t.field('countrylanguage', {
      type: 'countrylanguageCreateNestedManyWithoutCountryInput',
    });
  },
});

export const countryUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryUncheckedCreateInput',
  definition(t) {
    t.nonNull.field('Code', { type: 'String' });
    t.nonNull.field('Name', { type: 'String' });
    t.field('Continent', { type: 'country_Continent' });
    t.nonNull.field('Region', { type: 'String' });
    t.field('SurfaceArea', { type: 'Decimal' });
    t.field('IndepYear', { type: 'Int' });
    t.field('Population', { type: 'Int' });
    t.field('LifeExpectancy', { type: 'Decimal' });
    t.field('GNP', { type: 'Decimal' });
    t.field('GNPOld', { type: 'Decimal' });
    t.nonNull.field('LocalName', { type: 'String' });
    t.nonNull.field('GovernmentForm', { type: 'String' });
    t.field('HeadOfState', { type: 'String' });
    t.field('Capital', { type: 'Int' });
    t.nonNull.field('Code2', { type: 'String' });
    t.field('city', {
      type: 'cityUncheckedCreateNestedManyWithoutCountryInput',
    });
    t.field('countrylanguage', {
      type: 'countrylanguageUncheckedCreateNestedManyWithoutCountryInput',
    });
  },
});

export const countryUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryUpdateInput',
  definition(t) {
    t.field('Code', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Continent', {
      type: 'Enumcountry_ContinentFieldUpdateOperationsInput',
    });
    t.field('Region', { type: 'StringFieldUpdateOperationsInput' });
    t.field('SurfaceArea', { type: 'DecimalFieldUpdateOperationsInput' });
    t.field('IndepYear', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('Population', { type: 'IntFieldUpdateOperationsInput' });
    t.field('LifeExpectancy', {
      type: 'NullableDecimalFieldUpdateOperationsInput',
    });
    t.field('GNP', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('GNPOld', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('LocalName', { type: 'StringFieldUpdateOperationsInput' });
    t.field('GovernmentForm', { type: 'StringFieldUpdateOperationsInput' });
    t.field('HeadOfState', {
      type: 'NullableStringFieldUpdateOperationsInput',
    });
    t.field('Capital', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('Code2', { type: 'StringFieldUpdateOperationsInput' });
    t.field('city', { type: 'cityUpdateManyWithoutCountryNestedInput' });
    t.field('countrylanguage', {
      type: 'countrylanguageUpdateManyWithoutCountryNestedInput',
    });
  },
});

export const countryUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryUncheckedUpdateInput',
  definition(t) {
    t.field('Code', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Continent', {
      type: 'Enumcountry_ContinentFieldUpdateOperationsInput',
    });
    t.field('Region', { type: 'StringFieldUpdateOperationsInput' });
    t.field('SurfaceArea', { type: 'DecimalFieldUpdateOperationsInput' });
    t.field('IndepYear', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('Population', { type: 'IntFieldUpdateOperationsInput' });
    t.field('LifeExpectancy', {
      type: 'NullableDecimalFieldUpdateOperationsInput',
    });
    t.field('GNP', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('GNPOld', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('LocalName', { type: 'StringFieldUpdateOperationsInput' });
    t.field('GovernmentForm', { type: 'StringFieldUpdateOperationsInput' });
    t.field('HeadOfState', {
      type: 'NullableStringFieldUpdateOperationsInput',
    });
    t.field('Capital', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('Code2', { type: 'StringFieldUpdateOperationsInput' });
    t.field('city', {
      type: 'cityUncheckedUpdateManyWithoutCountryNestedInput',
    });
    t.field('countrylanguage', {
      type: 'countrylanguageUncheckedUpdateManyWithoutCountryNestedInput',
    });
  },
});

export const countryCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryCreateManyInput',
  definition(t) {
    t.nonNull.field('Code', { type: 'String' });
    t.nonNull.field('Name', { type: 'String' });
    t.field('Continent', { type: 'country_Continent' });
    t.nonNull.field('Region', { type: 'String' });
    t.field('SurfaceArea', { type: 'Decimal' });
    t.field('IndepYear', { type: 'Int' });
    t.field('Population', { type: 'Int' });
    t.field('LifeExpectancy', { type: 'Decimal' });
    t.field('GNP', { type: 'Decimal' });
    t.field('GNPOld', { type: 'Decimal' });
    t.nonNull.field('LocalName', { type: 'String' });
    t.nonNull.field('GovernmentForm', { type: 'String' });
    t.field('HeadOfState', { type: 'String' });
    t.field('Capital', { type: 'Int' });
    t.nonNull.field('Code2', { type: 'String' });
  },
});

export const countryUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryUpdateManyMutationInput',
  definition(t) {
    t.field('Code', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Continent', {
      type: 'Enumcountry_ContinentFieldUpdateOperationsInput',
    });
    t.field('Region', { type: 'StringFieldUpdateOperationsInput' });
    t.field('SurfaceArea', { type: 'DecimalFieldUpdateOperationsInput' });
    t.field('IndepYear', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('Population', { type: 'IntFieldUpdateOperationsInput' });
    t.field('LifeExpectancy', {
      type: 'NullableDecimalFieldUpdateOperationsInput',
    });
    t.field('GNP', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('GNPOld', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('LocalName', { type: 'StringFieldUpdateOperationsInput' });
    t.field('GovernmentForm', { type: 'StringFieldUpdateOperationsInput' });
    t.field('HeadOfState', {
      type: 'NullableStringFieldUpdateOperationsInput',
    });
    t.field('Capital', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('Code2', { type: 'StringFieldUpdateOperationsInput' });
  },
});

export const countryUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryUncheckedUpdateManyInput',
  definition(t) {
    t.field('Code', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Continent', {
      type: 'Enumcountry_ContinentFieldUpdateOperationsInput',
    });
    t.field('Region', { type: 'StringFieldUpdateOperationsInput' });
    t.field('SurfaceArea', { type: 'DecimalFieldUpdateOperationsInput' });
    t.field('IndepYear', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('Population', { type: 'IntFieldUpdateOperationsInput' });
    t.field('LifeExpectancy', {
      type: 'NullableDecimalFieldUpdateOperationsInput',
    });
    t.field('GNP', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('GNPOld', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('LocalName', { type: 'StringFieldUpdateOperationsInput' });
    t.field('GovernmentForm', { type: 'StringFieldUpdateOperationsInput' });
    t.field('HeadOfState', {
      type: 'NullableStringFieldUpdateOperationsInput',
    });
    t.field('Capital', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('Code2', { type: 'StringFieldUpdateOperationsInput' });
  },
});

export const countrylanguageCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageCreateInput',
  definition(t) {
    t.nonNull.field('Language', { type: 'String' });
    t.field('IsOfficial', { type: 'countrylanguage_IsOfficial' });
    t.field('Percentage', { type: 'Decimal' });
    t.nonNull.field('country', {
      type: 'countryCreateNestedOneWithoutCountrylanguageInput',
    });
  },
});

export const countrylanguageUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageUncheckedCreateInput',
  definition(t) {
    t.nonNull.field('CountryCode', { type: 'String' });
    t.nonNull.field('Language', { type: 'String' });
    t.field('IsOfficial', { type: 'countrylanguage_IsOfficial' });
    t.field('Percentage', { type: 'Decimal' });
  },
});

export const countrylanguageUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageUpdateInput',
  definition(t) {
    t.field('Language', { type: 'StringFieldUpdateOperationsInput' });
    t.field('IsOfficial', {
      type: 'Enumcountrylanguage_IsOfficialFieldUpdateOperationsInput',
    });
    t.field('Percentage', { type: 'DecimalFieldUpdateOperationsInput' });
    t.field('country', {
      type: 'countryUpdateOneRequiredWithoutCountrylanguageNestedInput',
    });
  },
});

export const countrylanguageUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageUncheckedUpdateInput',
  definition(t) {
    t.field('CountryCode', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Language', { type: 'StringFieldUpdateOperationsInput' });
    t.field('IsOfficial', {
      type: 'Enumcountrylanguage_IsOfficialFieldUpdateOperationsInput',
    });
    t.field('Percentage', { type: 'DecimalFieldUpdateOperationsInput' });
  },
});

export const countrylanguageCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageCreateManyInput',
  definition(t) {
    t.nonNull.field('CountryCode', { type: 'String' });
    t.nonNull.field('Language', { type: 'String' });
    t.field('IsOfficial', { type: 'countrylanguage_IsOfficial' });
    t.field('Percentage', { type: 'Decimal' });
  },
});

export const countrylanguageUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageUpdateManyMutationInput',
  definition(t) {
    t.field('Language', { type: 'StringFieldUpdateOperationsInput' });
    t.field('IsOfficial', {
      type: 'Enumcountrylanguage_IsOfficialFieldUpdateOperationsInput',
    });
    t.field('Percentage', { type: 'DecimalFieldUpdateOperationsInput' });
  },
});

export const countrylanguageUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageUncheckedUpdateManyInput',
  definition(t) {
    t.field('CountryCode', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Language', { type: 'StringFieldUpdateOperationsInput' });
    t.field('IsOfficial', {
      type: 'Enumcountrylanguage_IsOfficialFieldUpdateOperationsInput',
    });
    t.field('Percentage', { type: 'DecimalFieldUpdateOperationsInput' });
  },
});

export const IntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' });
    t.list.field('in', { type: 'Int' });
    t.list.field('notIn', { type: 'Int' });
    t.field('lt', { type: 'Int' });
    t.field('lte', { type: 'Int' });
    t.field('gt', { type: 'Int' });
    t.field('gte', { type: 'Int' });
    t.field('not', { type: 'NestedIntFilter' });
  },
});

export const StringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFilter',
  definition(t) {
    t.field('equals', { type: 'String' });
    t.list.field('in', { type: 'String' });
    t.list.field('notIn', { type: 'String' });
    t.field('lt', { type: 'String' });
    t.field('lte', { type: 'String' });
    t.field('gt', { type: 'String' });
    t.field('gte', { type: 'String' });
    t.field('contains', { type: 'String' });
    t.field('startsWith', { type: 'String' });
    t.field('endsWith', { type: 'String' });
    t.field('not', { type: 'NestedStringFilter' });
  },
});

export const CountryRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryRelationFilter',
  definition(t) {
    t.field('is', { type: 'countryWhereInput' });
    t.field('isNot', { type: 'countryWhereInput' });
  },
});

export const cityCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityCountOrderByAggregateInput',
  definition(t) {
    t.field('ID', { type: 'SortOrder' });
    t.field('Name', { type: 'SortOrder' });
    t.field('CountryCode', { type: 'SortOrder' });
    t.field('District', { type: 'SortOrder' });
    t.field('Population', { type: 'SortOrder' });
  },
});

export const cityAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityAvgOrderByAggregateInput',
  definition(t) {
    t.field('ID', { type: 'SortOrder' });
    t.field('Population', { type: 'SortOrder' });
  },
});

export const cityMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityMaxOrderByAggregateInput',
  definition(t) {
    t.field('ID', { type: 'SortOrder' });
    t.field('Name', { type: 'SortOrder' });
    t.field('CountryCode', { type: 'SortOrder' });
    t.field('District', { type: 'SortOrder' });
    t.field('Population', { type: 'SortOrder' });
  },
});

export const cityMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityMinOrderByAggregateInput',
  definition(t) {
    t.field('ID', { type: 'SortOrder' });
    t.field('Name', { type: 'SortOrder' });
    t.field('CountryCode', { type: 'SortOrder' });
    t.field('District', { type: 'SortOrder' });
    t.field('Population', { type: 'SortOrder' });
  },
});

export const citySumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'citySumOrderByAggregateInput',
  definition(t) {
    t.field('ID', { type: 'SortOrder' });
    t.field('Population', { type: 'SortOrder' });
  },
});

export const IntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' });
    t.list.field('in', { type: 'Int' });
    t.list.field('notIn', { type: 'Int' });
    t.field('lt', { type: 'Int' });
    t.field('lte', { type: 'Int' });
    t.field('gt', { type: 'Int' });
    t.field('gte', { type: 'Int' });
    t.field('not', { type: 'NestedIntWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_avg', { type: 'NestedFloatFilter' });
    t.field('_sum', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedIntFilter' });
    t.field('_max', { type: 'NestedIntFilter' });
  },
});

export const StringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' });
    t.list.field('in', { type: 'String' });
    t.list.field('notIn', { type: 'String' });
    t.field('lt', { type: 'String' });
    t.field('lte', { type: 'String' });
    t.field('gt', { type: 'String' });
    t.field('gte', { type: 'String' });
    t.field('contains', { type: 'String' });
    t.field('startsWith', { type: 'String' });
    t.field('endsWith', { type: 'String' });
    t.field('not', { type: 'NestedStringWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedStringFilter' });
    t.field('_max', { type: 'NestedStringFilter' });
  },
});

export const Enumcountry_ContinentFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Enumcountry_ContinentFilter',
  definition(t) {
    t.field('equals', { type: 'country_Continent' });
    t.list.field('in', { type: 'country_Continent' });
    t.list.field('notIn', { type: 'country_Continent' });
    t.field('not', { type: 'NestedEnumcountry_ContinentFilter' });
  },
});

export const DecimalFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DecimalFilter',
  definition(t) {
    t.field('equals', { type: 'Decimal' });
    t.list.field('in', { type: 'Decimal' });
    t.list.field('notIn', { type: 'Decimal' });
    t.field('lt', { type: 'Decimal' });
    t.field('lte', { type: 'Decimal' });
    t.field('gt', { type: 'Decimal' });
    t.field('gte', { type: 'Decimal' });
    t.field('not', { type: 'NestedDecimalFilter' });
  },
});

export const IntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' });
    t.list.field('in', { type: 'Int' });
    t.list.field('notIn', { type: 'Int' });
    t.field('lt', { type: 'Int' });
    t.field('lte', { type: 'Int' });
    t.field('gt', { type: 'Int' });
    t.field('gte', { type: 'Int' });
    t.field('not', { type: 'NestedIntNullableFilter' });
  },
});

export const DecimalNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DecimalNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Decimal' });
    t.list.field('in', { type: 'Decimal' });
    t.list.field('notIn', { type: 'Decimal' });
    t.field('lt', { type: 'Decimal' });
    t.field('lte', { type: 'Decimal' });
    t.field('gt', { type: 'Decimal' });
    t.field('gte', { type: 'Decimal' });
    t.field('not', { type: 'NestedDecimalNullableFilter' });
  },
});

export const StringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' });
    t.list.field('in', { type: 'String' });
    t.list.field('notIn', { type: 'String' });
    t.field('lt', { type: 'String' });
    t.field('lte', { type: 'String' });
    t.field('gt', { type: 'String' });
    t.field('gte', { type: 'String' });
    t.field('contains', { type: 'String' });
    t.field('startsWith', { type: 'String' });
    t.field('endsWith', { type: 'String' });
    t.field('not', { type: 'NestedStringNullableFilter' });
  },
});

export const CityListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityListRelationFilter',
  definition(t) {
    t.field('every', { type: 'cityWhereInput' });
    t.field('some', { type: 'cityWhereInput' });
    t.field('none', { type: 'cityWhereInput' });
  },
});

export const CountrylanguageListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountrylanguageListRelationFilter',
  definition(t) {
    t.field('every', { type: 'countrylanguageWhereInput' });
    t.field('some', { type: 'countrylanguageWhereInput' });
    t.field('none', { type: 'countrylanguageWhereInput' });
  },
});

export const SortOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SortOrderInput',
  definition(t) {
    t.nonNull.field('sort', { type: 'SortOrder' });
    t.field('nulls', { type: 'NullsOrder' });
  },
});

export const cityOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' });
  },
});

export const countrylanguageOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' });
  },
});

export const countryCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryCountOrderByAggregateInput',
  definition(t) {
    t.field('Code', { type: 'SortOrder' });
    t.field('Name', { type: 'SortOrder' });
    t.field('Continent', { type: 'SortOrder' });
    t.field('Region', { type: 'SortOrder' });
    t.field('SurfaceArea', { type: 'SortOrder' });
    t.field('IndepYear', { type: 'SortOrder' });
    t.field('Population', { type: 'SortOrder' });
    t.field('LifeExpectancy', { type: 'SortOrder' });
    t.field('GNP', { type: 'SortOrder' });
    t.field('GNPOld', { type: 'SortOrder' });
    t.field('LocalName', { type: 'SortOrder' });
    t.field('GovernmentForm', { type: 'SortOrder' });
    t.field('HeadOfState', { type: 'SortOrder' });
    t.field('Capital', { type: 'SortOrder' });
    t.field('Code2', { type: 'SortOrder' });
  },
});

export const countryAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryAvgOrderByAggregateInput',
  definition(t) {
    t.field('SurfaceArea', { type: 'SortOrder' });
    t.field('IndepYear', { type: 'SortOrder' });
    t.field('Population', { type: 'SortOrder' });
    t.field('LifeExpectancy', { type: 'SortOrder' });
    t.field('GNP', { type: 'SortOrder' });
    t.field('GNPOld', { type: 'SortOrder' });
    t.field('Capital', { type: 'SortOrder' });
  },
});

export const countryMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryMaxOrderByAggregateInput',
  definition(t) {
    t.field('Code', { type: 'SortOrder' });
    t.field('Name', { type: 'SortOrder' });
    t.field('Continent', { type: 'SortOrder' });
    t.field('Region', { type: 'SortOrder' });
    t.field('SurfaceArea', { type: 'SortOrder' });
    t.field('IndepYear', { type: 'SortOrder' });
    t.field('Population', { type: 'SortOrder' });
    t.field('LifeExpectancy', { type: 'SortOrder' });
    t.field('GNP', { type: 'SortOrder' });
    t.field('GNPOld', { type: 'SortOrder' });
    t.field('LocalName', { type: 'SortOrder' });
    t.field('GovernmentForm', { type: 'SortOrder' });
    t.field('HeadOfState', { type: 'SortOrder' });
    t.field('Capital', { type: 'SortOrder' });
    t.field('Code2', { type: 'SortOrder' });
  },
});

export const countryMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryMinOrderByAggregateInput',
  definition(t) {
    t.field('Code', { type: 'SortOrder' });
    t.field('Name', { type: 'SortOrder' });
    t.field('Continent', { type: 'SortOrder' });
    t.field('Region', { type: 'SortOrder' });
    t.field('SurfaceArea', { type: 'SortOrder' });
    t.field('IndepYear', { type: 'SortOrder' });
    t.field('Population', { type: 'SortOrder' });
    t.field('LifeExpectancy', { type: 'SortOrder' });
    t.field('GNP', { type: 'SortOrder' });
    t.field('GNPOld', { type: 'SortOrder' });
    t.field('LocalName', { type: 'SortOrder' });
    t.field('GovernmentForm', { type: 'SortOrder' });
    t.field('HeadOfState', { type: 'SortOrder' });
    t.field('Capital', { type: 'SortOrder' });
    t.field('Code2', { type: 'SortOrder' });
  },
});

export const countrySumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrySumOrderByAggregateInput',
  definition(t) {
    t.field('SurfaceArea', { type: 'SortOrder' });
    t.field('IndepYear', { type: 'SortOrder' });
    t.field('Population', { type: 'SortOrder' });
    t.field('LifeExpectancy', { type: 'SortOrder' });
    t.field('GNP', { type: 'SortOrder' });
    t.field('GNPOld', { type: 'SortOrder' });
    t.field('Capital', { type: 'SortOrder' });
  },
});

export const Enumcountry_ContinentWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Enumcountry_ContinentWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'country_Continent' });
    t.list.field('in', { type: 'country_Continent' });
    t.list.field('notIn', { type: 'country_Continent' });
    t.field('not', { type: 'NestedEnumcountry_ContinentWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedEnumcountry_ContinentFilter' });
    t.field('_max', { type: 'NestedEnumcountry_ContinentFilter' });
  },
});

export const DecimalWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DecimalWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Decimal' });
    t.list.field('in', { type: 'Decimal' });
    t.list.field('notIn', { type: 'Decimal' });
    t.field('lt', { type: 'Decimal' });
    t.field('lte', { type: 'Decimal' });
    t.field('gt', { type: 'Decimal' });
    t.field('gte', { type: 'Decimal' });
    t.field('not', { type: 'NestedDecimalWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_avg', { type: 'NestedDecimalFilter' });
    t.field('_sum', { type: 'NestedDecimalFilter' });
    t.field('_min', { type: 'NestedDecimalFilter' });
    t.field('_max', { type: 'NestedDecimalFilter' });
  },
});

export const IntNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' });
    t.list.field('in', { type: 'Int' });
    t.list.field('notIn', { type: 'Int' });
    t.field('lt', { type: 'Int' });
    t.field('lte', { type: 'Int' });
    t.field('gt', { type: 'Int' });
    t.field('gte', { type: 'Int' });
    t.field('not', { type: 'NestedIntNullableWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntNullableFilter' });
    t.field('_avg', { type: 'NestedFloatNullableFilter' });
    t.field('_sum', { type: 'NestedIntNullableFilter' });
    t.field('_min', { type: 'NestedIntNullableFilter' });
    t.field('_max', { type: 'NestedIntNullableFilter' });
  },
});

export const DecimalNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DecimalNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Decimal' });
    t.list.field('in', { type: 'Decimal' });
    t.list.field('notIn', { type: 'Decimal' });
    t.field('lt', { type: 'Decimal' });
    t.field('lte', { type: 'Decimal' });
    t.field('gt', { type: 'Decimal' });
    t.field('gte', { type: 'Decimal' });
    t.field('not', { type: 'NestedDecimalNullableWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntNullableFilter' });
    t.field('_avg', { type: 'NestedDecimalNullableFilter' });
    t.field('_sum', { type: 'NestedDecimalNullableFilter' });
    t.field('_min', { type: 'NestedDecimalNullableFilter' });
    t.field('_max', { type: 'NestedDecimalNullableFilter' });
  },
});

export const StringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' });
    t.list.field('in', { type: 'String' });
    t.list.field('notIn', { type: 'String' });
    t.field('lt', { type: 'String' });
    t.field('lte', { type: 'String' });
    t.field('gt', { type: 'String' });
    t.field('gte', { type: 'String' });
    t.field('contains', { type: 'String' });
    t.field('startsWith', { type: 'String' });
    t.field('endsWith', { type: 'String' });
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntNullableFilter' });
    t.field('_min', { type: 'NestedStringNullableFilter' });
    t.field('_max', { type: 'NestedStringNullableFilter' });
  },
});

export const Enumcountrylanguage_IsOfficialFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Enumcountrylanguage_IsOfficialFilter',
  definition(t) {
    t.field('equals', { type: 'countrylanguage_IsOfficial' });
    t.list.field('in', { type: 'countrylanguage_IsOfficial' });
    t.list.field('notIn', { type: 'countrylanguage_IsOfficial' });
    t.field('not', { type: 'NestedEnumcountrylanguage_IsOfficialFilter' });
  },
});

export const countrylanguageCountryCodeLanguageCompoundUniqueInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'countrylanguageCountryCodeLanguageCompoundUniqueInput',
    definition(t) {
      t.nonNull.field('CountryCode', { type: 'String' });
      t.nonNull.field('Language', { type: 'String' });
    },
  });

export const countrylanguageCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageCountOrderByAggregateInput',
  definition(t) {
    t.field('CountryCode', { type: 'SortOrder' });
    t.field('Language', { type: 'SortOrder' });
    t.field('IsOfficial', { type: 'SortOrder' });
    t.field('Percentage', { type: 'SortOrder' });
  },
});

export const countrylanguageAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageAvgOrderByAggregateInput',
  definition(t) {
    t.field('Percentage', { type: 'SortOrder' });
  },
});

export const countrylanguageMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageMaxOrderByAggregateInput',
  definition(t) {
    t.field('CountryCode', { type: 'SortOrder' });
    t.field('Language', { type: 'SortOrder' });
    t.field('IsOfficial', { type: 'SortOrder' });
    t.field('Percentage', { type: 'SortOrder' });
  },
});

export const countrylanguageMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageMinOrderByAggregateInput',
  definition(t) {
    t.field('CountryCode', { type: 'SortOrder' });
    t.field('Language', { type: 'SortOrder' });
    t.field('IsOfficial', { type: 'SortOrder' });
    t.field('Percentage', { type: 'SortOrder' });
  },
});

export const countrylanguageSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageSumOrderByAggregateInput',
  definition(t) {
    t.field('Percentage', { type: 'SortOrder' });
  },
});

export const Enumcountrylanguage_IsOfficialWithAggregatesFilter =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'Enumcountrylanguage_IsOfficialWithAggregatesFilter',
    definition(t) {
      t.field('equals', { type: 'countrylanguage_IsOfficial' });
      t.list.field('in', { type: 'countrylanguage_IsOfficial' });
      t.list.field('notIn', { type: 'countrylanguage_IsOfficial' });
      t.field('not', {
        type: 'NestedEnumcountrylanguage_IsOfficialWithAggregatesFilter',
      });
      t.field('_count', { type: 'NestedIntFilter' });
      t.field('_min', { type: 'NestedEnumcountrylanguage_IsOfficialFilter' });
      t.field('_max', { type: 'NestedEnumcountrylanguage_IsOfficialFilter' });
    },
  });

export const countryCreateNestedOneWithoutCityInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryCreateNestedOneWithoutCityInput',
  definition(t) {
    t.field('create', { type: 'countryCreateWithoutCityInput' });
    t.field('connectOrCreate', {
      type: 'countryCreateOrConnectWithoutCityInput',
    });
    t.field('connect', { type: 'countryWhereUniqueInput' });
  },
});

export const StringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' });
  },
});

export const IntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' });
    t.field('increment', { type: 'Int' });
    t.field('decrement', { type: 'Int' });
    t.field('multiply', { type: 'Int' });
    t.field('divide', { type: 'Int' });
  },
});

export const countryUpdateOneRequiredWithoutCityNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryUpdateOneRequiredWithoutCityNestedInput',
  definition(t) {
    t.field('create', { type: 'countryCreateWithoutCityInput' });
    t.field('connectOrCreate', {
      type: 'countryCreateOrConnectWithoutCityInput',
    });
    t.field('upsert', { type: 'countryUpsertWithoutCityInput' });
    t.field('connect', { type: 'countryWhereUniqueInput' });
    t.field('update', { type: 'countryUpdateToOneWithWhereWithoutCityInput' });
  },
});

export const cityCreateNestedManyWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityCreateNestedManyWithoutCountryInput',
  definition(t) {
    t.list.field('create', { type: 'cityCreateWithoutCountryInput' });
    t.list.field('connectOrCreate', {
      type: 'cityCreateOrConnectWithoutCountryInput',
    });
    t.field('createMany', { type: 'cityCreateManyCountryInputEnvelope' });
    t.list.field('connect', { type: 'cityWhereUniqueInput' });
  },
});

export const countrylanguageCreateNestedManyWithoutCountryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'countrylanguageCreateNestedManyWithoutCountryInput',
    definition(t) {
      t.list.field('create', {
        type: 'countrylanguageCreateWithoutCountryInput',
      });
      t.list.field('connectOrCreate', {
        type: 'countrylanguageCreateOrConnectWithoutCountryInput',
      });
      t.field('createMany', {
        type: 'countrylanguageCreateManyCountryInputEnvelope',
      });
      t.list.field('connect', { type: 'countrylanguageWhereUniqueInput' });
    },
  });

export const cityUncheckedCreateNestedManyWithoutCountryInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'cityUncheckedCreateNestedManyWithoutCountryInput',
    definition(t) {
      t.list.field('create', { type: 'cityCreateWithoutCountryInput' });
      t.list.field('connectOrCreate', {
        type: 'cityCreateOrConnectWithoutCountryInput',
      });
      t.field('createMany', { type: 'cityCreateManyCountryInputEnvelope' });
      t.list.field('connect', { type: 'cityWhereUniqueInput' });
    },
  },
);

export const countrylanguageUncheckedCreateNestedManyWithoutCountryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'countrylanguageUncheckedCreateNestedManyWithoutCountryInput',
    definition(t) {
      t.list.field('create', {
        type: 'countrylanguageCreateWithoutCountryInput',
      });
      t.list.field('connectOrCreate', {
        type: 'countrylanguageCreateOrConnectWithoutCountryInput',
      });
      t.field('createMany', {
        type: 'countrylanguageCreateManyCountryInputEnvelope',
      });
      t.list.field('connect', { type: 'countrylanguageWhereUniqueInput' });
    },
  });

export const Enumcountry_ContinentFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'Enumcountry_ContinentFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'country_Continent' });
  },
});

export const DecimalFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DecimalFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Decimal' });
    t.field('increment', { type: 'Decimal' });
    t.field('decrement', { type: 'Decimal' });
    t.field('multiply', { type: 'Decimal' });
    t.field('divide', { type: 'Decimal' });
  },
});

export const NullableIntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableIntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' });
    t.field('increment', { type: 'Int' });
    t.field('decrement', { type: 'Int' });
    t.field('multiply', { type: 'Int' });
    t.field('divide', { type: 'Int' });
  },
});

export const NullableDecimalFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableDecimalFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Decimal' });
    t.field('increment', { type: 'Decimal' });
    t.field('decrement', { type: 'Decimal' });
    t.field('multiply', { type: 'Decimal' });
    t.field('divide', { type: 'Decimal' });
  },
});

export const NullableStringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableStringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' });
  },
});

export const cityUpdateManyWithoutCountryNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityUpdateManyWithoutCountryNestedInput',
  definition(t) {
    t.list.field('create', { type: 'cityCreateWithoutCountryInput' });
    t.list.field('connectOrCreate', {
      type: 'cityCreateOrConnectWithoutCountryInput',
    });
    t.list.field('upsert', {
      type: 'cityUpsertWithWhereUniqueWithoutCountryInput',
    });
    t.field('createMany', { type: 'cityCreateManyCountryInputEnvelope' });
    t.list.field('set', { type: 'cityWhereUniqueInput' });
    t.list.field('disconnect', { type: 'cityWhereUniqueInput' });
    t.list.field('delete', { type: 'cityWhereUniqueInput' });
    t.list.field('connect', { type: 'cityWhereUniqueInput' });
    t.list.field('update', {
      type: 'cityUpdateWithWhereUniqueWithoutCountryInput',
    });
    t.list.field('updateMany', {
      type: 'cityUpdateManyWithWhereWithoutCountryInput',
    });
    t.list.field('deleteMany', { type: 'cityScalarWhereInput' });
  },
});

export const countrylanguageUpdateManyWithoutCountryNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'countrylanguageUpdateManyWithoutCountryNestedInput',
    definition(t) {
      t.list.field('create', {
        type: 'countrylanguageCreateWithoutCountryInput',
      });
      t.list.field('connectOrCreate', {
        type: 'countrylanguageCreateOrConnectWithoutCountryInput',
      });
      t.list.field('upsert', {
        type: 'countrylanguageUpsertWithWhereUniqueWithoutCountryInput',
      });
      t.field('createMany', {
        type: 'countrylanguageCreateManyCountryInputEnvelope',
      });
      t.list.field('set', { type: 'countrylanguageWhereUniqueInput' });
      t.list.field('disconnect', { type: 'countrylanguageWhereUniqueInput' });
      t.list.field('delete', { type: 'countrylanguageWhereUniqueInput' });
      t.list.field('connect', { type: 'countrylanguageWhereUniqueInput' });
      t.list.field('update', {
        type: 'countrylanguageUpdateWithWhereUniqueWithoutCountryInput',
      });
      t.list.field('updateMany', {
        type: 'countrylanguageUpdateManyWithWhereWithoutCountryInput',
      });
      t.list.field('deleteMany', { type: 'countrylanguageScalarWhereInput' });
    },
  });

export const cityUncheckedUpdateManyWithoutCountryNestedInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'cityUncheckedUpdateManyWithoutCountryNestedInput',
    definition(t) {
      t.list.field('create', { type: 'cityCreateWithoutCountryInput' });
      t.list.field('connectOrCreate', {
        type: 'cityCreateOrConnectWithoutCountryInput',
      });
      t.list.field('upsert', {
        type: 'cityUpsertWithWhereUniqueWithoutCountryInput',
      });
      t.field('createMany', { type: 'cityCreateManyCountryInputEnvelope' });
      t.list.field('set', { type: 'cityWhereUniqueInput' });
      t.list.field('disconnect', { type: 'cityWhereUniqueInput' });
      t.list.field('delete', { type: 'cityWhereUniqueInput' });
      t.list.field('connect', { type: 'cityWhereUniqueInput' });
      t.list.field('update', {
        type: 'cityUpdateWithWhereUniqueWithoutCountryInput',
      });
      t.list.field('updateMany', {
        type: 'cityUpdateManyWithWhereWithoutCountryInput',
      });
      t.list.field('deleteMany', { type: 'cityScalarWhereInput' });
    },
  },
);

export const countrylanguageUncheckedUpdateManyWithoutCountryNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'countrylanguageUncheckedUpdateManyWithoutCountryNestedInput',
    definition(t) {
      t.list.field('create', {
        type: 'countrylanguageCreateWithoutCountryInput',
      });
      t.list.field('connectOrCreate', {
        type: 'countrylanguageCreateOrConnectWithoutCountryInput',
      });
      t.list.field('upsert', {
        type: 'countrylanguageUpsertWithWhereUniqueWithoutCountryInput',
      });
      t.field('createMany', {
        type: 'countrylanguageCreateManyCountryInputEnvelope',
      });
      t.list.field('set', { type: 'countrylanguageWhereUniqueInput' });
      t.list.field('disconnect', { type: 'countrylanguageWhereUniqueInput' });
      t.list.field('delete', { type: 'countrylanguageWhereUniqueInput' });
      t.list.field('connect', { type: 'countrylanguageWhereUniqueInput' });
      t.list.field('update', {
        type: 'countrylanguageUpdateWithWhereUniqueWithoutCountryInput',
      });
      t.list.field('updateMany', {
        type: 'countrylanguageUpdateManyWithWhereWithoutCountryInput',
      });
      t.list.field('deleteMany', { type: 'countrylanguageScalarWhereInput' });
    },
  });

export const countryCreateNestedOneWithoutCountrylanguageInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'countryCreateNestedOneWithoutCountrylanguageInput',
    definition(t) {
      t.field('create', { type: 'countryCreateWithoutCountrylanguageInput' });
      t.field('connectOrCreate', {
        type: 'countryCreateOrConnectWithoutCountrylanguageInput',
      });
      t.field('connect', { type: 'countryWhereUniqueInput' });
    },
  });

export const Enumcountrylanguage_IsOfficialFieldUpdateOperationsInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'Enumcountrylanguage_IsOfficialFieldUpdateOperationsInput',
    definition(t) {
      t.field('set', { type: 'countrylanguage_IsOfficial' });
    },
  });

export const countryUpdateOneRequiredWithoutCountrylanguageNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'countryUpdateOneRequiredWithoutCountrylanguageNestedInput',
    definition(t) {
      t.field('create', { type: 'countryCreateWithoutCountrylanguageInput' });
      t.field('connectOrCreate', {
        type: 'countryCreateOrConnectWithoutCountrylanguageInput',
      });
      t.field('upsert', { type: 'countryUpsertWithoutCountrylanguageInput' });
      t.field('connect', { type: 'countryWhereUniqueInput' });
      t.field('update', {
        type: 'countryUpdateToOneWithWhereWithoutCountrylanguageInput',
      });
    },
  });

export const NestedIntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' });
    t.list.field('in', { type: 'Int' });
    t.list.field('notIn', { type: 'Int' });
    t.field('lt', { type: 'Int' });
    t.field('lte', { type: 'Int' });
    t.field('gt', { type: 'Int' });
    t.field('gte', { type: 'Int' });
    t.field('not', { type: 'NestedIntFilter' });
  },
});

export const NestedStringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringFilter',
  definition(t) {
    t.field('equals', { type: 'String' });
    t.list.field('in', { type: 'String' });
    t.list.field('notIn', { type: 'String' });
    t.field('lt', { type: 'String' });
    t.field('lte', { type: 'String' });
    t.field('gt', { type: 'String' });
    t.field('gte', { type: 'String' });
    t.field('contains', { type: 'String' });
    t.field('startsWith', { type: 'String' });
    t.field('endsWith', { type: 'String' });
    t.field('not', { type: 'NestedStringFilter' });
  },
});

export const NestedIntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' });
    t.list.field('in', { type: 'Int' });
    t.list.field('notIn', { type: 'Int' });
    t.field('lt', { type: 'Int' });
    t.field('lte', { type: 'Int' });
    t.field('gt', { type: 'Int' });
    t.field('gte', { type: 'Int' });
    t.field('not', { type: 'NestedIntWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_avg', { type: 'NestedFloatFilter' });
    t.field('_sum', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedIntFilter' });
    t.field('_max', { type: 'NestedIntFilter' });
  },
});

export const NestedFloatFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatFilter',
  definition(t) {
    t.field('equals', { type: 'Float' });
    t.list.field('in', { type: 'Float' });
    t.list.field('notIn', { type: 'Float' });
    t.field('lt', { type: 'Float' });
    t.field('lte', { type: 'Float' });
    t.field('gt', { type: 'Float' });
    t.field('gte', { type: 'Float' });
    t.field('not', { type: 'NestedFloatFilter' });
  },
});

export const NestedStringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' });
    t.list.field('in', { type: 'String' });
    t.list.field('notIn', { type: 'String' });
    t.field('lt', { type: 'String' });
    t.field('lte', { type: 'String' });
    t.field('gt', { type: 'String' });
    t.field('gte', { type: 'String' });
    t.field('contains', { type: 'String' });
    t.field('startsWith', { type: 'String' });
    t.field('endsWith', { type: 'String' });
    t.field('not', { type: 'NestedStringWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedStringFilter' });
    t.field('_max', { type: 'NestedStringFilter' });
  },
});

export const NestedEnumcountry_ContinentFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumcountry_ContinentFilter',
  definition(t) {
    t.field('equals', { type: 'country_Continent' });
    t.list.field('in', { type: 'country_Continent' });
    t.list.field('notIn', { type: 'country_Continent' });
    t.field('not', { type: 'NestedEnumcountry_ContinentFilter' });
  },
});

export const NestedDecimalFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDecimalFilter',
  definition(t) {
    t.field('equals', { type: 'Decimal' });
    t.list.field('in', { type: 'Decimal' });
    t.list.field('notIn', { type: 'Decimal' });
    t.field('lt', { type: 'Decimal' });
    t.field('lte', { type: 'Decimal' });
    t.field('gt', { type: 'Decimal' });
    t.field('gte', { type: 'Decimal' });
    t.field('not', { type: 'NestedDecimalFilter' });
  },
});

export const NestedIntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' });
    t.list.field('in', { type: 'Int' });
    t.list.field('notIn', { type: 'Int' });
    t.field('lt', { type: 'Int' });
    t.field('lte', { type: 'Int' });
    t.field('gt', { type: 'Int' });
    t.field('gte', { type: 'Int' });
    t.field('not', { type: 'NestedIntNullableFilter' });
  },
});

export const NestedDecimalNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDecimalNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Decimal' });
    t.list.field('in', { type: 'Decimal' });
    t.list.field('notIn', { type: 'Decimal' });
    t.field('lt', { type: 'Decimal' });
    t.field('lte', { type: 'Decimal' });
    t.field('gt', { type: 'Decimal' });
    t.field('gte', { type: 'Decimal' });
    t.field('not', { type: 'NestedDecimalNullableFilter' });
  },
});

export const NestedStringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' });
    t.list.field('in', { type: 'String' });
    t.list.field('notIn', { type: 'String' });
    t.field('lt', { type: 'String' });
    t.field('lte', { type: 'String' });
    t.field('gt', { type: 'String' });
    t.field('gte', { type: 'String' });
    t.field('contains', { type: 'String' });
    t.field('startsWith', { type: 'String' });
    t.field('endsWith', { type: 'String' });
    t.field('not', { type: 'NestedStringNullableFilter' });
  },
});

export const NestedEnumcountry_ContinentWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumcountry_ContinentWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'country_Continent' });
    t.list.field('in', { type: 'country_Continent' });
    t.list.field('notIn', { type: 'country_Continent' });
    t.field('not', { type: 'NestedEnumcountry_ContinentWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedEnumcountry_ContinentFilter' });
    t.field('_max', { type: 'NestedEnumcountry_ContinentFilter' });
  },
});

export const NestedDecimalWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDecimalWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Decimal' });
    t.list.field('in', { type: 'Decimal' });
    t.list.field('notIn', { type: 'Decimal' });
    t.field('lt', { type: 'Decimal' });
    t.field('lte', { type: 'Decimal' });
    t.field('gt', { type: 'Decimal' });
    t.field('gte', { type: 'Decimal' });
    t.field('not', { type: 'NestedDecimalWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_avg', { type: 'NestedDecimalFilter' });
    t.field('_sum', { type: 'NestedDecimalFilter' });
    t.field('_min', { type: 'NestedDecimalFilter' });
    t.field('_max', { type: 'NestedDecimalFilter' });
  },
});

export const NestedIntNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' });
    t.list.field('in', { type: 'Int' });
    t.list.field('notIn', { type: 'Int' });
    t.field('lt', { type: 'Int' });
    t.field('lte', { type: 'Int' });
    t.field('gt', { type: 'Int' });
    t.field('gte', { type: 'Int' });
    t.field('not', { type: 'NestedIntNullableWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntNullableFilter' });
    t.field('_avg', { type: 'NestedFloatNullableFilter' });
    t.field('_sum', { type: 'NestedIntNullableFilter' });
    t.field('_min', { type: 'NestedIntNullableFilter' });
    t.field('_max', { type: 'NestedIntNullableFilter' });
  },
});

export const NestedFloatNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Float' });
    t.list.field('in', { type: 'Float' });
    t.list.field('notIn', { type: 'Float' });
    t.field('lt', { type: 'Float' });
    t.field('lte', { type: 'Float' });
    t.field('gt', { type: 'Float' });
    t.field('gte', { type: 'Float' });
    t.field('not', { type: 'NestedFloatNullableFilter' });
  },
});

export const NestedDecimalNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDecimalNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Decimal' });
    t.list.field('in', { type: 'Decimal' });
    t.list.field('notIn', { type: 'Decimal' });
    t.field('lt', { type: 'Decimal' });
    t.field('lte', { type: 'Decimal' });
    t.field('gt', { type: 'Decimal' });
    t.field('gte', { type: 'Decimal' });
    t.field('not', { type: 'NestedDecimalNullableWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntNullableFilter' });
    t.field('_avg', { type: 'NestedDecimalNullableFilter' });
    t.field('_sum', { type: 'NestedDecimalNullableFilter' });
    t.field('_min', { type: 'NestedDecimalNullableFilter' });
    t.field('_max', { type: 'NestedDecimalNullableFilter' });
  },
});

export const NestedStringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' });
    t.list.field('in', { type: 'String' });
    t.list.field('notIn', { type: 'String' });
    t.field('lt', { type: 'String' });
    t.field('lte', { type: 'String' });
    t.field('gt', { type: 'String' });
    t.field('gte', { type: 'String' });
    t.field('contains', { type: 'String' });
    t.field('startsWith', { type: 'String' });
    t.field('endsWith', { type: 'String' });
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntNullableFilter' });
    t.field('_min', { type: 'NestedStringNullableFilter' });
    t.field('_max', { type: 'NestedStringNullableFilter' });
  },
});

export const NestedEnumcountrylanguage_IsOfficialFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumcountrylanguage_IsOfficialFilter',
  definition(t) {
    t.field('equals', { type: 'countrylanguage_IsOfficial' });
    t.list.field('in', { type: 'countrylanguage_IsOfficial' });
    t.list.field('notIn', { type: 'countrylanguage_IsOfficial' });
    t.field('not', { type: 'NestedEnumcountrylanguage_IsOfficialFilter' });
  },
});

export const NestedEnumcountrylanguage_IsOfficialWithAggregatesFilter =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'NestedEnumcountrylanguage_IsOfficialWithAggregatesFilter',
    definition(t) {
      t.field('equals', { type: 'countrylanguage_IsOfficial' });
      t.list.field('in', { type: 'countrylanguage_IsOfficial' });
      t.list.field('notIn', { type: 'countrylanguage_IsOfficial' });
      t.field('not', {
        type: 'NestedEnumcountrylanguage_IsOfficialWithAggregatesFilter',
      });
      t.field('_count', { type: 'NestedIntFilter' });
      t.field('_min', { type: 'NestedEnumcountrylanguage_IsOfficialFilter' });
      t.field('_max', { type: 'NestedEnumcountrylanguage_IsOfficialFilter' });
    },
  });

export const countryCreateWithoutCityInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryCreateWithoutCityInput',
  definition(t) {
    t.nonNull.field('Code', { type: 'String' });
    t.nonNull.field('Name', { type: 'String' });
    t.field('Continent', { type: 'country_Continent' });
    t.nonNull.field('Region', { type: 'String' });
    t.field('SurfaceArea', { type: 'Decimal' });
    t.field('IndepYear', { type: 'Int' });
    t.field('Population', { type: 'Int' });
    t.field('LifeExpectancy', { type: 'Decimal' });
    t.field('GNP', { type: 'Decimal' });
    t.field('GNPOld', { type: 'Decimal' });
    t.nonNull.field('LocalName', { type: 'String' });
    t.nonNull.field('GovernmentForm', { type: 'String' });
    t.field('HeadOfState', { type: 'String' });
    t.field('Capital', { type: 'Int' });
    t.nonNull.field('Code2', { type: 'String' });
    t.field('countrylanguage', {
      type: 'countrylanguageCreateNestedManyWithoutCountryInput',
    });
  },
});

export const countryUncheckedCreateWithoutCityInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryUncheckedCreateWithoutCityInput',
  definition(t) {
    t.nonNull.field('Code', { type: 'String' });
    t.nonNull.field('Name', { type: 'String' });
    t.field('Continent', { type: 'country_Continent' });
    t.nonNull.field('Region', { type: 'String' });
    t.field('SurfaceArea', { type: 'Decimal' });
    t.field('IndepYear', { type: 'Int' });
    t.field('Population', { type: 'Int' });
    t.field('LifeExpectancy', { type: 'Decimal' });
    t.field('GNP', { type: 'Decimal' });
    t.field('GNPOld', { type: 'Decimal' });
    t.nonNull.field('LocalName', { type: 'String' });
    t.nonNull.field('GovernmentForm', { type: 'String' });
    t.field('HeadOfState', { type: 'String' });
    t.field('Capital', { type: 'Int' });
    t.nonNull.field('Code2', { type: 'String' });
    t.field('countrylanguage', {
      type: 'countrylanguageUncheckedCreateNestedManyWithoutCountryInput',
    });
  },
});

export const countryCreateOrConnectWithoutCityInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryCreateOrConnectWithoutCityInput',
  definition(t) {
    t.nonNull.field('where', { type: 'countryWhereUniqueInput' });
    t.nonNull.field('create', { type: 'countryCreateWithoutCityInput' });
  },
});

export const countryUpsertWithoutCityInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryUpsertWithoutCityInput',
  definition(t) {
    t.nonNull.field('update', { type: 'countryUpdateWithoutCityInput' });
    t.nonNull.field('create', { type: 'countryCreateWithoutCityInput' });
    t.field('where', { type: 'countryWhereInput' });
  },
});

export const countryUpdateToOneWithWhereWithoutCityInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryUpdateToOneWithWhereWithoutCityInput',
  definition(t) {
    t.field('where', { type: 'countryWhereInput' });
    t.nonNull.field('data', { type: 'countryUpdateWithoutCityInput' });
  },
});

export const countryUpdateWithoutCityInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryUpdateWithoutCityInput',
  definition(t) {
    t.field('Code', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Continent', {
      type: 'Enumcountry_ContinentFieldUpdateOperationsInput',
    });
    t.field('Region', { type: 'StringFieldUpdateOperationsInput' });
    t.field('SurfaceArea', { type: 'DecimalFieldUpdateOperationsInput' });
    t.field('IndepYear', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('Population', { type: 'IntFieldUpdateOperationsInput' });
    t.field('LifeExpectancy', {
      type: 'NullableDecimalFieldUpdateOperationsInput',
    });
    t.field('GNP', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('GNPOld', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('LocalName', { type: 'StringFieldUpdateOperationsInput' });
    t.field('GovernmentForm', { type: 'StringFieldUpdateOperationsInput' });
    t.field('HeadOfState', {
      type: 'NullableStringFieldUpdateOperationsInput',
    });
    t.field('Capital', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('Code2', { type: 'StringFieldUpdateOperationsInput' });
    t.field('countrylanguage', {
      type: 'countrylanguageUpdateManyWithoutCountryNestedInput',
    });
  },
});

export const countryUncheckedUpdateWithoutCityInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryUncheckedUpdateWithoutCityInput',
  definition(t) {
    t.field('Code', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Continent', {
      type: 'Enumcountry_ContinentFieldUpdateOperationsInput',
    });
    t.field('Region', { type: 'StringFieldUpdateOperationsInput' });
    t.field('SurfaceArea', { type: 'DecimalFieldUpdateOperationsInput' });
    t.field('IndepYear', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('Population', { type: 'IntFieldUpdateOperationsInput' });
    t.field('LifeExpectancy', {
      type: 'NullableDecimalFieldUpdateOperationsInput',
    });
    t.field('GNP', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('GNPOld', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('LocalName', { type: 'StringFieldUpdateOperationsInput' });
    t.field('GovernmentForm', { type: 'StringFieldUpdateOperationsInput' });
    t.field('HeadOfState', {
      type: 'NullableStringFieldUpdateOperationsInput',
    });
    t.field('Capital', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('Code2', { type: 'StringFieldUpdateOperationsInput' });
    t.field('countrylanguage', {
      type: 'countrylanguageUncheckedUpdateManyWithoutCountryNestedInput',
    });
  },
});

export const cityCreateWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityCreateWithoutCountryInput',
  definition(t) {
    t.nonNull.field('Name', { type: 'String' });
    t.nonNull.field('District', { type: 'String' });
    t.field('Population', { type: 'Int' });
  },
});

export const cityUncheckedCreateWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityUncheckedCreateWithoutCountryInput',
  definition(t) {
    t.field('ID', { type: 'Int' });
    t.nonNull.field('Name', { type: 'String' });
    t.nonNull.field('District', { type: 'String' });
    t.field('Population', { type: 'Int' });
  },
});

export const cityCreateOrConnectWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityCreateOrConnectWithoutCountryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'cityWhereUniqueInput' });
    t.nonNull.field('create', { type: 'cityCreateWithoutCountryInput' });
  },
});

export const cityCreateManyCountryInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityCreateManyCountryInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'cityCreateManyCountryInput' });
    t.field('skipDuplicates', { type: 'Boolean' });
  },
});

export const countrylanguageCreateWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageCreateWithoutCountryInput',
  definition(t) {
    t.nonNull.field('Language', { type: 'String' });
    t.field('IsOfficial', { type: 'countrylanguage_IsOfficial' });
    t.field('Percentage', { type: 'Decimal' });
  },
});

export const countrylanguageUncheckedCreateWithoutCountryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'countrylanguageUncheckedCreateWithoutCountryInput',
    definition(t) {
      t.nonNull.field('Language', { type: 'String' });
      t.field('IsOfficial', { type: 'countrylanguage_IsOfficial' });
      t.field('Percentage', { type: 'Decimal' });
    },
  });

export const countrylanguageCreateOrConnectWithoutCountryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'countrylanguageCreateOrConnectWithoutCountryInput',
    definition(t) {
      t.nonNull.field('where', { type: 'countrylanguageWhereUniqueInput' });
      t.nonNull.field('create', {
        type: 'countrylanguageCreateWithoutCountryInput',
      });
    },
  });

export const countrylanguageCreateManyCountryInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageCreateManyCountryInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'countrylanguageCreateManyCountryInput' });
    t.field('skipDuplicates', { type: 'Boolean' });
  },
});

export const cityUpsertWithWhereUniqueWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityUpsertWithWhereUniqueWithoutCountryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'cityWhereUniqueInput' });
    t.nonNull.field('update', { type: 'cityUpdateWithoutCountryInput' });
    t.nonNull.field('create', { type: 'cityCreateWithoutCountryInput' });
  },
});

export const cityUpdateWithWhereUniqueWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityUpdateWithWhereUniqueWithoutCountryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'cityWhereUniqueInput' });
    t.nonNull.field('data', { type: 'cityUpdateWithoutCountryInput' });
  },
});

export const cityUpdateManyWithWhereWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityUpdateManyWithWhereWithoutCountryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'cityScalarWhereInput' });
    t.nonNull.field('data', { type: 'cityUpdateManyMutationInput' });
  },
});

export const cityScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'cityScalarWhereInput' });
    t.list.field('OR', { type: 'cityScalarWhereInput' });
    t.list.field('NOT', { type: 'cityScalarWhereInput' });
    t.field('ID', { type: 'IntFilter' });
    t.field('Name', { type: 'StringFilter' });
    t.field('CountryCode', { type: 'StringFilter' });
    t.field('District', { type: 'StringFilter' });
    t.field('Population', { type: 'IntFilter' });
  },
});

export const countrylanguageUpsertWithWhereUniqueWithoutCountryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'countrylanguageUpsertWithWhereUniqueWithoutCountryInput',
    definition(t) {
      t.nonNull.field('where', { type: 'countrylanguageWhereUniqueInput' });
      t.nonNull.field('update', {
        type: 'countrylanguageUpdateWithoutCountryInput',
      });
      t.nonNull.field('create', {
        type: 'countrylanguageCreateWithoutCountryInput',
      });
    },
  });

export const countrylanguageUpdateWithWhereUniqueWithoutCountryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'countrylanguageUpdateWithWhereUniqueWithoutCountryInput',
    definition(t) {
      t.nonNull.field('where', { type: 'countrylanguageWhereUniqueInput' });
      t.nonNull.field('data', {
        type: 'countrylanguageUpdateWithoutCountryInput',
      });
    },
  });

export const countrylanguageUpdateManyWithWhereWithoutCountryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'countrylanguageUpdateManyWithWhereWithoutCountryInput',
    definition(t) {
      t.nonNull.field('where', { type: 'countrylanguageScalarWhereInput' });
      t.nonNull.field('data', {
        type: 'countrylanguageUpdateManyMutationInput',
      });
    },
  });

export const countrylanguageScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'countrylanguageScalarWhereInput' });
    t.list.field('OR', { type: 'countrylanguageScalarWhereInput' });
    t.list.field('NOT', { type: 'countrylanguageScalarWhereInput' });
    t.field('CountryCode', { type: 'StringFilter' });
    t.field('Language', { type: 'StringFilter' });
    t.field('IsOfficial', { type: 'Enumcountrylanguage_IsOfficialFilter' });
    t.field('Percentage', { type: 'DecimalFilter' });
  },
});

export const countryCreateWithoutCountrylanguageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryCreateWithoutCountrylanguageInput',
  definition(t) {
    t.nonNull.field('Code', { type: 'String' });
    t.nonNull.field('Name', { type: 'String' });
    t.field('Continent', { type: 'country_Continent' });
    t.nonNull.field('Region', { type: 'String' });
    t.field('SurfaceArea', { type: 'Decimal' });
    t.field('IndepYear', { type: 'Int' });
    t.field('Population', { type: 'Int' });
    t.field('LifeExpectancy', { type: 'Decimal' });
    t.field('GNP', { type: 'Decimal' });
    t.field('GNPOld', { type: 'Decimal' });
    t.nonNull.field('LocalName', { type: 'String' });
    t.nonNull.field('GovernmentForm', { type: 'String' });
    t.field('HeadOfState', { type: 'String' });
    t.field('Capital', { type: 'Int' });
    t.nonNull.field('Code2', { type: 'String' });
    t.field('city', { type: 'cityCreateNestedManyWithoutCountryInput' });
  },
});

export const countryUncheckedCreateWithoutCountrylanguageInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'countryUncheckedCreateWithoutCountrylanguageInput',
    definition(t) {
      t.nonNull.field('Code', { type: 'String' });
      t.nonNull.field('Name', { type: 'String' });
      t.field('Continent', { type: 'country_Continent' });
      t.nonNull.field('Region', { type: 'String' });
      t.field('SurfaceArea', { type: 'Decimal' });
      t.field('IndepYear', { type: 'Int' });
      t.field('Population', { type: 'Int' });
      t.field('LifeExpectancy', { type: 'Decimal' });
      t.field('GNP', { type: 'Decimal' });
      t.field('GNPOld', { type: 'Decimal' });
      t.nonNull.field('LocalName', { type: 'String' });
      t.nonNull.field('GovernmentForm', { type: 'String' });
      t.field('HeadOfState', { type: 'String' });
      t.field('Capital', { type: 'Int' });
      t.nonNull.field('Code2', { type: 'String' });
      t.field('city', {
        type: 'cityUncheckedCreateNestedManyWithoutCountryInput',
      });
    },
  });

export const countryCreateOrConnectWithoutCountrylanguageInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'countryCreateOrConnectWithoutCountrylanguageInput',
    definition(t) {
      t.nonNull.field('where', { type: 'countryWhereUniqueInput' });
      t.nonNull.field('create', {
        type: 'countryCreateWithoutCountrylanguageInput',
      });
    },
  });

export const countryUpsertWithoutCountrylanguageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryUpsertWithoutCountrylanguageInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'countryUpdateWithoutCountrylanguageInput',
    });
    t.nonNull.field('create', {
      type: 'countryCreateWithoutCountrylanguageInput',
    });
    t.field('where', { type: 'countryWhereInput' });
  },
});

export const countryUpdateToOneWithWhereWithoutCountrylanguageInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'countryUpdateToOneWithWhereWithoutCountrylanguageInput',
    definition(t) {
      t.field('where', { type: 'countryWhereInput' });
      t.nonNull.field('data', {
        type: 'countryUpdateWithoutCountrylanguageInput',
      });
    },
  });

export const countryUpdateWithoutCountrylanguageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countryUpdateWithoutCountrylanguageInput',
  definition(t) {
    t.field('Code', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Continent', {
      type: 'Enumcountry_ContinentFieldUpdateOperationsInput',
    });
    t.field('Region', { type: 'StringFieldUpdateOperationsInput' });
    t.field('SurfaceArea', { type: 'DecimalFieldUpdateOperationsInput' });
    t.field('IndepYear', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('Population', { type: 'IntFieldUpdateOperationsInput' });
    t.field('LifeExpectancy', {
      type: 'NullableDecimalFieldUpdateOperationsInput',
    });
    t.field('GNP', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('GNPOld', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('LocalName', { type: 'StringFieldUpdateOperationsInput' });
    t.field('GovernmentForm', { type: 'StringFieldUpdateOperationsInput' });
    t.field('HeadOfState', {
      type: 'NullableStringFieldUpdateOperationsInput',
    });
    t.field('Capital', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('Code2', { type: 'StringFieldUpdateOperationsInput' });
    t.field('city', { type: 'cityUpdateManyWithoutCountryNestedInput' });
  },
});

export const countryUncheckedUpdateWithoutCountrylanguageInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'countryUncheckedUpdateWithoutCountrylanguageInput',
    definition(t) {
      t.field('Code', { type: 'StringFieldUpdateOperationsInput' });
      t.field('Name', { type: 'StringFieldUpdateOperationsInput' });
      t.field('Continent', {
        type: 'Enumcountry_ContinentFieldUpdateOperationsInput',
      });
      t.field('Region', { type: 'StringFieldUpdateOperationsInput' });
      t.field('SurfaceArea', { type: 'DecimalFieldUpdateOperationsInput' });
      t.field('IndepYear', { type: 'NullableIntFieldUpdateOperationsInput' });
      t.field('Population', { type: 'IntFieldUpdateOperationsInput' });
      t.field('LifeExpectancy', {
        type: 'NullableDecimalFieldUpdateOperationsInput',
      });
      t.field('GNP', { type: 'NullableDecimalFieldUpdateOperationsInput' });
      t.field('GNPOld', { type: 'NullableDecimalFieldUpdateOperationsInput' });
      t.field('LocalName', { type: 'StringFieldUpdateOperationsInput' });
      t.field('GovernmentForm', { type: 'StringFieldUpdateOperationsInput' });
      t.field('HeadOfState', {
        type: 'NullableStringFieldUpdateOperationsInput',
      });
      t.field('Capital', { type: 'NullableIntFieldUpdateOperationsInput' });
      t.field('Code2', { type: 'StringFieldUpdateOperationsInput' });
      t.field('city', {
        type: 'cityUncheckedUpdateManyWithoutCountryNestedInput',
      });
    },
  });

export const cityCreateManyCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityCreateManyCountryInput',
  definition(t) {
    t.field('ID', { type: 'Int' });
    t.nonNull.field('Name', { type: 'String' });
    t.nonNull.field('District', { type: 'String' });
    t.field('Population', { type: 'Int' });
  },
});

export const countrylanguageCreateManyCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageCreateManyCountryInput',
  definition(t) {
    t.nonNull.field('Language', { type: 'String' });
    t.field('IsOfficial', { type: 'countrylanguage_IsOfficial' });
    t.field('Percentage', { type: 'Decimal' });
  },
});

export const cityUpdateWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityUpdateWithoutCountryInput',
  definition(t) {
    t.field('Name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('District', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Population', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const cityUncheckedUpdateWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityUncheckedUpdateWithoutCountryInput',
  definition(t) {
    t.field('ID', { type: 'IntFieldUpdateOperationsInput' });
    t.field('Name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('District', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Population', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const cityUncheckedUpdateManyWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'cityUncheckedUpdateManyWithoutCountryInput',
  definition(t) {
    t.field('ID', { type: 'IntFieldUpdateOperationsInput' });
    t.field('Name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('District', { type: 'StringFieldUpdateOperationsInput' });
    t.field('Population', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const countrylanguageUpdateWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'countrylanguageUpdateWithoutCountryInput',
  definition(t) {
    t.field('Language', { type: 'StringFieldUpdateOperationsInput' });
    t.field('IsOfficial', {
      type: 'Enumcountrylanguage_IsOfficialFieldUpdateOperationsInput',
    });
    t.field('Percentage', { type: 'DecimalFieldUpdateOperationsInput' });
  },
});

export const countrylanguageUncheckedUpdateWithoutCountryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'countrylanguageUncheckedUpdateWithoutCountryInput',
    definition(t) {
      t.field('Language', { type: 'StringFieldUpdateOperationsInput' });
      t.field('IsOfficial', {
        type: 'Enumcountrylanguage_IsOfficialFieldUpdateOperationsInput',
      });
      t.field('Percentage', { type: 'DecimalFieldUpdateOperationsInput' });
    },
  });

export const countrylanguageUncheckedUpdateManyWithoutCountryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'countrylanguageUncheckedUpdateManyWithoutCountryInput',
    definition(t) {
      t.field('Language', { type: 'StringFieldUpdateOperationsInput' });
      t.field('IsOfficial', {
        type: 'Enumcountrylanguage_IsOfficialFieldUpdateOperationsInput',
      });
      t.field('Percentage', { type: 'DecimalFieldUpdateOperationsInput' });
    },
  });

export const AggregateCity = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateCity',
  definition(t) {
    t.nullable.field('_count', { type: 'CityCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'CityAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'CitySumAggregateOutputType' });
    t.nullable.field('_min', { type: 'CityMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'CityMaxAggregateOutputType' });
  },
});

export const CityGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CityGroupByOutputType',
  definition(t) {
    t.field('ID', { type: 'Int' });
    t.field('Name', { type: 'String' });
    t.field('CountryCode', { type: 'String' });
    t.field('District', { type: 'String' });
    t.field('Population', { type: 'Int' });
    t.nullable.field('_count', { type: 'CityCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'CityAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'CitySumAggregateOutputType' });
    t.nullable.field('_min', { type: 'CityMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'CityMaxAggregateOutputType' });
  },
});

export const AggregateCountry = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateCountry',
  definition(t) {
    t.nullable.field('_count', { type: 'CountryCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'CountryAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'CountrySumAggregateOutputType' });
    t.nullable.field('_min', { type: 'CountryMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'CountryMaxAggregateOutputType' });
  },
});

export const CountryGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountryGroupByOutputType',
  definition(t) {
    t.field('Code', { type: 'String' });
    t.field('Name', { type: 'String' });
    t.field('Continent', { type: 'country_Continent' });
    t.field('Region', { type: 'String' });
    t.field('SurfaceArea', { type: 'Decimal' });
    t.nullable.field('IndepYear', { type: 'Int' });
    t.field('Population', { type: 'Int' });
    t.nullable.field('LifeExpectancy', { type: 'Decimal' });
    t.nullable.field('GNP', { type: 'Decimal' });
    t.nullable.field('GNPOld', { type: 'Decimal' });
    t.field('LocalName', { type: 'String' });
    t.field('GovernmentForm', { type: 'String' });
    t.nullable.field('HeadOfState', { type: 'String' });
    t.nullable.field('Capital', { type: 'Int' });
    t.field('Code2', { type: 'String' });
    t.nullable.field('_count', { type: 'CountryCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'CountryAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'CountrySumAggregateOutputType' });
    t.nullable.field('_min', { type: 'CountryMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'CountryMaxAggregateOutputType' });
  },
});

export const AggregateCountrylanguage = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateCountrylanguage',
  definition(t) {
    t.nullable.field('_count', {
      type: 'CountrylanguageCountAggregateOutputType',
    });
    t.nullable.field('_avg', { type: 'CountrylanguageAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'CountrylanguageSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'CountrylanguageMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'CountrylanguageMaxAggregateOutputType' });
  },
});

export const CountrylanguageGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountrylanguageGroupByOutputType',
  definition(t) {
    t.field('CountryCode', { type: 'String' });
    t.field('Language', { type: 'String' });
    t.field('IsOfficial', { type: 'countrylanguage_IsOfficial' });
    t.field('Percentage', { type: 'Decimal' });
    t.nullable.field('_count', {
      type: 'CountrylanguageCountAggregateOutputType',
    });
    t.nullable.field('_avg', { type: 'CountrylanguageAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'CountrylanguageSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'CountrylanguageMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'CountrylanguageMaxAggregateOutputType' });
  },
});

export const CityCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CityCountAggregateOutputType',
  definition(t) {
    t.field('ID', { type: 'Int' });
    t.field('Name', { type: 'Int' });
    t.field('CountryCode', { type: 'Int' });
    t.field('District', { type: 'Int' });
    t.field('Population', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const CityAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CityAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('ID', { type: 'Float' });
    t.nullable.field('Population', { type: 'Float' });
  },
});

export const CitySumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CitySumAggregateOutputType',
  definition(t) {
    t.nullable.field('ID', { type: 'Int' });
    t.nullable.field('Population', { type: 'Int' });
  },
});

export const CityMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CityMinAggregateOutputType',
  definition(t) {
    t.nullable.field('ID', { type: 'Int' });
    t.nullable.field('Name', { type: 'String' });
    t.nullable.field('CountryCode', { type: 'String' });
    t.nullable.field('District', { type: 'String' });
    t.nullable.field('Population', { type: 'Int' });
  },
});

export const CityMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CityMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('ID', { type: 'Int' });
    t.nullable.field('Name', { type: 'String' });
    t.nullable.field('CountryCode', { type: 'String' });
    t.nullable.field('District', { type: 'String' });
    t.nullable.field('Population', { type: 'Int' });
  },
});

export const CountryCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountryCountOutputType',
  definition(t) {
    t.field('city', { type: 'Int' });
    t.field('countrylanguage', { type: 'Int' });
  },
});

export const CountryCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountryCountAggregateOutputType',
  definition(t) {
    t.field('Code', { type: 'Int' });
    t.field('Name', { type: 'Int' });
    t.field('Continent', { type: 'Int' });
    t.field('Region', { type: 'Int' });
    t.field('SurfaceArea', { type: 'Int' });
    t.field('IndepYear', { type: 'Int' });
    t.field('Population', { type: 'Int' });
    t.field('LifeExpectancy', { type: 'Int' });
    t.field('GNP', { type: 'Int' });
    t.field('GNPOld', { type: 'Int' });
    t.field('LocalName', { type: 'Int' });
    t.field('GovernmentForm', { type: 'Int' });
    t.field('HeadOfState', { type: 'Int' });
    t.field('Capital', { type: 'Int' });
    t.field('Code2', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const CountryAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountryAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('SurfaceArea', { type: 'Decimal' });
    t.nullable.field('IndepYear', { type: 'Float' });
    t.nullable.field('Population', { type: 'Float' });
    t.nullable.field('LifeExpectancy', { type: 'Decimal' });
    t.nullable.field('GNP', { type: 'Decimal' });
    t.nullable.field('GNPOld', { type: 'Decimal' });
    t.nullable.field('Capital', { type: 'Float' });
  },
});

export const CountrySumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountrySumAggregateOutputType',
  definition(t) {
    t.nullable.field('SurfaceArea', { type: 'Decimal' });
    t.nullable.field('IndepYear', { type: 'Int' });
    t.nullable.field('Population', { type: 'Int' });
    t.nullable.field('LifeExpectancy', { type: 'Decimal' });
    t.nullable.field('GNP', { type: 'Decimal' });
    t.nullable.field('GNPOld', { type: 'Decimal' });
    t.nullable.field('Capital', { type: 'Int' });
  },
});

export const CountryMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountryMinAggregateOutputType',
  definition(t) {
    t.nullable.field('Code', { type: 'String' });
    t.nullable.field('Name', { type: 'String' });
    t.nullable.field('Continent', { type: 'country_Continent' });
    t.nullable.field('Region', { type: 'String' });
    t.nullable.field('SurfaceArea', { type: 'Decimal' });
    t.nullable.field('IndepYear', { type: 'Int' });
    t.nullable.field('Population', { type: 'Int' });
    t.nullable.field('LifeExpectancy', { type: 'Decimal' });
    t.nullable.field('GNP', { type: 'Decimal' });
    t.nullable.field('GNPOld', { type: 'Decimal' });
    t.nullable.field('LocalName', { type: 'String' });
    t.nullable.field('GovernmentForm', { type: 'String' });
    t.nullable.field('HeadOfState', { type: 'String' });
    t.nullable.field('Capital', { type: 'Int' });
    t.nullable.field('Code2', { type: 'String' });
  },
});

export const CountryMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountryMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('Code', { type: 'String' });
    t.nullable.field('Name', { type: 'String' });
    t.nullable.field('Continent', { type: 'country_Continent' });
    t.nullable.field('Region', { type: 'String' });
    t.nullable.field('SurfaceArea', { type: 'Decimal' });
    t.nullable.field('IndepYear', { type: 'Int' });
    t.nullable.field('Population', { type: 'Int' });
    t.nullable.field('LifeExpectancy', { type: 'Decimal' });
    t.nullable.field('GNP', { type: 'Decimal' });
    t.nullable.field('GNPOld', { type: 'Decimal' });
    t.nullable.field('LocalName', { type: 'String' });
    t.nullable.field('GovernmentForm', { type: 'String' });
    t.nullable.field('HeadOfState', { type: 'String' });
    t.nullable.field('Capital', { type: 'Int' });
    t.nullable.field('Code2', { type: 'String' });
  },
});

export const CountrylanguageCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountrylanguageCountAggregateOutputType',
  definition(t) {
    t.field('CountryCode', { type: 'Int' });
    t.field('Language', { type: 'Int' });
    t.field('IsOfficial', { type: 'Int' });
    t.field('Percentage', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const CountrylanguageAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountrylanguageAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('Percentage', { type: 'Decimal' });
  },
});

export const CountrylanguageSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountrylanguageSumAggregateOutputType',
  definition(t) {
    t.nullable.field('Percentage', { type: 'Decimal' });
  },
});

export const CountrylanguageMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountrylanguageMinAggregateOutputType',
  definition(t) {
    t.nullable.field('CountryCode', { type: 'String' });
    t.nullable.field('Language', { type: 'String' });
    t.nullable.field('IsOfficial', { type: 'countrylanguage_IsOfficial' });
    t.nullable.field('Percentage', { type: 'Decimal' });
  },
});

export const CountrylanguageMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountrylanguageMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('CountryCode', { type: 'String' });
    t.nullable.field('Language', { type: 'String' });
    t.nullable.field('IsOfficial', { type: 'countrylanguage_IsOfficial' });
    t.nullable.field('Percentage', { type: 'Decimal' });
  },
});
