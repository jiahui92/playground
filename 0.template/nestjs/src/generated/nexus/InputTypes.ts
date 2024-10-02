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
  members: ['id', 'name', 'countryCode', 'district', 'population'],
});

export const CountryScalarFieldEnum = enumType({
  name: 'CountryScalarFieldEnum',
  members: [
    'code',
    'name',
    'continent',
    'region',
    'surfaceArea',
    'indepYear',
    'population',
    'lifeExpectancy',
    'gnp',
    'gnpoId',
    'localName',
    'governmentForm',
    'headOfState',
    'capital',
    'code2',
  ],
});

export const CountryLanguageScalarFieldEnum = enumType({
  name: 'CountryLanguageScalarFieldEnum',
  members: ['countryCode', 'language', 'isOfficial', 'percentage'],
});

export const UserScalarFieldEnum = enumType({
  name: 'UserScalarFieldEnum',
  members: [
    'id',
    'username',
    'password',
    'email',
    'roles',
    'isActive',
    'createdAt',
    'updatedAt',
  ],
});

export const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
});

export const JsonNullValueInput = enumType({
  name: 'JsonNullValueInput',
  members: ['JsonNull'],
});

export const NullsOrder = enumType({
  name: 'NullsOrder',
  members: ['first', 'last'],
});

export const JsonNullValueFilter = enumType({
  name: 'JsonNullValueFilter',
  members: ['DbNull', 'JsonNull', 'AnyNull'],
});

export const CountryContinent = enumType({
  name: 'CountryContinent',
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

export const CountryLanguageIsOfficial = enumType({
  name: 'CountryLanguageIsOfficial',
  members: ['T', 'F'],
});

export const CityWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'CityWhereInput' });
    t.list.field('OR', { type: 'CityWhereInput' });
    t.list.field('NOT', { type: 'CityWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('name', { type: 'StringFilter' });
    t.field('countryCode', { type: 'StringFilter' });
    t.field('district', { type: 'StringFilter' });
    t.field('population', { type: 'IntFilter' });
    t.field('country', { type: 'CountryRelationFilter' });
  },
});

export const CityOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('countryCode', { type: 'SortOrder' });
    t.field('district', { type: 'SortOrder' });
    t.field('population', { type: 'SortOrder' });
    t.field('country', { type: 'CountryOrderByWithRelationInput' });
  },
});

export const CityWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.list.field('AND', { type: 'CityWhereInput' });
    t.list.field('OR', { type: 'CityWhereInput' });
    t.list.field('NOT', { type: 'CityWhereInput' });
    t.field('name', { type: 'StringFilter' });
    t.field('countryCode', { type: 'StringFilter' });
    t.field('district', { type: 'StringFilter' });
    t.field('population', { type: 'IntFilter' });
    t.field('country', { type: 'CountryRelationFilter' });
  },
});

export const CityOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('countryCode', { type: 'SortOrder' });
    t.field('district', { type: 'SortOrder' });
    t.field('population', { type: 'SortOrder' });
    t.field('_count', { type: 'CityCountOrderByAggregateInput' });
    t.field('_avg', { type: 'CityAvgOrderByAggregateInput' });
    t.field('_max', { type: 'CityMaxOrderByAggregateInput' });
    t.field('_min', { type: 'CityMinOrderByAggregateInput' });
    t.field('_sum', { type: 'CitySumOrderByAggregateInput' });
  },
});

export const CityScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'CityScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'CityScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'CityScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('name', { type: 'StringWithAggregatesFilter' });
    t.field('countryCode', { type: 'StringWithAggregatesFilter' });
    t.field('district', { type: 'StringWithAggregatesFilter' });
    t.field('population', { type: 'IntWithAggregatesFilter' });
  },
});

export const CountryWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'CountryWhereInput' });
    t.list.field('OR', { type: 'CountryWhereInput' });
    t.list.field('NOT', { type: 'CountryWhereInput' });
    t.field('code', { type: 'StringFilter' });
    t.field('name', { type: 'StringFilter' });
    t.field('continent', { type: 'EnumCountryContinentFilter' });
    t.field('region', { type: 'StringFilter' });
    t.field('surfaceArea', { type: 'DecimalFilter' });
    t.field('indepYear', { type: 'IntNullableFilter' });
    t.field('population', { type: 'IntFilter' });
    t.field('lifeExpectancy', { type: 'DecimalNullableFilter' });
    t.field('gnp', { type: 'DecimalNullableFilter' });
    t.field('gnpoId', { type: 'DecimalNullableFilter' });
    t.field('localName', { type: 'StringFilter' });
    t.field('governmentForm', { type: 'StringFilter' });
    t.field('headOfState', { type: 'StringNullableFilter' });
    t.field('capital', { type: 'IntNullableFilter' });
    t.field('code2', { type: 'StringFilter' });
    t.field('city', { type: 'CityListRelationFilter' });
    t.field('countryLanguage', { type: 'CountryLanguageListRelationFilter' });
  },
});

export const CountryOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryOrderByWithRelationInput',
  definition(t) {
    t.field('code', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('continent', { type: 'SortOrder' });
    t.field('region', { type: 'SortOrder' });
    t.field('surfaceArea', { type: 'SortOrder' });
    t.field('indepYear', { type: 'SortOrderInput' });
    t.field('population', { type: 'SortOrder' });
    t.field('lifeExpectancy', { type: 'SortOrderInput' });
    t.field('gnp', { type: 'SortOrderInput' });
    t.field('gnpoId', { type: 'SortOrderInput' });
    t.field('localName', { type: 'SortOrder' });
    t.field('governmentForm', { type: 'SortOrder' });
    t.field('headOfState', { type: 'SortOrderInput' });
    t.field('capital', { type: 'SortOrderInput' });
    t.field('code2', { type: 'SortOrder' });
    t.field('city', { type: 'CityOrderByRelationAggregateInput' });
    t.field('countryLanguage', {
      type: 'CountryLanguageOrderByRelationAggregateInput',
    });
  },
});

export const CountryWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryWhereUniqueInput',
  definition(t) {
    t.field('code', { type: 'String' });
    t.list.field('AND', { type: 'CountryWhereInput' });
    t.list.field('OR', { type: 'CountryWhereInput' });
    t.list.field('NOT', { type: 'CountryWhereInput' });
    t.field('name', { type: 'StringFilter' });
    t.field('continent', { type: 'EnumCountryContinentFilter' });
    t.field('region', { type: 'StringFilter' });
    t.field('surfaceArea', { type: 'DecimalFilter' });
    t.field('indepYear', { type: 'IntNullableFilter' });
    t.field('population', { type: 'IntFilter' });
    t.field('lifeExpectancy', { type: 'DecimalNullableFilter' });
    t.field('gnp', { type: 'DecimalNullableFilter' });
    t.field('gnpoId', { type: 'DecimalNullableFilter' });
    t.field('localName', { type: 'StringFilter' });
    t.field('governmentForm', { type: 'StringFilter' });
    t.field('headOfState', { type: 'StringNullableFilter' });
    t.field('capital', { type: 'IntNullableFilter' });
    t.field('code2', { type: 'StringFilter' });
    t.field('city', { type: 'CityListRelationFilter' });
    t.field('countryLanguage', { type: 'CountryLanguageListRelationFilter' });
  },
});

export const CountryOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryOrderByWithAggregationInput',
  definition(t) {
    t.field('code', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('continent', { type: 'SortOrder' });
    t.field('region', { type: 'SortOrder' });
    t.field('surfaceArea', { type: 'SortOrder' });
    t.field('indepYear', { type: 'SortOrderInput' });
    t.field('population', { type: 'SortOrder' });
    t.field('lifeExpectancy', { type: 'SortOrderInput' });
    t.field('gnp', { type: 'SortOrderInput' });
    t.field('gnpoId', { type: 'SortOrderInput' });
    t.field('localName', { type: 'SortOrder' });
    t.field('governmentForm', { type: 'SortOrder' });
    t.field('headOfState', { type: 'SortOrderInput' });
    t.field('capital', { type: 'SortOrderInput' });
    t.field('code2', { type: 'SortOrder' });
    t.field('_count', { type: 'CountryCountOrderByAggregateInput' });
    t.field('_avg', { type: 'CountryAvgOrderByAggregateInput' });
    t.field('_max', { type: 'CountryMaxOrderByAggregateInput' });
    t.field('_min', { type: 'CountryMinOrderByAggregateInput' });
    t.field('_sum', { type: 'CountrySumOrderByAggregateInput' });
  },
});

export const CountryScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'CountryScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'CountryScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'CountryScalarWhereWithAggregatesInput' });
    t.field('code', { type: 'StringWithAggregatesFilter' });
    t.field('name', { type: 'StringWithAggregatesFilter' });
    t.field('continent', { type: 'EnumCountryContinentWithAggregatesFilter' });
    t.field('region', { type: 'StringWithAggregatesFilter' });
    t.field('surfaceArea', { type: 'DecimalWithAggregatesFilter' });
    t.field('indepYear', { type: 'IntNullableWithAggregatesFilter' });
    t.field('population', { type: 'IntWithAggregatesFilter' });
    t.field('lifeExpectancy', { type: 'DecimalNullableWithAggregatesFilter' });
    t.field('gnp', { type: 'DecimalNullableWithAggregatesFilter' });
    t.field('gnpoId', { type: 'DecimalNullableWithAggregatesFilter' });
    t.field('localName', { type: 'StringWithAggregatesFilter' });
    t.field('governmentForm', { type: 'StringWithAggregatesFilter' });
    t.field('headOfState', { type: 'StringNullableWithAggregatesFilter' });
    t.field('capital', { type: 'IntNullableWithAggregatesFilter' });
    t.field('code2', { type: 'StringWithAggregatesFilter' });
  },
});

export const CountryLanguageWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'CountryLanguageWhereInput' });
    t.list.field('OR', { type: 'CountryLanguageWhereInput' });
    t.list.field('NOT', { type: 'CountryLanguageWhereInput' });
    t.field('countryCode', { type: 'StringFilter' });
    t.field('language', { type: 'StringFilter' });
    t.field('isOfficial', { type: 'EnumCountryLanguageIsOfficialFilter' });
    t.field('percentage', { type: 'DecimalFilter' });
    t.field('country', { type: 'CountryRelationFilter' });
  },
});

export const CountryLanguageOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageOrderByWithRelationInput',
  definition(t) {
    t.field('countryCode', { type: 'SortOrder' });
    t.field('language', { type: 'SortOrder' });
    t.field('isOfficial', { type: 'SortOrder' });
    t.field('percentage', { type: 'SortOrder' });
    t.field('country', { type: 'CountryOrderByWithRelationInput' });
  },
});

export const CountryLanguageWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageWhereUniqueInput',
  definition(t) {
    t.field('countryCode_language', {
      type: 'CountryLanguageCountryCodeLanguageCompoundUniqueInput',
    });
    t.list.field('AND', { type: 'CountryLanguageWhereInput' });
    t.list.field('OR', { type: 'CountryLanguageWhereInput' });
    t.list.field('NOT', { type: 'CountryLanguageWhereInput' });
    t.field('countryCode', { type: 'StringFilter' });
    t.field('language', { type: 'StringFilter' });
    t.field('isOfficial', { type: 'EnumCountryLanguageIsOfficialFilter' });
    t.field('percentage', { type: 'DecimalFilter' });
    t.field('country', { type: 'CountryRelationFilter' });
  },
});

export const CountryLanguageOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageOrderByWithAggregationInput',
  definition(t) {
    t.field('countryCode', { type: 'SortOrder' });
    t.field('language', { type: 'SortOrder' });
    t.field('isOfficial', { type: 'SortOrder' });
    t.field('percentage', { type: 'SortOrder' });
    t.field('_count', { type: 'CountryLanguageCountOrderByAggregateInput' });
    t.field('_avg', { type: 'CountryLanguageAvgOrderByAggregateInput' });
    t.field('_max', { type: 'CountryLanguageMaxOrderByAggregateInput' });
    t.field('_min', { type: 'CountryLanguageMinOrderByAggregateInput' });
    t.field('_sum', { type: 'CountryLanguageSumOrderByAggregateInput' });
  },
});

export const CountryLanguageScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', {
      type: 'CountryLanguageScalarWhereWithAggregatesInput',
    });
    t.list.field('OR', {
      type: 'CountryLanguageScalarWhereWithAggregatesInput',
    });
    t.list.field('NOT', {
      type: 'CountryLanguageScalarWhereWithAggregatesInput',
    });
    t.field('countryCode', { type: 'StringWithAggregatesFilter' });
    t.field('language', { type: 'StringWithAggregatesFilter' });
    t.field('isOfficial', {
      type: 'EnumCountryLanguageIsOfficialWithAggregatesFilter',
    });
    t.field('percentage', { type: 'DecimalWithAggregatesFilter' });
  },
});

export const UserWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserWhereInput' });
    t.list.field('OR', { type: 'UserWhereInput' });
    t.list.field('NOT', { type: 'UserWhereInput' });
    t.field('id', { type: 'StringFilter' });
    t.field('username', { type: 'StringFilter' });
    t.field('password', { type: 'StringFilter' });
    t.field('email', { type: 'StringFilter' });
    t.field('roles', { type: 'JsonFilter' });
    t.field('isActive', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeNullableFilter' });
  },
});

export const UserOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('username', { type: 'SortOrder' });
    t.field('password', { type: 'SortOrder' });
    t.field('email', { type: 'SortOrder' });
    t.field('roles', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrderInput' });
  },
});

export const UserWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' });
    t.field('username', { type: 'String' });
    t.field('email', { type: 'String' });
    t.list.field('AND', { type: 'UserWhereInput' });
    t.list.field('OR', { type: 'UserWhereInput' });
    t.list.field('NOT', { type: 'UserWhereInput' });
    t.field('password', { type: 'StringFilter' });
    t.field('roles', { type: 'JsonFilter' });
    t.field('isActive', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeNullableFilter' });
  },
});

export const UserOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('username', { type: 'SortOrder' });
    t.field('password', { type: 'SortOrder' });
    t.field('email', { type: 'SortOrder' });
    t.field('roles', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrderInput' });
    t.field('_count', { type: 'UserCountOrderByAggregateInput' });
    t.field('_max', { type: 'UserMaxOrderByAggregateInput' });
    t.field('_min', { type: 'UserMinOrderByAggregateInput' });
  },
});

export const UserScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'UserScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'UserScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'UserScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'StringWithAggregatesFilter' });
    t.field('username', { type: 'StringWithAggregatesFilter' });
    t.field('password', { type: 'StringWithAggregatesFilter' });
    t.field('email', { type: 'StringWithAggregatesFilter' });
    t.field('roles', { type: 'JsonWithAggregatesFilter' });
    t.field('isActive', { type: 'BoolWithAggregatesFilter' });
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('updatedAt', { type: 'DateTimeNullableWithAggregatesFilter' });
  },
});

export const CityCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityCreateInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('district', { type: 'String' });
    t.field('population', { type: 'Int' });
    t.nonNull.field('country', {
      type: 'CountryCreateNestedOneWithoutCityInput',
    });
  },
});

export const CityUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('countryCode', { type: 'String' });
    t.nonNull.field('district', { type: 'String' });
    t.field('population', { type: 'Int' });
  },
});

export const CityUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityUpdateInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('district', { type: 'StringFieldUpdateOperationsInput' });
    t.field('population', { type: 'IntFieldUpdateOperationsInput' });
    t.field('country', {
      type: 'CountryUpdateOneRequiredWithoutCityNestedInput',
    });
  },
});

export const CityUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('countryCode', { type: 'StringFieldUpdateOperationsInput' });
    t.field('district', { type: 'StringFieldUpdateOperationsInput' });
    t.field('population', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const CityCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('countryCode', { type: 'String' });
    t.nonNull.field('district', { type: 'String' });
    t.field('population', { type: 'Int' });
  },
});

export const CityUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityUpdateManyMutationInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('district', { type: 'StringFieldUpdateOperationsInput' });
    t.field('population', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const CityUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('countryCode', { type: 'StringFieldUpdateOperationsInput' });
    t.field('district', { type: 'StringFieldUpdateOperationsInput' });
    t.field('population', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const CountryCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryCreateInput',
  definition(t) {
    t.nonNull.field('code', { type: 'String' });
    t.nonNull.field('name', { type: 'String' });
    t.field('continent', { type: 'CountryContinent' });
    t.nonNull.field('region', { type: 'String' });
    t.field('surfaceArea', { type: 'Decimal' });
    t.field('indepYear', { type: 'Int' });
    t.field('population', { type: 'Int' });
    t.field('lifeExpectancy', { type: 'Decimal' });
    t.field('gnp', { type: 'Decimal' });
    t.field('gnpoId', { type: 'Decimal' });
    t.nonNull.field('localName', { type: 'String' });
    t.nonNull.field('governmentForm', { type: 'String' });
    t.field('headOfState', { type: 'String' });
    t.field('capital', { type: 'Int' });
    t.nonNull.field('code2', { type: 'String' });
    t.field('city', { type: 'CityCreateNestedManyWithoutCountryInput' });
    t.field('countryLanguage', {
      type: 'CountryLanguageCreateNestedManyWithoutCountryInput',
    });
  },
});

export const CountryUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryUncheckedCreateInput',
  definition(t) {
    t.nonNull.field('code', { type: 'String' });
    t.nonNull.field('name', { type: 'String' });
    t.field('continent', { type: 'CountryContinent' });
    t.nonNull.field('region', { type: 'String' });
    t.field('surfaceArea', { type: 'Decimal' });
    t.field('indepYear', { type: 'Int' });
    t.field('population', { type: 'Int' });
    t.field('lifeExpectancy', { type: 'Decimal' });
    t.field('gnp', { type: 'Decimal' });
    t.field('gnpoId', { type: 'Decimal' });
    t.nonNull.field('localName', { type: 'String' });
    t.nonNull.field('governmentForm', { type: 'String' });
    t.field('headOfState', { type: 'String' });
    t.field('capital', { type: 'Int' });
    t.nonNull.field('code2', { type: 'String' });
    t.field('city', {
      type: 'CityUncheckedCreateNestedManyWithoutCountryInput',
    });
    t.field('countryLanguage', {
      type: 'CountryLanguageUncheckedCreateNestedManyWithoutCountryInput',
    });
  },
});

export const CountryUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryUpdateInput',
  definition(t) {
    t.field('code', { type: 'StringFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('continent', {
      type: 'EnumCountryContinentFieldUpdateOperationsInput',
    });
    t.field('region', { type: 'StringFieldUpdateOperationsInput' });
    t.field('surfaceArea', { type: 'DecimalFieldUpdateOperationsInput' });
    t.field('indepYear', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('population', { type: 'IntFieldUpdateOperationsInput' });
    t.field('lifeExpectancy', {
      type: 'NullableDecimalFieldUpdateOperationsInput',
    });
    t.field('gnp', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('gnpoId', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('localName', { type: 'StringFieldUpdateOperationsInput' });
    t.field('governmentForm', { type: 'StringFieldUpdateOperationsInput' });
    t.field('headOfState', {
      type: 'NullableStringFieldUpdateOperationsInput',
    });
    t.field('capital', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('code2', { type: 'StringFieldUpdateOperationsInput' });
    t.field('city', { type: 'CityUpdateManyWithoutCountryNestedInput' });
    t.field('countryLanguage', {
      type: 'CountryLanguageUpdateManyWithoutCountryNestedInput',
    });
  },
});

export const CountryUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryUncheckedUpdateInput',
  definition(t) {
    t.field('code', { type: 'StringFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('continent', {
      type: 'EnumCountryContinentFieldUpdateOperationsInput',
    });
    t.field('region', { type: 'StringFieldUpdateOperationsInput' });
    t.field('surfaceArea', { type: 'DecimalFieldUpdateOperationsInput' });
    t.field('indepYear', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('population', { type: 'IntFieldUpdateOperationsInput' });
    t.field('lifeExpectancy', {
      type: 'NullableDecimalFieldUpdateOperationsInput',
    });
    t.field('gnp', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('gnpoId', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('localName', { type: 'StringFieldUpdateOperationsInput' });
    t.field('governmentForm', { type: 'StringFieldUpdateOperationsInput' });
    t.field('headOfState', {
      type: 'NullableStringFieldUpdateOperationsInput',
    });
    t.field('capital', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('code2', { type: 'StringFieldUpdateOperationsInput' });
    t.field('city', {
      type: 'CityUncheckedUpdateManyWithoutCountryNestedInput',
    });
    t.field('countryLanguage', {
      type: 'CountryLanguageUncheckedUpdateManyWithoutCountryNestedInput',
    });
  },
});

export const CountryCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryCreateManyInput',
  definition(t) {
    t.nonNull.field('code', { type: 'String' });
    t.nonNull.field('name', { type: 'String' });
    t.field('continent', { type: 'CountryContinent' });
    t.nonNull.field('region', { type: 'String' });
    t.field('surfaceArea', { type: 'Decimal' });
    t.field('indepYear', { type: 'Int' });
    t.field('population', { type: 'Int' });
    t.field('lifeExpectancy', { type: 'Decimal' });
    t.field('gnp', { type: 'Decimal' });
    t.field('gnpoId', { type: 'Decimal' });
    t.nonNull.field('localName', { type: 'String' });
    t.nonNull.field('governmentForm', { type: 'String' });
    t.field('headOfState', { type: 'String' });
    t.field('capital', { type: 'Int' });
    t.nonNull.field('code2', { type: 'String' });
  },
});

export const CountryUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryUpdateManyMutationInput',
  definition(t) {
    t.field('code', { type: 'StringFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('continent', {
      type: 'EnumCountryContinentFieldUpdateOperationsInput',
    });
    t.field('region', { type: 'StringFieldUpdateOperationsInput' });
    t.field('surfaceArea', { type: 'DecimalFieldUpdateOperationsInput' });
    t.field('indepYear', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('population', { type: 'IntFieldUpdateOperationsInput' });
    t.field('lifeExpectancy', {
      type: 'NullableDecimalFieldUpdateOperationsInput',
    });
    t.field('gnp', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('gnpoId', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('localName', { type: 'StringFieldUpdateOperationsInput' });
    t.field('governmentForm', { type: 'StringFieldUpdateOperationsInput' });
    t.field('headOfState', {
      type: 'NullableStringFieldUpdateOperationsInput',
    });
    t.field('capital', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('code2', { type: 'StringFieldUpdateOperationsInput' });
  },
});

export const CountryUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryUncheckedUpdateManyInput',
  definition(t) {
    t.field('code', { type: 'StringFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('continent', {
      type: 'EnumCountryContinentFieldUpdateOperationsInput',
    });
    t.field('region', { type: 'StringFieldUpdateOperationsInput' });
    t.field('surfaceArea', { type: 'DecimalFieldUpdateOperationsInput' });
    t.field('indepYear', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('population', { type: 'IntFieldUpdateOperationsInput' });
    t.field('lifeExpectancy', {
      type: 'NullableDecimalFieldUpdateOperationsInput',
    });
    t.field('gnp', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('gnpoId', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('localName', { type: 'StringFieldUpdateOperationsInput' });
    t.field('governmentForm', { type: 'StringFieldUpdateOperationsInput' });
    t.field('headOfState', {
      type: 'NullableStringFieldUpdateOperationsInput',
    });
    t.field('capital', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('code2', { type: 'StringFieldUpdateOperationsInput' });
  },
});

export const CountryLanguageCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageCreateInput',
  definition(t) {
    t.nonNull.field('language', { type: 'String' });
    t.field('isOfficial', { type: 'CountryLanguageIsOfficial' });
    t.field('percentage', { type: 'Decimal' });
    t.nonNull.field('country', {
      type: 'CountryCreateNestedOneWithoutCountryLanguageInput',
    });
  },
});

export const CountryLanguageUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageUncheckedCreateInput',
  definition(t) {
    t.nonNull.field('countryCode', { type: 'String' });
    t.nonNull.field('language', { type: 'String' });
    t.field('isOfficial', { type: 'CountryLanguageIsOfficial' });
    t.field('percentage', { type: 'Decimal' });
  },
});

export const CountryLanguageUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageUpdateInput',
  definition(t) {
    t.field('language', { type: 'StringFieldUpdateOperationsInput' });
    t.field('isOfficial', {
      type: 'EnumCountryLanguageIsOfficialFieldUpdateOperationsInput',
    });
    t.field('percentage', { type: 'DecimalFieldUpdateOperationsInput' });
    t.field('country', {
      type: 'CountryUpdateOneRequiredWithoutCountryLanguageNestedInput',
    });
  },
});

export const CountryLanguageUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageUncheckedUpdateInput',
  definition(t) {
    t.field('countryCode', { type: 'StringFieldUpdateOperationsInput' });
    t.field('language', { type: 'StringFieldUpdateOperationsInput' });
    t.field('isOfficial', {
      type: 'EnumCountryLanguageIsOfficialFieldUpdateOperationsInput',
    });
    t.field('percentage', { type: 'DecimalFieldUpdateOperationsInput' });
  },
});

export const CountryLanguageCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageCreateManyInput',
  definition(t) {
    t.nonNull.field('countryCode', { type: 'String' });
    t.nonNull.field('language', { type: 'String' });
    t.field('isOfficial', { type: 'CountryLanguageIsOfficial' });
    t.field('percentage', { type: 'Decimal' });
  },
});

export const CountryLanguageUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageUpdateManyMutationInput',
  definition(t) {
    t.field('language', { type: 'StringFieldUpdateOperationsInput' });
    t.field('isOfficial', {
      type: 'EnumCountryLanguageIsOfficialFieldUpdateOperationsInput',
    });
    t.field('percentage', { type: 'DecimalFieldUpdateOperationsInput' });
  },
});

export const CountryLanguageUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageUncheckedUpdateManyInput',
  definition(t) {
    t.field('countryCode', { type: 'StringFieldUpdateOperationsInput' });
    t.field('language', { type: 'StringFieldUpdateOperationsInput' });
    t.field('isOfficial', {
      type: 'EnumCountryLanguageIsOfficialFieldUpdateOperationsInput',
    });
    t.field('percentage', { type: 'DecimalFieldUpdateOperationsInput' });
  },
});

export const UserCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('roles', { type: 'Json' });
    t.field('isActive', { type: 'Boolean' });
    t.nonNull.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const UserUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('roles', { type: 'Json' });
    t.field('isActive', { type: 'Boolean' });
    t.nonNull.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const UserUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('roles', { type: 'Json' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    });
  },
});

export const UserUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('roles', { type: 'Json' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    });
  },
});

export const UserCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateManyInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('roles', { type: 'Json' });
    t.field('isActive', { type: 'Boolean' });
    t.nonNull.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const UserUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('roles', { type: 'Json' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    });
  },
});

export const UserUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('roles', { type: 'Json' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', {
      type: 'NullableDateTimeFieldUpdateOperationsInput',
    });
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
    t.field('is', { type: 'CountryWhereInput' });
    t.field('isNot', { type: 'CountryWhereInput' });
  },
});

export const CityCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('countryCode', { type: 'SortOrder' });
    t.field('district', { type: 'SortOrder' });
    t.field('population', { type: 'SortOrder' });
  },
});

export const CityAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('population', { type: 'SortOrder' });
  },
});

export const CityMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('countryCode', { type: 'SortOrder' });
    t.field('district', { type: 'SortOrder' });
    t.field('population', { type: 'SortOrder' });
  },
});

export const CityMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('countryCode', { type: 'SortOrder' });
    t.field('district', { type: 'SortOrder' });
    t.field('population', { type: 'SortOrder' });
  },
});

export const CitySumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CitySumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('population', { type: 'SortOrder' });
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

export const EnumCountryContinentFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumCountryContinentFilter',
  definition(t) {
    t.field('equals', { type: 'CountryContinent' });
    t.list.field('in', { type: 'CountryContinent' });
    t.list.field('notIn', { type: 'CountryContinent' });
    t.field('not', { type: 'NestedEnumCountryContinentFilter' });
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
    t.field('every', { type: 'CityWhereInput' });
    t.field('some', { type: 'CityWhereInput' });
    t.field('none', { type: 'CityWhereInput' });
  },
});

export const CountryLanguageListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageListRelationFilter',
  definition(t) {
    t.field('every', { type: 'CountryLanguageWhereInput' });
    t.field('some', { type: 'CountryLanguageWhereInput' });
    t.field('none', { type: 'CountryLanguageWhereInput' });
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

export const CityOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' });
  },
});

export const CountryLanguageOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' });
  },
});

export const CountryCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryCountOrderByAggregateInput',
  definition(t) {
    t.field('code', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('continent', { type: 'SortOrder' });
    t.field('region', { type: 'SortOrder' });
    t.field('surfaceArea', { type: 'SortOrder' });
    t.field('indepYear', { type: 'SortOrder' });
    t.field('population', { type: 'SortOrder' });
    t.field('lifeExpectancy', { type: 'SortOrder' });
    t.field('gnp', { type: 'SortOrder' });
    t.field('gnpoId', { type: 'SortOrder' });
    t.field('localName', { type: 'SortOrder' });
    t.field('governmentForm', { type: 'SortOrder' });
    t.field('headOfState', { type: 'SortOrder' });
    t.field('capital', { type: 'SortOrder' });
    t.field('code2', { type: 'SortOrder' });
  },
});

export const CountryAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryAvgOrderByAggregateInput',
  definition(t) {
    t.field('surfaceArea', { type: 'SortOrder' });
    t.field('indepYear', { type: 'SortOrder' });
    t.field('population', { type: 'SortOrder' });
    t.field('lifeExpectancy', { type: 'SortOrder' });
    t.field('gnp', { type: 'SortOrder' });
    t.field('gnpoId', { type: 'SortOrder' });
    t.field('capital', { type: 'SortOrder' });
  },
});

export const CountryMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryMaxOrderByAggregateInput',
  definition(t) {
    t.field('code', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('continent', { type: 'SortOrder' });
    t.field('region', { type: 'SortOrder' });
    t.field('surfaceArea', { type: 'SortOrder' });
    t.field('indepYear', { type: 'SortOrder' });
    t.field('population', { type: 'SortOrder' });
    t.field('lifeExpectancy', { type: 'SortOrder' });
    t.field('gnp', { type: 'SortOrder' });
    t.field('gnpoId', { type: 'SortOrder' });
    t.field('localName', { type: 'SortOrder' });
    t.field('governmentForm', { type: 'SortOrder' });
    t.field('headOfState', { type: 'SortOrder' });
    t.field('capital', { type: 'SortOrder' });
    t.field('code2', { type: 'SortOrder' });
  },
});

export const CountryMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryMinOrderByAggregateInput',
  definition(t) {
    t.field('code', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('continent', { type: 'SortOrder' });
    t.field('region', { type: 'SortOrder' });
    t.field('surfaceArea', { type: 'SortOrder' });
    t.field('indepYear', { type: 'SortOrder' });
    t.field('population', { type: 'SortOrder' });
    t.field('lifeExpectancy', { type: 'SortOrder' });
    t.field('gnp', { type: 'SortOrder' });
    t.field('gnpoId', { type: 'SortOrder' });
    t.field('localName', { type: 'SortOrder' });
    t.field('governmentForm', { type: 'SortOrder' });
    t.field('headOfState', { type: 'SortOrder' });
    t.field('capital', { type: 'SortOrder' });
    t.field('code2', { type: 'SortOrder' });
  },
});

export const CountrySumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountrySumOrderByAggregateInput',
  definition(t) {
    t.field('surfaceArea', { type: 'SortOrder' });
    t.field('indepYear', { type: 'SortOrder' });
    t.field('population', { type: 'SortOrder' });
    t.field('lifeExpectancy', { type: 'SortOrder' });
    t.field('gnp', { type: 'SortOrder' });
    t.field('gnpoId', { type: 'SortOrder' });
    t.field('capital', { type: 'SortOrder' });
  },
});

export const EnumCountryContinentWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumCountryContinentWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'CountryContinent' });
    t.list.field('in', { type: 'CountryContinent' });
    t.list.field('notIn', { type: 'CountryContinent' });
    t.field('not', { type: 'NestedEnumCountryContinentWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedEnumCountryContinentFilter' });
    t.field('_max', { type: 'NestedEnumCountryContinentFilter' });
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

export const EnumCountryLanguageIsOfficialFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumCountryLanguageIsOfficialFilter',
  definition(t) {
    t.field('equals', { type: 'CountryLanguageIsOfficial' });
    t.list.field('in', { type: 'CountryLanguageIsOfficial' });
    t.list.field('notIn', { type: 'CountryLanguageIsOfficial' });
    t.field('not', { type: 'NestedEnumCountryLanguageIsOfficialFilter' });
  },
});

export const CountryLanguageCountryCodeLanguageCompoundUniqueInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CountryLanguageCountryCodeLanguageCompoundUniqueInput',
    definition(t) {
      t.nonNull.field('countryCode', { type: 'String' });
      t.nonNull.field('language', { type: 'String' });
    },
  });

export const CountryLanguageCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageCountOrderByAggregateInput',
  definition(t) {
    t.field('countryCode', { type: 'SortOrder' });
    t.field('language', { type: 'SortOrder' });
    t.field('isOfficial', { type: 'SortOrder' });
    t.field('percentage', { type: 'SortOrder' });
  },
});

export const CountryLanguageAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageAvgOrderByAggregateInput',
  definition(t) {
    t.field('percentage', { type: 'SortOrder' });
  },
});

export const CountryLanguageMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageMaxOrderByAggregateInput',
  definition(t) {
    t.field('countryCode', { type: 'SortOrder' });
    t.field('language', { type: 'SortOrder' });
    t.field('isOfficial', { type: 'SortOrder' });
    t.field('percentage', { type: 'SortOrder' });
  },
});

export const CountryLanguageMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageMinOrderByAggregateInput',
  definition(t) {
    t.field('countryCode', { type: 'SortOrder' });
    t.field('language', { type: 'SortOrder' });
    t.field('isOfficial', { type: 'SortOrder' });
    t.field('percentage', { type: 'SortOrder' });
  },
});

export const CountryLanguageSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageSumOrderByAggregateInput',
  definition(t) {
    t.field('percentage', { type: 'SortOrder' });
  },
});

export const EnumCountryLanguageIsOfficialWithAggregatesFilter =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'EnumCountryLanguageIsOfficialWithAggregatesFilter',
    definition(t) {
      t.field('equals', { type: 'CountryLanguageIsOfficial' });
      t.list.field('in', { type: 'CountryLanguageIsOfficial' });
      t.list.field('notIn', { type: 'CountryLanguageIsOfficial' });
      t.field('not', {
        type: 'NestedEnumCountryLanguageIsOfficialWithAggregatesFilter',
      });
      t.field('_count', { type: 'NestedIntFilter' });
      t.field('_min', { type: 'NestedEnumCountryLanguageIsOfficialFilter' });
      t.field('_max', { type: 'NestedEnumCountryLanguageIsOfficialFilter' });
    },
  });

export const JsonFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'JsonFilter',
  definition(t) {
    t.field('equals', { type: 'Json' });
    t.field('path', { type: 'String' });
    t.field('string_contains', { type: 'String' });
    t.field('string_starts_with', { type: 'String' });
    t.field('string_ends_with', { type: 'String' });
    t.field('array_contains', { type: 'Json' });
    t.field('array_starts_with', { type: 'Json' });
    t.field('array_ends_with', { type: 'Json' });
    t.field('lt', { type: 'Json' });
    t.field('lte', { type: 'Json' });
    t.field('gt', { type: 'Json' });
    t.field('gte', { type: 'Json' });
    t.field('not', { type: 'Json' });
  },
});

export const BoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' });
    t.field('not', { type: 'NestedBoolFilter' });
  },
});

export const DateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' });
    t.list.field('in', { type: 'DateTime' });
    t.list.field('notIn', { type: 'DateTime' });
    t.field('lt', { type: 'DateTime' });
    t.field('lte', { type: 'DateTime' });
    t.field('gt', { type: 'DateTime' });
    t.field('gte', { type: 'DateTime' });
    t.field('not', { type: 'NestedDateTimeFilter' });
  },
});

export const DateTimeNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeNullableFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' });
    t.list.field('in', { type: 'DateTime' });
    t.list.field('notIn', { type: 'DateTime' });
    t.field('lt', { type: 'DateTime' });
    t.field('lte', { type: 'DateTime' });
    t.field('gt', { type: 'DateTime' });
    t.field('gte', { type: 'DateTime' });
    t.field('not', { type: 'NestedDateTimeNullableFilter' });
  },
});

export const UserCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('username', { type: 'SortOrder' });
    t.field('password', { type: 'SortOrder' });
    t.field('email', { type: 'SortOrder' });
    t.field('roles', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
  },
});

export const UserMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('username', { type: 'SortOrder' });
    t.field('password', { type: 'SortOrder' });
    t.field('email', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
  },
});

export const UserMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('username', { type: 'SortOrder' });
    t.field('password', { type: 'SortOrder' });
    t.field('email', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
  },
});

export const JsonWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'JsonWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Json' });
    t.field('path', { type: 'String' });
    t.field('string_contains', { type: 'String' });
    t.field('string_starts_with', { type: 'String' });
    t.field('string_ends_with', { type: 'String' });
    t.field('array_contains', { type: 'Json' });
    t.field('array_starts_with', { type: 'Json' });
    t.field('array_ends_with', { type: 'Json' });
    t.field('lt', { type: 'Json' });
    t.field('lte', { type: 'Json' });
    t.field('gt', { type: 'Json' });
    t.field('gte', { type: 'Json' });
    t.field('not', { type: 'Json' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedJsonFilter' });
    t.field('_max', { type: 'NestedJsonFilter' });
  },
});

export const BoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' });
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedBoolFilter' });
    t.field('_max', { type: 'NestedBoolFilter' });
  },
});

export const DateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' });
    t.list.field('in', { type: 'DateTime' });
    t.list.field('notIn', { type: 'DateTime' });
    t.field('lt', { type: 'DateTime' });
    t.field('lte', { type: 'DateTime' });
    t.field('gt', { type: 'DateTime' });
    t.field('gte', { type: 'DateTime' });
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedDateTimeFilter' });
    t.field('_max', { type: 'NestedDateTimeFilter' });
  },
});

export const DateTimeNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' });
    t.list.field('in', { type: 'DateTime' });
    t.list.field('notIn', { type: 'DateTime' });
    t.field('lt', { type: 'DateTime' });
    t.field('lte', { type: 'DateTime' });
    t.field('gt', { type: 'DateTime' });
    t.field('gte', { type: 'DateTime' });
    t.field('not', { type: 'NestedDateTimeNullableWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntNullableFilter' });
    t.field('_min', { type: 'NestedDateTimeNullableFilter' });
    t.field('_max', { type: 'NestedDateTimeNullableFilter' });
  },
});

export const CountryCreateNestedOneWithoutCityInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryCreateNestedOneWithoutCityInput',
  definition(t) {
    t.field('create', { type: 'CountryCreateWithoutCityInput' });
    t.field('connectOrCreate', {
      type: 'CountryCreateOrConnectWithoutCityInput',
    });
    t.field('connect', { type: 'CountryWhereUniqueInput' });
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

export const CountryUpdateOneRequiredWithoutCityNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryUpdateOneRequiredWithoutCityNestedInput',
  definition(t) {
    t.field('create', { type: 'CountryCreateWithoutCityInput' });
    t.field('connectOrCreate', {
      type: 'CountryCreateOrConnectWithoutCityInput',
    });
    t.field('upsert', { type: 'CountryUpsertWithoutCityInput' });
    t.field('connect', { type: 'CountryWhereUniqueInput' });
    t.field('update', { type: 'CountryUpdateToOneWithWhereWithoutCityInput' });
  },
});

export const CityCreateNestedManyWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityCreateNestedManyWithoutCountryInput',
  definition(t) {
    t.list.field('create', { type: 'CityCreateWithoutCountryInput' });
    t.list.field('connectOrCreate', {
      type: 'CityCreateOrConnectWithoutCountryInput',
    });
    t.field('createMany', { type: 'CityCreateManyCountryInputEnvelope' });
    t.list.field('connect', { type: 'CityWhereUniqueInput' });
  },
});

export const CountryLanguageCreateNestedManyWithoutCountryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CountryLanguageCreateNestedManyWithoutCountryInput',
    definition(t) {
      t.list.field('create', {
        type: 'CountryLanguageCreateWithoutCountryInput',
      });
      t.list.field('connectOrCreate', {
        type: 'CountryLanguageCreateOrConnectWithoutCountryInput',
      });
      t.field('createMany', {
        type: 'CountryLanguageCreateManyCountryInputEnvelope',
      });
      t.list.field('connect', { type: 'CountryLanguageWhereUniqueInput' });
    },
  });

export const CityUncheckedCreateNestedManyWithoutCountryInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'CityUncheckedCreateNestedManyWithoutCountryInput',
    definition(t) {
      t.list.field('create', { type: 'CityCreateWithoutCountryInput' });
      t.list.field('connectOrCreate', {
        type: 'CityCreateOrConnectWithoutCountryInput',
      });
      t.field('createMany', { type: 'CityCreateManyCountryInputEnvelope' });
      t.list.field('connect', { type: 'CityWhereUniqueInput' });
    },
  },
);

export const CountryLanguageUncheckedCreateNestedManyWithoutCountryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CountryLanguageUncheckedCreateNestedManyWithoutCountryInput',
    definition(t) {
      t.list.field('create', {
        type: 'CountryLanguageCreateWithoutCountryInput',
      });
      t.list.field('connectOrCreate', {
        type: 'CountryLanguageCreateOrConnectWithoutCountryInput',
      });
      t.field('createMany', {
        type: 'CountryLanguageCreateManyCountryInputEnvelope',
      });
      t.list.field('connect', { type: 'CountryLanguageWhereUniqueInput' });
    },
  });

export const EnumCountryContinentFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumCountryContinentFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'CountryContinent' });
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

export const CityUpdateManyWithoutCountryNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityUpdateManyWithoutCountryNestedInput',
  definition(t) {
    t.list.field('create', { type: 'CityCreateWithoutCountryInput' });
    t.list.field('connectOrCreate', {
      type: 'CityCreateOrConnectWithoutCountryInput',
    });
    t.list.field('upsert', {
      type: 'CityUpsertWithWhereUniqueWithoutCountryInput',
    });
    t.field('createMany', { type: 'CityCreateManyCountryInputEnvelope' });
    t.list.field('set', { type: 'CityWhereUniqueInput' });
    t.list.field('disconnect', { type: 'CityWhereUniqueInput' });
    t.list.field('delete', { type: 'CityWhereUniqueInput' });
    t.list.field('connect', { type: 'CityWhereUniqueInput' });
    t.list.field('update', {
      type: 'CityUpdateWithWhereUniqueWithoutCountryInput',
    });
    t.list.field('updateMany', {
      type: 'CityUpdateManyWithWhereWithoutCountryInput',
    });
    t.list.field('deleteMany', { type: 'CityScalarWhereInput' });
  },
});

export const CountryLanguageUpdateManyWithoutCountryNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CountryLanguageUpdateManyWithoutCountryNestedInput',
    definition(t) {
      t.list.field('create', {
        type: 'CountryLanguageCreateWithoutCountryInput',
      });
      t.list.field('connectOrCreate', {
        type: 'CountryLanguageCreateOrConnectWithoutCountryInput',
      });
      t.list.field('upsert', {
        type: 'CountryLanguageUpsertWithWhereUniqueWithoutCountryInput',
      });
      t.field('createMany', {
        type: 'CountryLanguageCreateManyCountryInputEnvelope',
      });
      t.list.field('set', { type: 'CountryLanguageWhereUniqueInput' });
      t.list.field('disconnect', { type: 'CountryLanguageWhereUniqueInput' });
      t.list.field('delete', { type: 'CountryLanguageWhereUniqueInput' });
      t.list.field('connect', { type: 'CountryLanguageWhereUniqueInput' });
      t.list.field('update', {
        type: 'CountryLanguageUpdateWithWhereUniqueWithoutCountryInput',
      });
      t.list.field('updateMany', {
        type: 'CountryLanguageUpdateManyWithWhereWithoutCountryInput',
      });
      t.list.field('deleteMany', { type: 'CountryLanguageScalarWhereInput' });
    },
  });

export const CityUncheckedUpdateManyWithoutCountryNestedInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'CityUncheckedUpdateManyWithoutCountryNestedInput',
    definition(t) {
      t.list.field('create', { type: 'CityCreateWithoutCountryInput' });
      t.list.field('connectOrCreate', {
        type: 'CityCreateOrConnectWithoutCountryInput',
      });
      t.list.field('upsert', {
        type: 'CityUpsertWithWhereUniqueWithoutCountryInput',
      });
      t.field('createMany', { type: 'CityCreateManyCountryInputEnvelope' });
      t.list.field('set', { type: 'CityWhereUniqueInput' });
      t.list.field('disconnect', { type: 'CityWhereUniqueInput' });
      t.list.field('delete', { type: 'CityWhereUniqueInput' });
      t.list.field('connect', { type: 'CityWhereUniqueInput' });
      t.list.field('update', {
        type: 'CityUpdateWithWhereUniqueWithoutCountryInput',
      });
      t.list.field('updateMany', {
        type: 'CityUpdateManyWithWhereWithoutCountryInput',
      });
      t.list.field('deleteMany', { type: 'CityScalarWhereInput' });
    },
  },
);

export const CountryLanguageUncheckedUpdateManyWithoutCountryNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CountryLanguageUncheckedUpdateManyWithoutCountryNestedInput',
    definition(t) {
      t.list.field('create', {
        type: 'CountryLanguageCreateWithoutCountryInput',
      });
      t.list.field('connectOrCreate', {
        type: 'CountryLanguageCreateOrConnectWithoutCountryInput',
      });
      t.list.field('upsert', {
        type: 'CountryLanguageUpsertWithWhereUniqueWithoutCountryInput',
      });
      t.field('createMany', {
        type: 'CountryLanguageCreateManyCountryInputEnvelope',
      });
      t.list.field('set', { type: 'CountryLanguageWhereUniqueInput' });
      t.list.field('disconnect', { type: 'CountryLanguageWhereUniqueInput' });
      t.list.field('delete', { type: 'CountryLanguageWhereUniqueInput' });
      t.list.field('connect', { type: 'CountryLanguageWhereUniqueInput' });
      t.list.field('update', {
        type: 'CountryLanguageUpdateWithWhereUniqueWithoutCountryInput',
      });
      t.list.field('updateMany', {
        type: 'CountryLanguageUpdateManyWithWhereWithoutCountryInput',
      });
      t.list.field('deleteMany', { type: 'CountryLanguageScalarWhereInput' });
    },
  });

export const CountryCreateNestedOneWithoutCountryLanguageInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CountryCreateNestedOneWithoutCountryLanguageInput',
    definition(t) {
      t.field('create', { type: 'CountryCreateWithoutCountryLanguageInput' });
      t.field('connectOrCreate', {
        type: 'CountryCreateOrConnectWithoutCountryLanguageInput',
      });
      t.field('connect', { type: 'CountryWhereUniqueInput' });
    },
  });

export const EnumCountryLanguageIsOfficialFieldUpdateOperationsInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'EnumCountryLanguageIsOfficialFieldUpdateOperationsInput',
    definition(t) {
      t.field('set', { type: 'CountryLanguageIsOfficial' });
    },
  });

export const CountryUpdateOneRequiredWithoutCountryLanguageNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CountryUpdateOneRequiredWithoutCountryLanguageNestedInput',
    definition(t) {
      t.field('create', { type: 'CountryCreateWithoutCountryLanguageInput' });
      t.field('connectOrCreate', {
        type: 'CountryCreateOrConnectWithoutCountryLanguageInput',
      });
      t.field('upsert', { type: 'CountryUpsertWithoutCountryLanguageInput' });
      t.field('connect', { type: 'CountryWhereUniqueInput' });
      t.field('update', {
        type: 'CountryUpdateToOneWithWhereWithoutCountryLanguageInput',
      });
    },
  });

export const BoolFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Boolean' });
  },
});

export const DateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' });
  },
});

export const NullableDateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableDateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' });
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

export const NestedEnumCountryContinentFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumCountryContinentFilter',
  definition(t) {
    t.field('equals', { type: 'CountryContinent' });
    t.list.field('in', { type: 'CountryContinent' });
    t.list.field('notIn', { type: 'CountryContinent' });
    t.field('not', { type: 'NestedEnumCountryContinentFilter' });
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

export const NestedEnumCountryContinentWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumCountryContinentWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'CountryContinent' });
    t.list.field('in', { type: 'CountryContinent' });
    t.list.field('notIn', { type: 'CountryContinent' });
    t.field('not', { type: 'NestedEnumCountryContinentWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedEnumCountryContinentFilter' });
    t.field('_max', { type: 'NestedEnumCountryContinentFilter' });
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

export const NestedEnumCountryLanguageIsOfficialFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumCountryLanguageIsOfficialFilter',
  definition(t) {
    t.field('equals', { type: 'CountryLanguageIsOfficial' });
    t.list.field('in', { type: 'CountryLanguageIsOfficial' });
    t.list.field('notIn', { type: 'CountryLanguageIsOfficial' });
    t.field('not', { type: 'NestedEnumCountryLanguageIsOfficialFilter' });
  },
});

export const NestedEnumCountryLanguageIsOfficialWithAggregatesFilter =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'NestedEnumCountryLanguageIsOfficialWithAggregatesFilter',
    definition(t) {
      t.field('equals', { type: 'CountryLanguageIsOfficial' });
      t.list.field('in', { type: 'CountryLanguageIsOfficial' });
      t.list.field('notIn', { type: 'CountryLanguageIsOfficial' });
      t.field('not', {
        type: 'NestedEnumCountryLanguageIsOfficialWithAggregatesFilter',
      });
      t.field('_count', { type: 'NestedIntFilter' });
      t.field('_min', { type: 'NestedEnumCountryLanguageIsOfficialFilter' });
      t.field('_max', { type: 'NestedEnumCountryLanguageIsOfficialFilter' });
    },
  });

export const NestedBoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedBoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' });
    t.field('not', { type: 'NestedBoolFilter' });
  },
});

export const NestedDateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' });
    t.list.field('in', { type: 'DateTime' });
    t.list.field('notIn', { type: 'DateTime' });
    t.field('lt', { type: 'DateTime' });
    t.field('lte', { type: 'DateTime' });
    t.field('gt', { type: 'DateTime' });
    t.field('gte', { type: 'DateTime' });
    t.field('not', { type: 'NestedDateTimeFilter' });
  },
});

export const NestedDateTimeNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeNullableFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' });
    t.list.field('in', { type: 'DateTime' });
    t.list.field('notIn', { type: 'DateTime' });
    t.field('lt', { type: 'DateTime' });
    t.field('lte', { type: 'DateTime' });
    t.field('gt', { type: 'DateTime' });
    t.field('gte', { type: 'DateTime' });
    t.field('not', { type: 'NestedDateTimeNullableFilter' });
  },
});

export const NestedJsonFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedJsonFilter',
  definition(t) {
    t.field('equals', { type: 'Json' });
    t.field('path', { type: 'String' });
    t.field('string_contains', { type: 'String' });
    t.field('string_starts_with', { type: 'String' });
    t.field('string_ends_with', { type: 'String' });
    t.field('array_contains', { type: 'Json' });
    t.field('array_starts_with', { type: 'Json' });
    t.field('array_ends_with', { type: 'Json' });
    t.field('lt', { type: 'Json' });
    t.field('lte', { type: 'Json' });
    t.field('gt', { type: 'Json' });
    t.field('gte', { type: 'Json' });
    t.field('not', { type: 'Json' });
  },
});

export const NestedBoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedBoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' });
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedBoolFilter' });
    t.field('_max', { type: 'NestedBoolFilter' });
  },
});

export const NestedDateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' });
    t.list.field('in', { type: 'DateTime' });
    t.list.field('notIn', { type: 'DateTime' });
    t.field('lt', { type: 'DateTime' });
    t.field('lte', { type: 'DateTime' });
    t.field('gt', { type: 'DateTime' });
    t.field('gte', { type: 'DateTime' });
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedDateTimeFilter' });
    t.field('_max', { type: 'NestedDateTimeFilter' });
  },
});

export const NestedDateTimeNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' });
    t.list.field('in', { type: 'DateTime' });
    t.list.field('notIn', { type: 'DateTime' });
    t.field('lt', { type: 'DateTime' });
    t.field('lte', { type: 'DateTime' });
    t.field('gt', { type: 'DateTime' });
    t.field('gte', { type: 'DateTime' });
    t.field('not', { type: 'NestedDateTimeNullableWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntNullableFilter' });
    t.field('_min', { type: 'NestedDateTimeNullableFilter' });
    t.field('_max', { type: 'NestedDateTimeNullableFilter' });
  },
});

export const CountryCreateWithoutCityInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryCreateWithoutCityInput',
  definition(t) {
    t.nonNull.field('code', { type: 'String' });
    t.nonNull.field('name', { type: 'String' });
    t.field('continent', { type: 'CountryContinent' });
    t.nonNull.field('region', { type: 'String' });
    t.field('surfaceArea', { type: 'Decimal' });
    t.field('indepYear', { type: 'Int' });
    t.field('population', { type: 'Int' });
    t.field('lifeExpectancy', { type: 'Decimal' });
    t.field('gnp', { type: 'Decimal' });
    t.field('gnpoId', { type: 'Decimal' });
    t.nonNull.field('localName', { type: 'String' });
    t.nonNull.field('governmentForm', { type: 'String' });
    t.field('headOfState', { type: 'String' });
    t.field('capital', { type: 'Int' });
    t.nonNull.field('code2', { type: 'String' });
    t.field('countryLanguage', {
      type: 'CountryLanguageCreateNestedManyWithoutCountryInput',
    });
  },
});

export const CountryUncheckedCreateWithoutCityInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryUncheckedCreateWithoutCityInput',
  definition(t) {
    t.nonNull.field('code', { type: 'String' });
    t.nonNull.field('name', { type: 'String' });
    t.field('continent', { type: 'CountryContinent' });
    t.nonNull.field('region', { type: 'String' });
    t.field('surfaceArea', { type: 'Decimal' });
    t.field('indepYear', { type: 'Int' });
    t.field('population', { type: 'Int' });
    t.field('lifeExpectancy', { type: 'Decimal' });
    t.field('gnp', { type: 'Decimal' });
    t.field('gnpoId', { type: 'Decimal' });
    t.nonNull.field('localName', { type: 'String' });
    t.nonNull.field('governmentForm', { type: 'String' });
    t.field('headOfState', { type: 'String' });
    t.field('capital', { type: 'Int' });
    t.nonNull.field('code2', { type: 'String' });
    t.field('countryLanguage', {
      type: 'CountryLanguageUncheckedCreateNestedManyWithoutCountryInput',
    });
  },
});

export const CountryCreateOrConnectWithoutCityInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryCreateOrConnectWithoutCityInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CountryWhereUniqueInput' });
    t.nonNull.field('create', { type: 'CountryCreateWithoutCityInput' });
  },
});

export const CountryUpsertWithoutCityInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryUpsertWithoutCityInput',
  definition(t) {
    t.nonNull.field('update', { type: 'CountryUpdateWithoutCityInput' });
    t.nonNull.field('create', { type: 'CountryCreateWithoutCityInput' });
    t.field('where', { type: 'CountryWhereInput' });
  },
});

export const CountryUpdateToOneWithWhereWithoutCityInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryUpdateToOneWithWhereWithoutCityInput',
  definition(t) {
    t.field('where', { type: 'CountryWhereInput' });
    t.nonNull.field('data', { type: 'CountryUpdateWithoutCityInput' });
  },
});

export const CountryUpdateWithoutCityInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryUpdateWithoutCityInput',
  definition(t) {
    t.field('code', { type: 'StringFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('continent', {
      type: 'EnumCountryContinentFieldUpdateOperationsInput',
    });
    t.field('region', { type: 'StringFieldUpdateOperationsInput' });
    t.field('surfaceArea', { type: 'DecimalFieldUpdateOperationsInput' });
    t.field('indepYear', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('population', { type: 'IntFieldUpdateOperationsInput' });
    t.field('lifeExpectancy', {
      type: 'NullableDecimalFieldUpdateOperationsInput',
    });
    t.field('gnp', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('gnpoId', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('localName', { type: 'StringFieldUpdateOperationsInput' });
    t.field('governmentForm', { type: 'StringFieldUpdateOperationsInput' });
    t.field('headOfState', {
      type: 'NullableStringFieldUpdateOperationsInput',
    });
    t.field('capital', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('code2', { type: 'StringFieldUpdateOperationsInput' });
    t.field('countryLanguage', {
      type: 'CountryLanguageUpdateManyWithoutCountryNestedInput',
    });
  },
});

export const CountryUncheckedUpdateWithoutCityInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryUncheckedUpdateWithoutCityInput',
  definition(t) {
    t.field('code', { type: 'StringFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('continent', {
      type: 'EnumCountryContinentFieldUpdateOperationsInput',
    });
    t.field('region', { type: 'StringFieldUpdateOperationsInput' });
    t.field('surfaceArea', { type: 'DecimalFieldUpdateOperationsInput' });
    t.field('indepYear', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('population', { type: 'IntFieldUpdateOperationsInput' });
    t.field('lifeExpectancy', {
      type: 'NullableDecimalFieldUpdateOperationsInput',
    });
    t.field('gnp', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('gnpoId', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('localName', { type: 'StringFieldUpdateOperationsInput' });
    t.field('governmentForm', { type: 'StringFieldUpdateOperationsInput' });
    t.field('headOfState', {
      type: 'NullableStringFieldUpdateOperationsInput',
    });
    t.field('capital', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('code2', { type: 'StringFieldUpdateOperationsInput' });
    t.field('countryLanguage', {
      type: 'CountryLanguageUncheckedUpdateManyWithoutCountryNestedInput',
    });
  },
});

export const CityCreateWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityCreateWithoutCountryInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('district', { type: 'String' });
    t.field('population', { type: 'Int' });
  },
});

export const CityUncheckedCreateWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityUncheckedCreateWithoutCountryInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('district', { type: 'String' });
    t.field('population', { type: 'Int' });
  },
});

export const CityCreateOrConnectWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityCreateOrConnectWithoutCountryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CityWhereUniqueInput' });
    t.nonNull.field('create', { type: 'CityCreateWithoutCountryInput' });
  },
});

export const CityCreateManyCountryInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityCreateManyCountryInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'CityCreateManyCountryInput' });
    t.field('skipDuplicates', { type: 'Boolean' });
  },
});

export const CountryLanguageCreateWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageCreateWithoutCountryInput',
  definition(t) {
    t.nonNull.field('language', { type: 'String' });
    t.field('isOfficial', { type: 'CountryLanguageIsOfficial' });
    t.field('percentage', { type: 'Decimal' });
  },
});

export const CountryLanguageUncheckedCreateWithoutCountryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CountryLanguageUncheckedCreateWithoutCountryInput',
    definition(t) {
      t.nonNull.field('language', { type: 'String' });
      t.field('isOfficial', { type: 'CountryLanguageIsOfficial' });
      t.field('percentage', { type: 'Decimal' });
    },
  });

export const CountryLanguageCreateOrConnectWithoutCountryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CountryLanguageCreateOrConnectWithoutCountryInput',
    definition(t) {
      t.nonNull.field('where', { type: 'CountryLanguageWhereUniqueInput' });
      t.nonNull.field('create', {
        type: 'CountryLanguageCreateWithoutCountryInput',
      });
    },
  });

export const CountryLanguageCreateManyCountryInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageCreateManyCountryInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'CountryLanguageCreateManyCountryInput' });
    t.field('skipDuplicates', { type: 'Boolean' });
  },
});

export const CityUpsertWithWhereUniqueWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityUpsertWithWhereUniqueWithoutCountryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CityWhereUniqueInput' });
    t.nonNull.field('update', { type: 'CityUpdateWithoutCountryInput' });
    t.nonNull.field('create', { type: 'CityCreateWithoutCountryInput' });
  },
});

export const CityUpdateWithWhereUniqueWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityUpdateWithWhereUniqueWithoutCountryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CityWhereUniqueInput' });
    t.nonNull.field('data', { type: 'CityUpdateWithoutCountryInput' });
  },
});

export const CityUpdateManyWithWhereWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityUpdateManyWithWhereWithoutCountryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CityScalarWhereInput' });
    t.nonNull.field('data', { type: 'CityUpdateManyMutationInput' });
  },
});

export const CityScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'CityScalarWhereInput' });
    t.list.field('OR', { type: 'CityScalarWhereInput' });
    t.list.field('NOT', { type: 'CityScalarWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('name', { type: 'StringFilter' });
    t.field('countryCode', { type: 'StringFilter' });
    t.field('district', { type: 'StringFilter' });
    t.field('population', { type: 'IntFilter' });
  },
});

export const CountryLanguageUpsertWithWhereUniqueWithoutCountryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CountryLanguageUpsertWithWhereUniqueWithoutCountryInput',
    definition(t) {
      t.nonNull.field('where', { type: 'CountryLanguageWhereUniqueInput' });
      t.nonNull.field('update', {
        type: 'CountryLanguageUpdateWithoutCountryInput',
      });
      t.nonNull.field('create', {
        type: 'CountryLanguageCreateWithoutCountryInput',
      });
    },
  });

export const CountryLanguageUpdateWithWhereUniqueWithoutCountryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CountryLanguageUpdateWithWhereUniqueWithoutCountryInput',
    definition(t) {
      t.nonNull.field('where', { type: 'CountryLanguageWhereUniqueInput' });
      t.nonNull.field('data', {
        type: 'CountryLanguageUpdateWithoutCountryInput',
      });
    },
  });

export const CountryLanguageUpdateManyWithWhereWithoutCountryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CountryLanguageUpdateManyWithWhereWithoutCountryInput',
    definition(t) {
      t.nonNull.field('where', { type: 'CountryLanguageScalarWhereInput' });
      t.nonNull.field('data', {
        type: 'CountryLanguageUpdateManyMutationInput',
      });
    },
  });

export const CountryLanguageScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'CountryLanguageScalarWhereInput' });
    t.list.field('OR', { type: 'CountryLanguageScalarWhereInput' });
    t.list.field('NOT', { type: 'CountryLanguageScalarWhereInput' });
    t.field('countryCode', { type: 'StringFilter' });
    t.field('language', { type: 'StringFilter' });
    t.field('isOfficial', { type: 'EnumCountryLanguageIsOfficialFilter' });
    t.field('percentage', { type: 'DecimalFilter' });
  },
});

export const CountryCreateWithoutCountryLanguageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryCreateWithoutCountryLanguageInput',
  definition(t) {
    t.nonNull.field('code', { type: 'String' });
    t.nonNull.field('name', { type: 'String' });
    t.field('continent', { type: 'CountryContinent' });
    t.nonNull.field('region', { type: 'String' });
    t.field('surfaceArea', { type: 'Decimal' });
    t.field('indepYear', { type: 'Int' });
    t.field('population', { type: 'Int' });
    t.field('lifeExpectancy', { type: 'Decimal' });
    t.field('gnp', { type: 'Decimal' });
    t.field('gnpoId', { type: 'Decimal' });
    t.nonNull.field('localName', { type: 'String' });
    t.nonNull.field('governmentForm', { type: 'String' });
    t.field('headOfState', { type: 'String' });
    t.field('capital', { type: 'Int' });
    t.nonNull.field('code2', { type: 'String' });
    t.field('city', { type: 'CityCreateNestedManyWithoutCountryInput' });
  },
});

export const CountryUncheckedCreateWithoutCountryLanguageInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CountryUncheckedCreateWithoutCountryLanguageInput',
    definition(t) {
      t.nonNull.field('code', { type: 'String' });
      t.nonNull.field('name', { type: 'String' });
      t.field('continent', { type: 'CountryContinent' });
      t.nonNull.field('region', { type: 'String' });
      t.field('surfaceArea', { type: 'Decimal' });
      t.field('indepYear', { type: 'Int' });
      t.field('population', { type: 'Int' });
      t.field('lifeExpectancy', { type: 'Decimal' });
      t.field('gnp', { type: 'Decimal' });
      t.field('gnpoId', { type: 'Decimal' });
      t.nonNull.field('localName', { type: 'String' });
      t.nonNull.field('governmentForm', { type: 'String' });
      t.field('headOfState', { type: 'String' });
      t.field('capital', { type: 'Int' });
      t.nonNull.field('code2', { type: 'String' });
      t.field('city', {
        type: 'CityUncheckedCreateNestedManyWithoutCountryInput',
      });
    },
  });

export const CountryCreateOrConnectWithoutCountryLanguageInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CountryCreateOrConnectWithoutCountryLanguageInput',
    definition(t) {
      t.nonNull.field('where', { type: 'CountryWhereUniqueInput' });
      t.nonNull.field('create', {
        type: 'CountryCreateWithoutCountryLanguageInput',
      });
    },
  });

export const CountryUpsertWithoutCountryLanguageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryUpsertWithoutCountryLanguageInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'CountryUpdateWithoutCountryLanguageInput',
    });
    t.nonNull.field('create', {
      type: 'CountryCreateWithoutCountryLanguageInput',
    });
    t.field('where', { type: 'CountryWhereInput' });
  },
});

export const CountryUpdateToOneWithWhereWithoutCountryLanguageInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CountryUpdateToOneWithWhereWithoutCountryLanguageInput',
    definition(t) {
      t.field('where', { type: 'CountryWhereInput' });
      t.nonNull.field('data', {
        type: 'CountryUpdateWithoutCountryLanguageInput',
      });
    },
  });

export const CountryUpdateWithoutCountryLanguageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryUpdateWithoutCountryLanguageInput',
  definition(t) {
    t.field('code', { type: 'StringFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('continent', {
      type: 'EnumCountryContinentFieldUpdateOperationsInput',
    });
    t.field('region', { type: 'StringFieldUpdateOperationsInput' });
    t.field('surfaceArea', { type: 'DecimalFieldUpdateOperationsInput' });
    t.field('indepYear', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('population', { type: 'IntFieldUpdateOperationsInput' });
    t.field('lifeExpectancy', {
      type: 'NullableDecimalFieldUpdateOperationsInput',
    });
    t.field('gnp', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('gnpoId', { type: 'NullableDecimalFieldUpdateOperationsInput' });
    t.field('localName', { type: 'StringFieldUpdateOperationsInput' });
    t.field('governmentForm', { type: 'StringFieldUpdateOperationsInput' });
    t.field('headOfState', {
      type: 'NullableStringFieldUpdateOperationsInput',
    });
    t.field('capital', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('code2', { type: 'StringFieldUpdateOperationsInput' });
    t.field('city', { type: 'CityUpdateManyWithoutCountryNestedInput' });
  },
});

export const CountryUncheckedUpdateWithoutCountryLanguageInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CountryUncheckedUpdateWithoutCountryLanguageInput',
    definition(t) {
      t.field('code', { type: 'StringFieldUpdateOperationsInput' });
      t.field('name', { type: 'StringFieldUpdateOperationsInput' });
      t.field('continent', {
        type: 'EnumCountryContinentFieldUpdateOperationsInput',
      });
      t.field('region', { type: 'StringFieldUpdateOperationsInput' });
      t.field('surfaceArea', { type: 'DecimalFieldUpdateOperationsInput' });
      t.field('indepYear', { type: 'NullableIntFieldUpdateOperationsInput' });
      t.field('population', { type: 'IntFieldUpdateOperationsInput' });
      t.field('lifeExpectancy', {
        type: 'NullableDecimalFieldUpdateOperationsInput',
      });
      t.field('gnp', { type: 'NullableDecimalFieldUpdateOperationsInput' });
      t.field('gnpoId', { type: 'NullableDecimalFieldUpdateOperationsInput' });
      t.field('localName', { type: 'StringFieldUpdateOperationsInput' });
      t.field('governmentForm', { type: 'StringFieldUpdateOperationsInput' });
      t.field('headOfState', {
        type: 'NullableStringFieldUpdateOperationsInput',
      });
      t.field('capital', { type: 'NullableIntFieldUpdateOperationsInput' });
      t.field('code2', { type: 'StringFieldUpdateOperationsInput' });
      t.field('city', {
        type: 'CityUncheckedUpdateManyWithoutCountryNestedInput',
      });
    },
  });

export const CityCreateManyCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityCreateManyCountryInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('district', { type: 'String' });
    t.field('population', { type: 'Int' });
  },
});

export const CountryLanguageCreateManyCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageCreateManyCountryInput',
  definition(t) {
    t.nonNull.field('language', { type: 'String' });
    t.field('isOfficial', { type: 'CountryLanguageIsOfficial' });
    t.field('percentage', { type: 'Decimal' });
  },
});

export const CityUpdateWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityUpdateWithoutCountryInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('district', { type: 'StringFieldUpdateOperationsInput' });
    t.field('population', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const CityUncheckedUpdateWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityUncheckedUpdateWithoutCountryInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('district', { type: 'StringFieldUpdateOperationsInput' });
    t.field('population', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const CityUncheckedUpdateManyWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CityUncheckedUpdateManyWithoutCountryInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('district', { type: 'StringFieldUpdateOperationsInput' });
    t.field('population', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const CountryLanguageUpdateWithoutCountryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CountryLanguageUpdateWithoutCountryInput',
  definition(t) {
    t.field('language', { type: 'StringFieldUpdateOperationsInput' });
    t.field('isOfficial', {
      type: 'EnumCountryLanguageIsOfficialFieldUpdateOperationsInput',
    });
    t.field('percentage', { type: 'DecimalFieldUpdateOperationsInput' });
  },
});

export const CountryLanguageUncheckedUpdateWithoutCountryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CountryLanguageUncheckedUpdateWithoutCountryInput',
    definition(t) {
      t.field('language', { type: 'StringFieldUpdateOperationsInput' });
      t.field('isOfficial', {
        type: 'EnumCountryLanguageIsOfficialFieldUpdateOperationsInput',
      });
      t.field('percentage', { type: 'DecimalFieldUpdateOperationsInput' });
    },
  });

export const CountryLanguageUncheckedUpdateManyWithoutCountryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CountryLanguageUncheckedUpdateManyWithoutCountryInput',
    definition(t) {
      t.field('language', { type: 'StringFieldUpdateOperationsInput' });
      t.field('isOfficial', {
        type: 'EnumCountryLanguageIsOfficialFieldUpdateOperationsInput',
      });
      t.field('percentage', { type: 'DecimalFieldUpdateOperationsInput' });
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
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('countryCode', { type: 'String' });
    t.field('district', { type: 'String' });
    t.field('population', { type: 'Int' });
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
    t.field('code', { type: 'String' });
    t.field('name', { type: 'String' });
    t.field('continent', { type: 'CountryContinent' });
    t.field('region', { type: 'String' });
    t.field('surfaceArea', { type: 'Decimal' });
    t.nullable.field('indepYear', { type: 'Int' });
    t.field('population', { type: 'Int' });
    t.nullable.field('lifeExpectancy', { type: 'Decimal' });
    t.nullable.field('gnp', { type: 'Decimal' });
    t.nullable.field('gnpoId', { type: 'Decimal' });
    t.field('localName', { type: 'String' });
    t.field('governmentForm', { type: 'String' });
    t.nullable.field('headOfState', { type: 'String' });
    t.nullable.field('capital', { type: 'Int' });
    t.field('code2', { type: 'String' });
    t.nullable.field('_count', { type: 'CountryCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'CountryAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'CountrySumAggregateOutputType' });
    t.nullable.field('_min', { type: 'CountryMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'CountryMaxAggregateOutputType' });
  },
});

export const AggregateCountryLanguage = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateCountryLanguage',
  definition(t) {
    t.nullable.field('_count', {
      type: 'CountryLanguageCountAggregateOutputType',
    });
    t.nullable.field('_avg', { type: 'CountryLanguageAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'CountryLanguageSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'CountryLanguageMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'CountryLanguageMaxAggregateOutputType' });
  },
});

export const CountryLanguageGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountryLanguageGroupByOutputType',
  definition(t) {
    t.field('countryCode', { type: 'String' });
    t.field('language', { type: 'String' });
    t.field('isOfficial', { type: 'CountryLanguageIsOfficial' });
    t.field('percentage', { type: 'Decimal' });
    t.nullable.field('_count', {
      type: 'CountryLanguageCountAggregateOutputType',
    });
    t.nullable.field('_avg', { type: 'CountryLanguageAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'CountryLanguageSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'CountryLanguageMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'CountryLanguageMaxAggregateOutputType' });
  },
});

export const AggregateUser = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateUser',
  definition(t) {
    t.nullable.field('_count', { type: 'UserCountAggregateOutputType' });
    t.nullable.field('_min', { type: 'UserMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'UserMaxAggregateOutputType' });
  },
});

export const UserGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'String' });
    t.field('username', { type: 'String' });
    t.field('password', { type: 'String' });
    t.field('email', { type: 'String' });
    t.field('roles', { type: 'Json' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('_count', { type: 'UserCountAggregateOutputType' });
    t.nullable.field('_min', { type: 'UserMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'UserMaxAggregateOutputType' });
  },
});

export const CityCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CityCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'Int' });
    t.field('countryCode', { type: 'Int' });
    t.field('district', { type: 'Int' });
    t.field('population', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const CityAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CityAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
    t.nullable.field('population', { type: 'Float' });
  },
});

export const CitySumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CitySumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('population', { type: 'Int' });
  },
});

export const CityMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CityMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('countryCode', { type: 'String' });
    t.nullable.field('district', { type: 'String' });
    t.nullable.field('population', { type: 'Int' });
  },
});

export const CityMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CityMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('countryCode', { type: 'String' });
    t.nullable.field('district', { type: 'String' });
    t.nullable.field('population', { type: 'Int' });
  },
});

export const CountryCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountryCountOutputType',
  definition(t) {
    t.field('city', { type: 'Int' });
    t.field('countryLanguage', { type: 'Int' });
  },
});

export const CountryCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountryCountAggregateOutputType',
  definition(t) {
    t.field('code', { type: 'Int' });
    t.field('name', { type: 'Int' });
    t.field('continent', { type: 'Int' });
    t.field('region', { type: 'Int' });
    t.field('surfaceArea', { type: 'Int' });
    t.field('indepYear', { type: 'Int' });
    t.field('population', { type: 'Int' });
    t.field('lifeExpectancy', { type: 'Int' });
    t.field('gnp', { type: 'Int' });
    t.field('gnpoId', { type: 'Int' });
    t.field('localName', { type: 'Int' });
    t.field('governmentForm', { type: 'Int' });
    t.field('headOfState', { type: 'Int' });
    t.field('capital', { type: 'Int' });
    t.field('code2', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const CountryAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountryAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('surfaceArea', { type: 'Decimal' });
    t.nullable.field('indepYear', { type: 'Float' });
    t.nullable.field('population', { type: 'Float' });
    t.nullable.field('lifeExpectancy', { type: 'Decimal' });
    t.nullable.field('gnp', { type: 'Decimal' });
    t.nullable.field('gnpoId', { type: 'Decimal' });
    t.nullable.field('capital', { type: 'Float' });
  },
});

export const CountrySumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountrySumAggregateOutputType',
  definition(t) {
    t.nullable.field('surfaceArea', { type: 'Decimal' });
    t.nullable.field('indepYear', { type: 'Int' });
    t.nullable.field('population', { type: 'Int' });
    t.nullable.field('lifeExpectancy', { type: 'Decimal' });
    t.nullable.field('gnp', { type: 'Decimal' });
    t.nullable.field('gnpoId', { type: 'Decimal' });
    t.nullable.field('capital', { type: 'Int' });
  },
});

export const CountryMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountryMinAggregateOutputType',
  definition(t) {
    t.nullable.field('code', { type: 'String' });
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('continent', { type: 'CountryContinent' });
    t.nullable.field('region', { type: 'String' });
    t.nullable.field('surfaceArea', { type: 'Decimal' });
    t.nullable.field('indepYear', { type: 'Int' });
    t.nullable.field('population', { type: 'Int' });
    t.nullable.field('lifeExpectancy', { type: 'Decimal' });
    t.nullable.field('gnp', { type: 'Decimal' });
    t.nullable.field('gnpoId', { type: 'Decimal' });
    t.nullable.field('localName', { type: 'String' });
    t.nullable.field('governmentForm', { type: 'String' });
    t.nullable.field('headOfState', { type: 'String' });
    t.nullable.field('capital', { type: 'Int' });
    t.nullable.field('code2', { type: 'String' });
  },
});

export const CountryMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountryMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('code', { type: 'String' });
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('continent', { type: 'CountryContinent' });
    t.nullable.field('region', { type: 'String' });
    t.nullable.field('surfaceArea', { type: 'Decimal' });
    t.nullable.field('indepYear', { type: 'Int' });
    t.nullable.field('population', { type: 'Int' });
    t.nullable.field('lifeExpectancy', { type: 'Decimal' });
    t.nullable.field('gnp', { type: 'Decimal' });
    t.nullable.field('gnpoId', { type: 'Decimal' });
    t.nullable.field('localName', { type: 'String' });
    t.nullable.field('governmentForm', { type: 'String' });
    t.nullable.field('headOfState', { type: 'String' });
    t.nullable.field('capital', { type: 'Int' });
    t.nullable.field('code2', { type: 'String' });
  },
});

export const CountryLanguageCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountryLanguageCountAggregateOutputType',
  definition(t) {
    t.field('countryCode', { type: 'Int' });
    t.field('language', { type: 'Int' });
    t.field('isOfficial', { type: 'Int' });
    t.field('percentage', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const CountryLanguageAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountryLanguageAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('percentage', { type: 'Decimal' });
  },
});

export const CountryLanguageSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountryLanguageSumAggregateOutputType',
  definition(t) {
    t.nullable.field('percentage', { type: 'Decimal' });
  },
});

export const CountryLanguageMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountryLanguageMinAggregateOutputType',
  definition(t) {
    t.nullable.field('countryCode', { type: 'String' });
    t.nullable.field('language', { type: 'String' });
    t.nullable.field('isOfficial', { type: 'CountryLanguageIsOfficial' });
    t.nullable.field('percentage', { type: 'Decimal' });
  },
});

export const CountryLanguageMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CountryLanguageMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('countryCode', { type: 'String' });
    t.nullable.field('language', { type: 'String' });
    t.nullable.field('isOfficial', { type: 'CountryLanguageIsOfficial' });
    t.nullable.field('percentage', { type: 'Decimal' });
  },
});

export const UserCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('username', { type: 'Int' });
    t.field('password', { type: 'Int' });
    t.field('email', { type: 'Int' });
    t.field('roles', { type: 'Int' });
    t.field('isActive', { type: 'Int' });
    t.field('createdAt', { type: 'Int' });
    t.field('updatedAt', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const UserMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' });
    t.nullable.field('username', { type: 'String' });
    t.nullable.field('password', { type: 'String' });
    t.nullable.field('email', { type: 'String' });
    t.nullable.field('isActive', { type: 'Boolean' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
  },
});

export const UserMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' });
    t.nullable.field('username', { type: 'String' });
    t.nullable.field('password', { type: 'String' });
    t.nullable.field('email', { type: 'String' });
    t.nullable.field('isActive', { type: 'Boolean' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
  },
});
