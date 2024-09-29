/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `BigInt` scalar type represents non-fractional signed whole numeric values.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
   */
  BigInt: { input: any; output: any; }
  /** The `Byte` scalar type represents byte value as a Buffer */
  Bytes: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** An arbitrary-precision Decimal type */
  Decimal: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: { input: any; output: any; }
  /** Represents NULL values */
  Void: { input: any; output: any; }
};

export type AggregateCity = {
  __typename?: 'AggregateCity';
  _avg?: Maybe<CityAvgAggregateOutputType>;
  _count?: Maybe<CityCountAggregateOutputType>;
  _max?: Maybe<CityMaxAggregateOutputType>;
  _min?: Maybe<CityMinAggregateOutputType>;
  _sum?: Maybe<CitySumAggregateOutputType>;
};

export type AggregateCountry = {
  __typename?: 'AggregateCountry';
  _avg?: Maybe<CountryAvgAggregateOutputType>;
  _count?: Maybe<CountryCountAggregateOutputType>;
  _max?: Maybe<CountryMaxAggregateOutputType>;
  _min?: Maybe<CountryMinAggregateOutputType>;
  _sum?: Maybe<CountrySumAggregateOutputType>;
};

export type AggregateCountryLanguage = {
  __typename?: 'AggregateCountryLanguage';
  _avg?: Maybe<CountryLanguageAvgAggregateOutputType>;
  _count?: Maybe<CountryLanguageCountAggregateOutputType>;
  _max?: Maybe<CountryLanguageMaxAggregateOutputType>;
  _min?: Maybe<CountryLanguageMinAggregateOutputType>;
  _sum?: Maybe<CountryLanguageSumAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int']['output'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type City = {
  __typename?: 'City';
  country: Country;
  countryCode: Scalars['String']['output'];
  district: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  population: Scalars['Int']['output'];
};

export type CityAvgAggregateOutputType = {
  __typename?: 'CityAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']['output']>;
  population?: Maybe<Scalars['Float']['output']>;
};

export type CityAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
};

export type CityCountAggregateOutputType = {
  __typename?: 'CityCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  countryCode: Scalars['Int']['output'];
  district: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  population: Scalars['Int']['output'];
};

export type CityCountOrderByAggregateInput = {
  countryCode?: InputMaybe<SortOrder>;
  district?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
};

export type CityCreateInput = {
  country: CountryCreateNestedOneWithoutCityInput;
  district: Scalars['String']['input'];
  name: Scalars['String']['input'];
  population?: InputMaybe<Scalars['Int']['input']>;
};

export type CityCreateManyCountryInput = {
  district: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  population?: InputMaybe<Scalars['Int']['input']>;
};

export type CityCreateManyCountryInputEnvelope = {
  data: CityCreateManyCountryInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CityCreateManyInput = {
  countryCode: Scalars['String']['input'];
  district: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  population?: InputMaybe<Scalars['Int']['input']>;
};

export type CityCreateNestedManyWithoutCountryInput = {
  connect?: InputMaybe<Array<InputMaybe<CityWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CityCreateOrConnectWithoutCountryInput>>>;
  create?: InputMaybe<Array<InputMaybe<CityCreateWithoutCountryInput>>>;
  createMany?: InputMaybe<CityCreateManyCountryInputEnvelope>;
};

export type CityCreateOrConnectWithoutCountryInput = {
  create: CityCreateWithoutCountryInput;
  where: CityWhereUniqueInput;
};

export type CityCreateWithoutCountryInput = {
  district: Scalars['String']['input'];
  name: Scalars['String']['input'];
  population?: InputMaybe<Scalars['Int']['input']>;
};

export type CityGroupByOutputType = {
  __typename?: 'CityGroupByOutputType';
  _avg?: Maybe<CityAvgAggregateOutputType>;
  _count?: Maybe<CityCountAggregateOutputType>;
  _max?: Maybe<CityMaxAggregateOutputType>;
  _min?: Maybe<CityMinAggregateOutputType>;
  _sum?: Maybe<CitySumAggregateOutputType>;
  countryCode: Scalars['String']['output'];
  district: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  population: Scalars['Int']['output'];
};

export type CityListRelationFilter = {
  every?: InputMaybe<CityWhereInput>;
  none?: InputMaybe<CityWhereInput>;
  some?: InputMaybe<CityWhereInput>;
};

export type CityMaxAggregateOutputType = {
  __typename?: 'CityMaxAggregateOutputType';
  countryCode?: Maybe<Scalars['String']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  population?: Maybe<Scalars['Int']['output']>;
};

export type CityMaxOrderByAggregateInput = {
  countryCode?: InputMaybe<SortOrder>;
  district?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
};

export type CityMinAggregateOutputType = {
  __typename?: 'CityMinAggregateOutputType';
  countryCode?: Maybe<Scalars['String']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  population?: Maybe<Scalars['Int']['output']>;
};

export type CityMinOrderByAggregateInput = {
  countryCode?: InputMaybe<SortOrder>;
  district?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
};

export type CityOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CityOrderByWithAggregationInput = {
  _avg?: InputMaybe<CityAvgOrderByAggregateInput>;
  _count?: InputMaybe<CityCountOrderByAggregateInput>;
  _max?: InputMaybe<CityMaxOrderByAggregateInput>;
  _min?: InputMaybe<CityMinOrderByAggregateInput>;
  _sum?: InputMaybe<CitySumOrderByAggregateInput>;
  countryCode?: InputMaybe<SortOrder>;
  district?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
};

export type CityOrderByWithRelationInput = {
  country?: InputMaybe<CountryOrderByWithRelationInput>;
  countryCode?: InputMaybe<SortOrder>;
  district?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
};

export enum CityScalarFieldEnum {
  CountryCode = 'countryCode',
  District = 'district',
  Id = 'id',
  Name = 'name',
  Population = 'population'
}

export type CityScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CityScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CityScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CityScalarWhereInput>>>;
  countryCode?: InputMaybe<StringFilter>;
  district?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  population?: InputMaybe<IntFilter>;
};

export type CityScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<CityScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CityScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CityScalarWhereWithAggregatesInput>>>;
  countryCode?: InputMaybe<StringWithAggregatesFilter>;
  district?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  population?: InputMaybe<IntWithAggregatesFilter>;
};

export type CitySumAggregateOutputType = {
  __typename?: 'CitySumAggregateOutputType';
  id?: Maybe<Scalars['Int']['output']>;
  population?: Maybe<Scalars['Int']['output']>;
};

export type CitySumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
};

export type CityUncheckedCreateInput = {
  countryCode: Scalars['String']['input'];
  district: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  population?: InputMaybe<Scalars['Int']['input']>;
};

export type CityUncheckedCreateNestedManyWithoutCountryInput = {
  connect?: InputMaybe<Array<InputMaybe<CityWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CityCreateOrConnectWithoutCountryInput>>>;
  create?: InputMaybe<Array<InputMaybe<CityCreateWithoutCountryInput>>>;
  createMany?: InputMaybe<CityCreateManyCountryInputEnvelope>;
};

export type CityUncheckedCreateWithoutCountryInput = {
  district: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  population?: InputMaybe<Scalars['Int']['input']>;
};

export type CityUncheckedUpdateInput = {
  countryCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  district?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  population?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CityUncheckedUpdateManyInput = {
  countryCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  district?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  population?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CityUncheckedUpdateManyWithoutCountryInput = {
  district?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  population?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CityUncheckedUpdateManyWithoutCountryNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<CityWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CityCreateOrConnectWithoutCountryInput>>>;
  create?: InputMaybe<Array<InputMaybe<CityCreateWithoutCountryInput>>>;
  createMany?: InputMaybe<CityCreateManyCountryInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<CityWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CityScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CityWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CityWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CityUpdateWithWhereUniqueWithoutCountryInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CityUpdateManyWithWhereWithoutCountryInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CityUpsertWithWhereUniqueWithoutCountryInput>>>;
};

export type CityUncheckedUpdateWithoutCountryInput = {
  district?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  population?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CityUpdateInput = {
  country?: InputMaybe<CountryUpdateOneRequiredWithoutCityNestedInput>;
  district?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  population?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CityUpdateManyMutationInput = {
  district?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  population?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CityUpdateManyWithWhereWithoutCountryInput = {
  data: CityUpdateManyMutationInput;
  where: CityScalarWhereInput;
};

export type CityUpdateManyWithoutCountryNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<CityWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CityCreateOrConnectWithoutCountryInput>>>;
  create?: InputMaybe<Array<InputMaybe<CityCreateWithoutCountryInput>>>;
  createMany?: InputMaybe<CityCreateManyCountryInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<CityWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CityScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CityWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CityWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CityUpdateWithWhereUniqueWithoutCountryInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CityUpdateManyWithWhereWithoutCountryInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CityUpsertWithWhereUniqueWithoutCountryInput>>>;
};

export type CityUpdateWithWhereUniqueWithoutCountryInput = {
  data: CityUpdateWithoutCountryInput;
  where: CityWhereUniqueInput;
};

export type CityUpdateWithoutCountryInput = {
  district?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  population?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CityUpsertWithWhereUniqueWithoutCountryInput = {
  create: CityCreateWithoutCountryInput;
  update: CityUpdateWithoutCountryInput;
  where: CityWhereUniqueInput;
};

export type CityWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CityWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CityWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CityWhereInput>>>;
  country?: InputMaybe<CountryRelationFilter>;
  countryCode?: InputMaybe<StringFilter>;
  district?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  population?: InputMaybe<IntFilter>;
};

export type CityWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<CityWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CityWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CityWhereInput>>>;
  country?: InputMaybe<CountryRelationFilter>;
  countryCode?: InputMaybe<StringFilter>;
  district?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<StringFilter>;
  population?: InputMaybe<IntFilter>;
};

export type Country = {
  __typename?: 'Country';
  _count: CountryCountOutputType;
  capital?: Maybe<Scalars['Int']['output']>;
  city: Array<City>;
  code: Scalars['String']['output'];
  code2: Scalars['String']['output'];
  continent: CountryContinent;
  countryLanguage: Array<CountryLanguage>;
  gnp?: Maybe<Scalars['Decimal']['output']>;
  gnpoId?: Maybe<Scalars['Decimal']['output']>;
  governmentForm: Scalars['String']['output'];
  headOfState?: Maybe<Scalars['String']['output']>;
  indepYear?: Maybe<Scalars['Int']['output']>;
  lifeExpectancy?: Maybe<Scalars['Decimal']['output']>;
  localName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  population: Scalars['Int']['output'];
  region: Scalars['String']['output'];
  surfaceArea: Scalars['Decimal']['output'];
};


export type CountryCityArgs = {
  cursor?: InputMaybe<CityWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CityScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CityOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CityWhereInput>;
};


export type CountryCountryLanguageArgs = {
  cursor?: InputMaybe<CountryLanguageWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CountryLanguageScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CountryLanguageOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CountryLanguageWhereInput>;
};

export type CountryAvgAggregateOutputType = {
  __typename?: 'CountryAvgAggregateOutputType';
  capital?: Maybe<Scalars['Float']['output']>;
  gnp?: Maybe<Scalars['Decimal']['output']>;
  gnpoId?: Maybe<Scalars['Decimal']['output']>;
  indepYear?: Maybe<Scalars['Float']['output']>;
  lifeExpectancy?: Maybe<Scalars['Decimal']['output']>;
  population?: Maybe<Scalars['Float']['output']>;
  surfaceArea?: Maybe<Scalars['Decimal']['output']>;
};

export type CountryAvgOrderByAggregateInput = {
  capital?: InputMaybe<SortOrder>;
  gnp?: InputMaybe<SortOrder>;
  gnpoId?: InputMaybe<SortOrder>;
  indepYear?: InputMaybe<SortOrder>;
  lifeExpectancy?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  surfaceArea?: InputMaybe<SortOrder>;
};

export enum CountryContinent {
  Africa = 'Africa',
  Antarctica = 'Antarctica',
  Asia = 'Asia',
  Europe = 'Europe',
  NorthAmerica = 'North_America',
  Oceania = 'Oceania',
  SouthAmerica = 'South_America'
}

export type CountryCountAggregateOutputType = {
  __typename?: 'CountryCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  capital: Scalars['Int']['output'];
  code: Scalars['Int']['output'];
  code2: Scalars['Int']['output'];
  continent: Scalars['Int']['output'];
  gnp: Scalars['Int']['output'];
  gnpoId: Scalars['Int']['output'];
  governmentForm: Scalars['Int']['output'];
  headOfState: Scalars['Int']['output'];
  indepYear: Scalars['Int']['output'];
  lifeExpectancy: Scalars['Int']['output'];
  localName: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  population: Scalars['Int']['output'];
  region: Scalars['Int']['output'];
  surfaceArea: Scalars['Int']['output'];
};

export type CountryCountOrderByAggregateInput = {
  capital?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  code2?: InputMaybe<SortOrder>;
  continent?: InputMaybe<SortOrder>;
  gnp?: InputMaybe<SortOrder>;
  gnpoId?: InputMaybe<SortOrder>;
  governmentForm?: InputMaybe<SortOrder>;
  headOfState?: InputMaybe<SortOrder>;
  indepYear?: InputMaybe<SortOrder>;
  lifeExpectancy?: InputMaybe<SortOrder>;
  localName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  surfaceArea?: InputMaybe<SortOrder>;
};

export type CountryCountOutputType = {
  __typename?: 'CountryCountOutputType';
  city: Scalars['Int']['output'];
  countryLanguage: Scalars['Int']['output'];
};

export type CountryCreateInput = {
  capital?: InputMaybe<Scalars['Int']['input']>;
  city?: InputMaybe<CityCreateNestedManyWithoutCountryInput>;
  code: Scalars['String']['input'];
  code2: Scalars['String']['input'];
  continent?: InputMaybe<CountryContinent>;
  countryLanguage?: InputMaybe<CountryLanguageCreateNestedManyWithoutCountryInput>;
  gnp?: InputMaybe<Scalars['Decimal']['input']>;
  gnpoId?: InputMaybe<Scalars['Decimal']['input']>;
  governmentForm: Scalars['String']['input'];
  headOfState?: InputMaybe<Scalars['String']['input']>;
  indepYear?: InputMaybe<Scalars['Int']['input']>;
  lifeExpectancy?: InputMaybe<Scalars['Decimal']['input']>;
  localName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  population?: InputMaybe<Scalars['Int']['input']>;
  region: Scalars['String']['input'];
  surfaceArea?: InputMaybe<Scalars['Decimal']['input']>;
};

export type CountryCreateManyInput = {
  capital?: InputMaybe<Scalars['Int']['input']>;
  code: Scalars['String']['input'];
  code2: Scalars['String']['input'];
  continent?: InputMaybe<CountryContinent>;
  gnp?: InputMaybe<Scalars['Decimal']['input']>;
  gnpoId?: InputMaybe<Scalars['Decimal']['input']>;
  governmentForm: Scalars['String']['input'];
  headOfState?: InputMaybe<Scalars['String']['input']>;
  indepYear?: InputMaybe<Scalars['Int']['input']>;
  lifeExpectancy?: InputMaybe<Scalars['Decimal']['input']>;
  localName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  population?: InputMaybe<Scalars['Int']['input']>;
  region: Scalars['String']['input'];
  surfaceArea?: InputMaybe<Scalars['Decimal']['input']>;
};

export type CountryCreateNestedOneWithoutCityInput = {
  connect?: InputMaybe<CountryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CountryCreateOrConnectWithoutCityInput>;
  create?: InputMaybe<CountryCreateWithoutCityInput>;
};

export type CountryCreateNestedOneWithoutCountryLanguageInput = {
  connect?: InputMaybe<CountryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CountryCreateOrConnectWithoutCountryLanguageInput>;
  create?: InputMaybe<CountryCreateWithoutCountryLanguageInput>;
};

export type CountryCreateOrConnectWithoutCityInput = {
  create: CountryCreateWithoutCityInput;
  where: CountryWhereUniqueInput;
};

export type CountryCreateOrConnectWithoutCountryLanguageInput = {
  create: CountryCreateWithoutCountryLanguageInput;
  where: CountryWhereUniqueInput;
};

export type CountryCreateWithoutCityInput = {
  capital?: InputMaybe<Scalars['Int']['input']>;
  code: Scalars['String']['input'];
  code2: Scalars['String']['input'];
  continent?: InputMaybe<CountryContinent>;
  countryLanguage?: InputMaybe<CountryLanguageCreateNestedManyWithoutCountryInput>;
  gnp?: InputMaybe<Scalars['Decimal']['input']>;
  gnpoId?: InputMaybe<Scalars['Decimal']['input']>;
  governmentForm: Scalars['String']['input'];
  headOfState?: InputMaybe<Scalars['String']['input']>;
  indepYear?: InputMaybe<Scalars['Int']['input']>;
  lifeExpectancy?: InputMaybe<Scalars['Decimal']['input']>;
  localName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  population?: InputMaybe<Scalars['Int']['input']>;
  region: Scalars['String']['input'];
  surfaceArea?: InputMaybe<Scalars['Decimal']['input']>;
};

export type CountryCreateWithoutCountryLanguageInput = {
  capital?: InputMaybe<Scalars['Int']['input']>;
  city?: InputMaybe<CityCreateNestedManyWithoutCountryInput>;
  code: Scalars['String']['input'];
  code2: Scalars['String']['input'];
  continent?: InputMaybe<CountryContinent>;
  gnp?: InputMaybe<Scalars['Decimal']['input']>;
  gnpoId?: InputMaybe<Scalars['Decimal']['input']>;
  governmentForm: Scalars['String']['input'];
  headOfState?: InputMaybe<Scalars['String']['input']>;
  indepYear?: InputMaybe<Scalars['Int']['input']>;
  lifeExpectancy?: InputMaybe<Scalars['Decimal']['input']>;
  localName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  population?: InputMaybe<Scalars['Int']['input']>;
  region: Scalars['String']['input'];
  surfaceArea?: InputMaybe<Scalars['Decimal']['input']>;
};

export type CountryGroupByOutputType = {
  __typename?: 'CountryGroupByOutputType';
  _avg?: Maybe<CountryAvgAggregateOutputType>;
  _count?: Maybe<CountryCountAggregateOutputType>;
  _max?: Maybe<CountryMaxAggregateOutputType>;
  _min?: Maybe<CountryMinAggregateOutputType>;
  _sum?: Maybe<CountrySumAggregateOutputType>;
  capital?: Maybe<Scalars['Int']['output']>;
  code: Scalars['String']['output'];
  code2: Scalars['String']['output'];
  continent: CountryContinent;
  gnp?: Maybe<Scalars['Decimal']['output']>;
  gnpoId?: Maybe<Scalars['Decimal']['output']>;
  governmentForm: Scalars['String']['output'];
  headOfState?: Maybe<Scalars['String']['output']>;
  indepYear?: Maybe<Scalars['Int']['output']>;
  lifeExpectancy?: Maybe<Scalars['Decimal']['output']>;
  localName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  population: Scalars['Int']['output'];
  region: Scalars['String']['output'];
  surfaceArea: Scalars['Decimal']['output'];
};

export type CountryLanguage = {
  __typename?: 'CountryLanguage';
  country: Country;
  countryCode: Scalars['String']['output'];
  isOfficial: CountryLanguageIsOfficial;
  language: Scalars['String']['output'];
  percentage: Scalars['Decimal']['output'];
};

export type CountryLanguageAvgAggregateOutputType = {
  __typename?: 'CountryLanguageAvgAggregateOutputType';
  percentage?: Maybe<Scalars['Decimal']['output']>;
};

export type CountryLanguageAvgOrderByAggregateInput = {
  percentage?: InputMaybe<SortOrder>;
};

export type CountryLanguageCountAggregateOutputType = {
  __typename?: 'CountryLanguageCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  countryCode: Scalars['Int']['output'];
  isOfficial: Scalars['Int']['output'];
  language: Scalars['Int']['output'];
  percentage: Scalars['Int']['output'];
};

export type CountryLanguageCountOrderByAggregateInput = {
  countryCode?: InputMaybe<SortOrder>;
  isOfficial?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  percentage?: InputMaybe<SortOrder>;
};

export type CountryLanguageCountryCodeLanguageCompoundUniqueInput = {
  countryCode: Scalars['String']['input'];
  language: Scalars['String']['input'];
};

export type CountryLanguageCreateInput = {
  country: CountryCreateNestedOneWithoutCountryLanguageInput;
  isOfficial?: InputMaybe<CountryLanguageIsOfficial>;
  language: Scalars['String']['input'];
  percentage?: InputMaybe<Scalars['Decimal']['input']>;
};

export type CountryLanguageCreateManyCountryInput = {
  isOfficial?: InputMaybe<CountryLanguageIsOfficial>;
  language: Scalars['String']['input'];
  percentage?: InputMaybe<Scalars['Decimal']['input']>;
};

export type CountryLanguageCreateManyCountryInputEnvelope = {
  data: CountryLanguageCreateManyCountryInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CountryLanguageCreateManyInput = {
  countryCode: Scalars['String']['input'];
  isOfficial?: InputMaybe<CountryLanguageIsOfficial>;
  language: Scalars['String']['input'];
  percentage?: InputMaybe<Scalars['Decimal']['input']>;
};

export type CountryLanguageCreateNestedManyWithoutCountryInput = {
  connect?: InputMaybe<Array<InputMaybe<CountryLanguageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CountryLanguageCreateOrConnectWithoutCountryInput>>>;
  create?: InputMaybe<Array<InputMaybe<CountryLanguageCreateWithoutCountryInput>>>;
  createMany?: InputMaybe<CountryLanguageCreateManyCountryInputEnvelope>;
};

export type CountryLanguageCreateOrConnectWithoutCountryInput = {
  create: CountryLanguageCreateWithoutCountryInput;
  where: CountryLanguageWhereUniqueInput;
};

export type CountryLanguageCreateWithoutCountryInput = {
  isOfficial?: InputMaybe<CountryLanguageIsOfficial>;
  language: Scalars['String']['input'];
  percentage?: InputMaybe<Scalars['Decimal']['input']>;
};

export type CountryLanguageGroupByOutputType = {
  __typename?: 'CountryLanguageGroupByOutputType';
  _avg?: Maybe<CountryLanguageAvgAggregateOutputType>;
  _count?: Maybe<CountryLanguageCountAggregateOutputType>;
  _max?: Maybe<CountryLanguageMaxAggregateOutputType>;
  _min?: Maybe<CountryLanguageMinAggregateOutputType>;
  _sum?: Maybe<CountryLanguageSumAggregateOutputType>;
  countryCode: Scalars['String']['output'];
  isOfficial: CountryLanguageIsOfficial;
  language: Scalars['String']['output'];
  percentage: Scalars['Decimal']['output'];
};

export enum CountryLanguageIsOfficial {
  F = 'F',
  T = 'T'
}

export type CountryLanguageListRelationFilter = {
  every?: InputMaybe<CountryLanguageWhereInput>;
  none?: InputMaybe<CountryLanguageWhereInput>;
  some?: InputMaybe<CountryLanguageWhereInput>;
};

export type CountryLanguageMaxAggregateOutputType = {
  __typename?: 'CountryLanguageMaxAggregateOutputType';
  countryCode?: Maybe<Scalars['String']['output']>;
  isOfficial?: Maybe<CountryLanguageIsOfficial>;
  language?: Maybe<Scalars['String']['output']>;
  percentage?: Maybe<Scalars['Decimal']['output']>;
};

export type CountryLanguageMaxOrderByAggregateInput = {
  countryCode?: InputMaybe<SortOrder>;
  isOfficial?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  percentage?: InputMaybe<SortOrder>;
};

export type CountryLanguageMinAggregateOutputType = {
  __typename?: 'CountryLanguageMinAggregateOutputType';
  countryCode?: Maybe<Scalars['String']['output']>;
  isOfficial?: Maybe<CountryLanguageIsOfficial>;
  language?: Maybe<Scalars['String']['output']>;
  percentage?: Maybe<Scalars['Decimal']['output']>;
};

export type CountryLanguageMinOrderByAggregateInput = {
  countryCode?: InputMaybe<SortOrder>;
  isOfficial?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  percentage?: InputMaybe<SortOrder>;
};

export type CountryLanguageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CountryLanguageOrderByWithAggregationInput = {
  _avg?: InputMaybe<CountryLanguageAvgOrderByAggregateInput>;
  _count?: InputMaybe<CountryLanguageCountOrderByAggregateInput>;
  _max?: InputMaybe<CountryLanguageMaxOrderByAggregateInput>;
  _min?: InputMaybe<CountryLanguageMinOrderByAggregateInput>;
  _sum?: InputMaybe<CountryLanguageSumOrderByAggregateInput>;
  countryCode?: InputMaybe<SortOrder>;
  isOfficial?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  percentage?: InputMaybe<SortOrder>;
};

export type CountryLanguageOrderByWithRelationInput = {
  country?: InputMaybe<CountryOrderByWithRelationInput>;
  countryCode?: InputMaybe<SortOrder>;
  isOfficial?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  percentage?: InputMaybe<SortOrder>;
};

export enum CountryLanguageScalarFieldEnum {
  CountryCode = 'countryCode',
  IsOfficial = 'isOfficial',
  Language = 'language',
  Percentage = 'percentage'
}

export type CountryLanguageScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CountryLanguageScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CountryLanguageScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CountryLanguageScalarWhereInput>>>;
  countryCode?: InputMaybe<StringFilter>;
  isOfficial?: InputMaybe<EnumCountryLanguageIsOfficialFilter>;
  language?: InputMaybe<StringFilter>;
  percentage?: InputMaybe<DecimalFilter>;
};

export type CountryLanguageScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<CountryLanguageScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CountryLanguageScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CountryLanguageScalarWhereWithAggregatesInput>>>;
  countryCode?: InputMaybe<StringWithAggregatesFilter>;
  isOfficial?: InputMaybe<EnumCountryLanguageIsOfficialWithAggregatesFilter>;
  language?: InputMaybe<StringWithAggregatesFilter>;
  percentage?: InputMaybe<DecimalWithAggregatesFilter>;
};

export type CountryLanguageSumAggregateOutputType = {
  __typename?: 'CountryLanguageSumAggregateOutputType';
  percentage?: Maybe<Scalars['Decimal']['output']>;
};

export type CountryLanguageSumOrderByAggregateInput = {
  percentage?: InputMaybe<SortOrder>;
};

export type CountryLanguageUncheckedCreateInput = {
  countryCode: Scalars['String']['input'];
  isOfficial?: InputMaybe<CountryLanguageIsOfficial>;
  language: Scalars['String']['input'];
  percentage?: InputMaybe<Scalars['Decimal']['input']>;
};

export type CountryLanguageUncheckedCreateNestedManyWithoutCountryInput = {
  connect?: InputMaybe<Array<InputMaybe<CountryLanguageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CountryLanguageCreateOrConnectWithoutCountryInput>>>;
  create?: InputMaybe<Array<InputMaybe<CountryLanguageCreateWithoutCountryInput>>>;
  createMany?: InputMaybe<CountryLanguageCreateManyCountryInputEnvelope>;
};

export type CountryLanguageUncheckedCreateWithoutCountryInput = {
  isOfficial?: InputMaybe<CountryLanguageIsOfficial>;
  language: Scalars['String']['input'];
  percentage?: InputMaybe<Scalars['Decimal']['input']>;
};

export type CountryLanguageUncheckedUpdateInput = {
  countryCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOfficial?: InputMaybe<EnumCountryLanguageIsOfficialFieldUpdateOperationsInput>;
  language?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentage?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CountryLanguageUncheckedUpdateManyInput = {
  countryCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOfficial?: InputMaybe<EnumCountryLanguageIsOfficialFieldUpdateOperationsInput>;
  language?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentage?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CountryLanguageUncheckedUpdateManyWithoutCountryInput = {
  isOfficial?: InputMaybe<EnumCountryLanguageIsOfficialFieldUpdateOperationsInput>;
  language?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentage?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CountryLanguageUncheckedUpdateManyWithoutCountryNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<CountryLanguageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CountryLanguageCreateOrConnectWithoutCountryInput>>>;
  create?: InputMaybe<Array<InputMaybe<CountryLanguageCreateWithoutCountryInput>>>;
  createMany?: InputMaybe<CountryLanguageCreateManyCountryInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<CountryLanguageWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CountryLanguageScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CountryLanguageWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CountryLanguageWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CountryLanguageUpdateWithWhereUniqueWithoutCountryInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CountryLanguageUpdateManyWithWhereWithoutCountryInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CountryLanguageUpsertWithWhereUniqueWithoutCountryInput>>>;
};

export type CountryLanguageUncheckedUpdateWithoutCountryInput = {
  isOfficial?: InputMaybe<EnumCountryLanguageIsOfficialFieldUpdateOperationsInput>;
  language?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentage?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CountryLanguageUpdateInput = {
  country?: InputMaybe<CountryUpdateOneRequiredWithoutCountryLanguageNestedInput>;
  isOfficial?: InputMaybe<EnumCountryLanguageIsOfficialFieldUpdateOperationsInput>;
  language?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentage?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CountryLanguageUpdateManyMutationInput = {
  isOfficial?: InputMaybe<EnumCountryLanguageIsOfficialFieldUpdateOperationsInput>;
  language?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentage?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CountryLanguageUpdateManyWithWhereWithoutCountryInput = {
  data: CountryLanguageUpdateManyMutationInput;
  where: CountryLanguageScalarWhereInput;
};

export type CountryLanguageUpdateManyWithoutCountryNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<CountryLanguageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CountryLanguageCreateOrConnectWithoutCountryInput>>>;
  create?: InputMaybe<Array<InputMaybe<CountryLanguageCreateWithoutCountryInput>>>;
  createMany?: InputMaybe<CountryLanguageCreateManyCountryInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<CountryLanguageWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CountryLanguageScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CountryLanguageWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CountryLanguageWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CountryLanguageUpdateWithWhereUniqueWithoutCountryInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CountryLanguageUpdateManyWithWhereWithoutCountryInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CountryLanguageUpsertWithWhereUniqueWithoutCountryInput>>>;
};

export type CountryLanguageUpdateWithWhereUniqueWithoutCountryInput = {
  data: CountryLanguageUpdateWithoutCountryInput;
  where: CountryLanguageWhereUniqueInput;
};

export type CountryLanguageUpdateWithoutCountryInput = {
  isOfficial?: InputMaybe<EnumCountryLanguageIsOfficialFieldUpdateOperationsInput>;
  language?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentage?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CountryLanguageUpsertWithWhereUniqueWithoutCountryInput = {
  create: CountryLanguageCreateWithoutCountryInput;
  update: CountryLanguageUpdateWithoutCountryInput;
  where: CountryLanguageWhereUniqueInput;
};

export type CountryLanguageWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CountryLanguageWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CountryLanguageWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CountryLanguageWhereInput>>>;
  country?: InputMaybe<CountryRelationFilter>;
  countryCode?: InputMaybe<StringFilter>;
  isOfficial?: InputMaybe<EnumCountryLanguageIsOfficialFilter>;
  language?: InputMaybe<StringFilter>;
  percentage?: InputMaybe<DecimalFilter>;
};

export type CountryLanguageWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<CountryLanguageWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CountryLanguageWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CountryLanguageWhereInput>>>;
  country?: InputMaybe<CountryRelationFilter>;
  countryCode?: InputMaybe<StringFilter>;
  countryCode_language?: InputMaybe<CountryLanguageCountryCodeLanguageCompoundUniqueInput>;
  isOfficial?: InputMaybe<EnumCountryLanguageIsOfficialFilter>;
  language?: InputMaybe<StringFilter>;
  percentage?: InputMaybe<DecimalFilter>;
};

export type CountryMaxAggregateOutputType = {
  __typename?: 'CountryMaxAggregateOutputType';
  capital?: Maybe<Scalars['Int']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  code2?: Maybe<Scalars['String']['output']>;
  continent?: Maybe<CountryContinent>;
  gnp?: Maybe<Scalars['Decimal']['output']>;
  gnpoId?: Maybe<Scalars['Decimal']['output']>;
  governmentForm?: Maybe<Scalars['String']['output']>;
  headOfState?: Maybe<Scalars['String']['output']>;
  indepYear?: Maybe<Scalars['Int']['output']>;
  lifeExpectancy?: Maybe<Scalars['Decimal']['output']>;
  localName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  population?: Maybe<Scalars['Int']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  surfaceArea?: Maybe<Scalars['Decimal']['output']>;
};

export type CountryMaxOrderByAggregateInput = {
  capital?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  code2?: InputMaybe<SortOrder>;
  continent?: InputMaybe<SortOrder>;
  gnp?: InputMaybe<SortOrder>;
  gnpoId?: InputMaybe<SortOrder>;
  governmentForm?: InputMaybe<SortOrder>;
  headOfState?: InputMaybe<SortOrder>;
  indepYear?: InputMaybe<SortOrder>;
  lifeExpectancy?: InputMaybe<SortOrder>;
  localName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  surfaceArea?: InputMaybe<SortOrder>;
};

export type CountryMinAggregateOutputType = {
  __typename?: 'CountryMinAggregateOutputType';
  capital?: Maybe<Scalars['Int']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  code2?: Maybe<Scalars['String']['output']>;
  continent?: Maybe<CountryContinent>;
  gnp?: Maybe<Scalars['Decimal']['output']>;
  gnpoId?: Maybe<Scalars['Decimal']['output']>;
  governmentForm?: Maybe<Scalars['String']['output']>;
  headOfState?: Maybe<Scalars['String']['output']>;
  indepYear?: Maybe<Scalars['Int']['output']>;
  lifeExpectancy?: Maybe<Scalars['Decimal']['output']>;
  localName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  population?: Maybe<Scalars['Int']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  surfaceArea?: Maybe<Scalars['Decimal']['output']>;
};

export type CountryMinOrderByAggregateInput = {
  capital?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  code2?: InputMaybe<SortOrder>;
  continent?: InputMaybe<SortOrder>;
  gnp?: InputMaybe<SortOrder>;
  gnpoId?: InputMaybe<SortOrder>;
  governmentForm?: InputMaybe<SortOrder>;
  headOfState?: InputMaybe<SortOrder>;
  indepYear?: InputMaybe<SortOrder>;
  lifeExpectancy?: InputMaybe<SortOrder>;
  localName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  surfaceArea?: InputMaybe<SortOrder>;
};

export type CountryOrderByWithAggregationInput = {
  _avg?: InputMaybe<CountryAvgOrderByAggregateInput>;
  _count?: InputMaybe<CountryCountOrderByAggregateInput>;
  _max?: InputMaybe<CountryMaxOrderByAggregateInput>;
  _min?: InputMaybe<CountryMinOrderByAggregateInput>;
  _sum?: InputMaybe<CountrySumOrderByAggregateInput>;
  capital?: InputMaybe<SortOrderInput>;
  code?: InputMaybe<SortOrder>;
  code2?: InputMaybe<SortOrder>;
  continent?: InputMaybe<SortOrder>;
  gnp?: InputMaybe<SortOrderInput>;
  gnpoId?: InputMaybe<SortOrderInput>;
  governmentForm?: InputMaybe<SortOrder>;
  headOfState?: InputMaybe<SortOrderInput>;
  indepYear?: InputMaybe<SortOrderInput>;
  lifeExpectancy?: InputMaybe<SortOrderInput>;
  localName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  surfaceArea?: InputMaybe<SortOrder>;
};

export type CountryOrderByWithRelationInput = {
  capital?: InputMaybe<SortOrderInput>;
  city?: InputMaybe<CityOrderByRelationAggregateInput>;
  code?: InputMaybe<SortOrder>;
  code2?: InputMaybe<SortOrder>;
  continent?: InputMaybe<SortOrder>;
  countryLanguage?: InputMaybe<CountryLanguageOrderByRelationAggregateInput>;
  gnp?: InputMaybe<SortOrderInput>;
  gnpoId?: InputMaybe<SortOrderInput>;
  governmentForm?: InputMaybe<SortOrder>;
  headOfState?: InputMaybe<SortOrderInput>;
  indepYear?: InputMaybe<SortOrderInput>;
  lifeExpectancy?: InputMaybe<SortOrderInput>;
  localName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  surfaceArea?: InputMaybe<SortOrder>;
};

export type CountryRelationFilter = {
  is?: InputMaybe<CountryWhereInput>;
  isNot?: InputMaybe<CountryWhereInput>;
};

export enum CountryScalarFieldEnum {
  Capital = 'capital',
  Code = 'code',
  Code2 = 'code2',
  Continent = 'continent',
  Gnp = 'gnp',
  GnpoId = 'gnpoId',
  GovernmentForm = 'governmentForm',
  HeadOfState = 'headOfState',
  IndepYear = 'indepYear',
  LifeExpectancy = 'lifeExpectancy',
  LocalName = 'localName',
  Name = 'name',
  Population = 'population',
  Region = 'region',
  SurfaceArea = 'surfaceArea'
}

export type CountryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<CountryScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CountryScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CountryScalarWhereWithAggregatesInput>>>;
  capital?: InputMaybe<IntNullableWithAggregatesFilter>;
  code?: InputMaybe<StringWithAggregatesFilter>;
  code2?: InputMaybe<StringWithAggregatesFilter>;
  continent?: InputMaybe<EnumCountryContinentWithAggregatesFilter>;
  gnp?: InputMaybe<DecimalNullableWithAggregatesFilter>;
  gnpoId?: InputMaybe<DecimalNullableWithAggregatesFilter>;
  governmentForm?: InputMaybe<StringWithAggregatesFilter>;
  headOfState?: InputMaybe<StringNullableWithAggregatesFilter>;
  indepYear?: InputMaybe<IntNullableWithAggregatesFilter>;
  lifeExpectancy?: InputMaybe<DecimalNullableWithAggregatesFilter>;
  localName?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  population?: InputMaybe<IntWithAggregatesFilter>;
  region?: InputMaybe<StringWithAggregatesFilter>;
  surfaceArea?: InputMaybe<DecimalWithAggregatesFilter>;
};

export type CountrySumAggregateOutputType = {
  __typename?: 'CountrySumAggregateOutputType';
  capital?: Maybe<Scalars['Int']['output']>;
  gnp?: Maybe<Scalars['Decimal']['output']>;
  gnpoId?: Maybe<Scalars['Decimal']['output']>;
  indepYear?: Maybe<Scalars['Int']['output']>;
  lifeExpectancy?: Maybe<Scalars['Decimal']['output']>;
  population?: Maybe<Scalars['Int']['output']>;
  surfaceArea?: Maybe<Scalars['Decimal']['output']>;
};

export type CountrySumOrderByAggregateInput = {
  capital?: InputMaybe<SortOrder>;
  gnp?: InputMaybe<SortOrder>;
  gnpoId?: InputMaybe<SortOrder>;
  indepYear?: InputMaybe<SortOrder>;
  lifeExpectancy?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  surfaceArea?: InputMaybe<SortOrder>;
};

export type CountryUncheckedCreateInput = {
  capital?: InputMaybe<Scalars['Int']['input']>;
  city?: InputMaybe<CityUncheckedCreateNestedManyWithoutCountryInput>;
  code: Scalars['String']['input'];
  code2: Scalars['String']['input'];
  continent?: InputMaybe<CountryContinent>;
  countryLanguage?: InputMaybe<CountryLanguageUncheckedCreateNestedManyWithoutCountryInput>;
  gnp?: InputMaybe<Scalars['Decimal']['input']>;
  gnpoId?: InputMaybe<Scalars['Decimal']['input']>;
  governmentForm: Scalars['String']['input'];
  headOfState?: InputMaybe<Scalars['String']['input']>;
  indepYear?: InputMaybe<Scalars['Int']['input']>;
  lifeExpectancy?: InputMaybe<Scalars['Decimal']['input']>;
  localName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  population?: InputMaybe<Scalars['Int']['input']>;
  region: Scalars['String']['input'];
  surfaceArea?: InputMaybe<Scalars['Decimal']['input']>;
};

export type CountryUncheckedCreateWithoutCityInput = {
  capital?: InputMaybe<Scalars['Int']['input']>;
  code: Scalars['String']['input'];
  code2: Scalars['String']['input'];
  continent?: InputMaybe<CountryContinent>;
  countryLanguage?: InputMaybe<CountryLanguageUncheckedCreateNestedManyWithoutCountryInput>;
  gnp?: InputMaybe<Scalars['Decimal']['input']>;
  gnpoId?: InputMaybe<Scalars['Decimal']['input']>;
  governmentForm: Scalars['String']['input'];
  headOfState?: InputMaybe<Scalars['String']['input']>;
  indepYear?: InputMaybe<Scalars['Int']['input']>;
  lifeExpectancy?: InputMaybe<Scalars['Decimal']['input']>;
  localName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  population?: InputMaybe<Scalars['Int']['input']>;
  region: Scalars['String']['input'];
  surfaceArea?: InputMaybe<Scalars['Decimal']['input']>;
};

export type CountryUncheckedCreateWithoutCountryLanguageInput = {
  capital?: InputMaybe<Scalars['Int']['input']>;
  city?: InputMaybe<CityUncheckedCreateNestedManyWithoutCountryInput>;
  code: Scalars['String']['input'];
  code2: Scalars['String']['input'];
  continent?: InputMaybe<CountryContinent>;
  gnp?: InputMaybe<Scalars['Decimal']['input']>;
  gnpoId?: InputMaybe<Scalars['Decimal']['input']>;
  governmentForm: Scalars['String']['input'];
  headOfState?: InputMaybe<Scalars['String']['input']>;
  indepYear?: InputMaybe<Scalars['Int']['input']>;
  lifeExpectancy?: InputMaybe<Scalars['Decimal']['input']>;
  localName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  population?: InputMaybe<Scalars['Int']['input']>;
  region: Scalars['String']['input'];
  surfaceArea?: InputMaybe<Scalars['Decimal']['input']>;
};

export type CountryUncheckedUpdateInput = {
  capital?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  city?: InputMaybe<CityUncheckedUpdateManyWithoutCountryNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  code2?: InputMaybe<StringFieldUpdateOperationsInput>;
  continent?: InputMaybe<EnumCountryContinentFieldUpdateOperationsInput>;
  countryLanguage?: InputMaybe<CountryLanguageUncheckedUpdateManyWithoutCountryNestedInput>;
  gnp?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  gnpoId?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  governmentForm?: InputMaybe<StringFieldUpdateOperationsInput>;
  headOfState?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  indepYear?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  lifeExpectancy?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  localName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  population?: InputMaybe<IntFieldUpdateOperationsInput>;
  region?: InputMaybe<StringFieldUpdateOperationsInput>;
  surfaceArea?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CountryUncheckedUpdateManyInput = {
  capital?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  code2?: InputMaybe<StringFieldUpdateOperationsInput>;
  continent?: InputMaybe<EnumCountryContinentFieldUpdateOperationsInput>;
  gnp?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  gnpoId?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  governmentForm?: InputMaybe<StringFieldUpdateOperationsInput>;
  headOfState?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  indepYear?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  lifeExpectancy?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  localName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  population?: InputMaybe<IntFieldUpdateOperationsInput>;
  region?: InputMaybe<StringFieldUpdateOperationsInput>;
  surfaceArea?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CountryUncheckedUpdateWithoutCityInput = {
  capital?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  code2?: InputMaybe<StringFieldUpdateOperationsInput>;
  continent?: InputMaybe<EnumCountryContinentFieldUpdateOperationsInput>;
  countryLanguage?: InputMaybe<CountryLanguageUncheckedUpdateManyWithoutCountryNestedInput>;
  gnp?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  gnpoId?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  governmentForm?: InputMaybe<StringFieldUpdateOperationsInput>;
  headOfState?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  indepYear?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  lifeExpectancy?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  localName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  population?: InputMaybe<IntFieldUpdateOperationsInput>;
  region?: InputMaybe<StringFieldUpdateOperationsInput>;
  surfaceArea?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CountryUncheckedUpdateWithoutCountryLanguageInput = {
  capital?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  city?: InputMaybe<CityUncheckedUpdateManyWithoutCountryNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  code2?: InputMaybe<StringFieldUpdateOperationsInput>;
  continent?: InputMaybe<EnumCountryContinentFieldUpdateOperationsInput>;
  gnp?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  gnpoId?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  governmentForm?: InputMaybe<StringFieldUpdateOperationsInput>;
  headOfState?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  indepYear?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  lifeExpectancy?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  localName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  population?: InputMaybe<IntFieldUpdateOperationsInput>;
  region?: InputMaybe<StringFieldUpdateOperationsInput>;
  surfaceArea?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CountryUpdateInput = {
  capital?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  city?: InputMaybe<CityUpdateManyWithoutCountryNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  code2?: InputMaybe<StringFieldUpdateOperationsInput>;
  continent?: InputMaybe<EnumCountryContinentFieldUpdateOperationsInput>;
  countryLanguage?: InputMaybe<CountryLanguageUpdateManyWithoutCountryNestedInput>;
  gnp?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  gnpoId?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  governmentForm?: InputMaybe<StringFieldUpdateOperationsInput>;
  headOfState?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  indepYear?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  lifeExpectancy?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  localName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  population?: InputMaybe<IntFieldUpdateOperationsInput>;
  region?: InputMaybe<StringFieldUpdateOperationsInput>;
  surfaceArea?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CountryUpdateManyMutationInput = {
  capital?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  code2?: InputMaybe<StringFieldUpdateOperationsInput>;
  continent?: InputMaybe<EnumCountryContinentFieldUpdateOperationsInput>;
  gnp?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  gnpoId?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  governmentForm?: InputMaybe<StringFieldUpdateOperationsInput>;
  headOfState?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  indepYear?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  lifeExpectancy?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  localName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  population?: InputMaybe<IntFieldUpdateOperationsInput>;
  region?: InputMaybe<StringFieldUpdateOperationsInput>;
  surfaceArea?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CountryUpdateOneRequiredWithoutCityNestedInput = {
  connect?: InputMaybe<CountryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CountryCreateOrConnectWithoutCityInput>;
  create?: InputMaybe<CountryCreateWithoutCityInput>;
  update?: InputMaybe<CountryUpdateToOneWithWhereWithoutCityInput>;
  upsert?: InputMaybe<CountryUpsertWithoutCityInput>;
};

export type CountryUpdateOneRequiredWithoutCountryLanguageNestedInput = {
  connect?: InputMaybe<CountryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CountryCreateOrConnectWithoutCountryLanguageInput>;
  create?: InputMaybe<CountryCreateWithoutCountryLanguageInput>;
  update?: InputMaybe<CountryUpdateToOneWithWhereWithoutCountryLanguageInput>;
  upsert?: InputMaybe<CountryUpsertWithoutCountryLanguageInput>;
};

export type CountryUpdateToOneWithWhereWithoutCityInput = {
  data: CountryUpdateWithoutCityInput;
  where?: InputMaybe<CountryWhereInput>;
};

export type CountryUpdateToOneWithWhereWithoutCountryLanguageInput = {
  data: CountryUpdateWithoutCountryLanguageInput;
  where?: InputMaybe<CountryWhereInput>;
};

export type CountryUpdateWithoutCityInput = {
  capital?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  code2?: InputMaybe<StringFieldUpdateOperationsInput>;
  continent?: InputMaybe<EnumCountryContinentFieldUpdateOperationsInput>;
  countryLanguage?: InputMaybe<CountryLanguageUpdateManyWithoutCountryNestedInput>;
  gnp?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  gnpoId?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  governmentForm?: InputMaybe<StringFieldUpdateOperationsInput>;
  headOfState?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  indepYear?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  lifeExpectancy?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  localName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  population?: InputMaybe<IntFieldUpdateOperationsInput>;
  region?: InputMaybe<StringFieldUpdateOperationsInput>;
  surfaceArea?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CountryUpdateWithoutCountryLanguageInput = {
  capital?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  city?: InputMaybe<CityUpdateManyWithoutCountryNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  code2?: InputMaybe<StringFieldUpdateOperationsInput>;
  continent?: InputMaybe<EnumCountryContinentFieldUpdateOperationsInput>;
  gnp?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  gnpoId?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  governmentForm?: InputMaybe<StringFieldUpdateOperationsInput>;
  headOfState?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  indepYear?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  lifeExpectancy?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  localName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  population?: InputMaybe<IntFieldUpdateOperationsInput>;
  region?: InputMaybe<StringFieldUpdateOperationsInput>;
  surfaceArea?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CountryUpsertWithoutCityInput = {
  create: CountryCreateWithoutCityInput;
  update: CountryUpdateWithoutCityInput;
  where?: InputMaybe<CountryWhereInput>;
};

export type CountryUpsertWithoutCountryLanguageInput = {
  create: CountryCreateWithoutCountryLanguageInput;
  update: CountryUpdateWithoutCountryLanguageInput;
  where?: InputMaybe<CountryWhereInput>;
};

export type CountryWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CountryWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CountryWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CountryWhereInput>>>;
  capital?: InputMaybe<IntNullableFilter>;
  city?: InputMaybe<CityListRelationFilter>;
  code?: InputMaybe<StringFilter>;
  code2?: InputMaybe<StringFilter>;
  continent?: InputMaybe<EnumCountryContinentFilter>;
  countryLanguage?: InputMaybe<CountryLanguageListRelationFilter>;
  gnp?: InputMaybe<DecimalNullableFilter>;
  gnpoId?: InputMaybe<DecimalNullableFilter>;
  governmentForm?: InputMaybe<StringFilter>;
  headOfState?: InputMaybe<StringNullableFilter>;
  indepYear?: InputMaybe<IntNullableFilter>;
  lifeExpectancy?: InputMaybe<DecimalNullableFilter>;
  localName?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  population?: InputMaybe<IntFilter>;
  region?: InputMaybe<StringFilter>;
  surfaceArea?: InputMaybe<DecimalFilter>;
};

export type CountryWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<CountryWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CountryWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CountryWhereInput>>>;
  capital?: InputMaybe<IntNullableFilter>;
  city?: InputMaybe<CityListRelationFilter>;
  code?: InputMaybe<Scalars['String']['input']>;
  code2?: InputMaybe<StringFilter>;
  continent?: InputMaybe<EnumCountryContinentFilter>;
  countryLanguage?: InputMaybe<CountryLanguageListRelationFilter>;
  gnp?: InputMaybe<DecimalNullableFilter>;
  gnpoId?: InputMaybe<DecimalNullableFilter>;
  governmentForm?: InputMaybe<StringFilter>;
  headOfState?: InputMaybe<StringNullableFilter>;
  indepYear?: InputMaybe<IntNullableFilter>;
  lifeExpectancy?: InputMaybe<DecimalNullableFilter>;
  localName?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  population?: InputMaybe<IntFilter>;
  region?: InputMaybe<StringFilter>;
  surfaceArea?: InputMaybe<DecimalFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type DecimalFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Decimal']['input']>;
  divide?: InputMaybe<Scalars['Decimal']['input']>;
  increment?: InputMaybe<Scalars['Decimal']['input']>;
  multiply?: InputMaybe<Scalars['Decimal']['input']>;
  set?: InputMaybe<Scalars['Decimal']['input']>;
};

export type DecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
};

export type DecimalNullableFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
};

export type DecimalNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDecimalNullableFilter>;
  _min?: InputMaybe<NestedDecimalNullableFilter>;
  _sum?: InputMaybe<NestedDecimalNullableFilter>;
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
};

export type DecimalWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDecimalFilter>;
  _min?: InputMaybe<NestedDecimalFilter>;
  _sum?: InputMaybe<NestedDecimalFilter>;
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
};

export type EnumCountryContinentFieldUpdateOperationsInput = {
  set?: InputMaybe<CountryContinent>;
};

export type EnumCountryContinentFilter = {
  equals?: InputMaybe<CountryContinent>;
  in?: InputMaybe<Array<InputMaybe<CountryContinent>>>;
  not?: InputMaybe<NestedEnumCountryContinentFilter>;
  notIn?: InputMaybe<Array<InputMaybe<CountryContinent>>>;
};

export type EnumCountryContinentWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCountryContinentFilter>;
  _min?: InputMaybe<NestedEnumCountryContinentFilter>;
  equals?: InputMaybe<CountryContinent>;
  in?: InputMaybe<Array<InputMaybe<CountryContinent>>>;
  not?: InputMaybe<NestedEnumCountryContinentWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<CountryContinent>>>;
};

export type EnumCountryLanguageIsOfficialFieldUpdateOperationsInput = {
  set?: InputMaybe<CountryLanguageIsOfficial>;
};

export type EnumCountryLanguageIsOfficialFilter = {
  equals?: InputMaybe<CountryLanguageIsOfficial>;
  in?: InputMaybe<Array<InputMaybe<CountryLanguageIsOfficial>>>;
  not?: InputMaybe<NestedEnumCountryLanguageIsOfficialFilter>;
  notIn?: InputMaybe<Array<InputMaybe<CountryLanguageIsOfficial>>>;
};

export type EnumCountryLanguageIsOfficialWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCountryLanguageIsOfficialFilter>;
  _min?: InputMaybe<NestedEnumCountryLanguageIsOfficialFilter>;
  equals?: InputMaybe<CountryLanguageIsOfficial>;
  in?: InputMaybe<Array<InputMaybe<CountryLanguageIsOfficial>>>;
  not?: InputMaybe<NestedEnumCountryLanguageIsOfficialWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<CountryLanguageIsOfficial>>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['Json']['input']>;
  array_ends_with?: InputMaybe<Scalars['Json']['input']>;
  array_starts_with?: InputMaybe<Scalars['Json']['input']>;
  equals?: InputMaybe<Scalars['Json']['input']>;
  gt?: InputMaybe<Scalars['Json']['input']>;
  gte?: InputMaybe<Scalars['Json']['input']>;
  lt?: InputMaybe<Scalars['Json']['input']>;
  lte?: InputMaybe<Scalars['Json']['input']>;
  not?: InputMaybe<Scalars['Json']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum JsonNullValueFilter {
  AnyNull = 'AnyNull',
  DbNull = 'DbNull',
  JsonNull = 'JsonNull'
}

export enum JsonNullValueInput {
  JsonNull = 'JsonNull'
}

export type JsonWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedJsonFilter>;
  _min?: InputMaybe<NestedJsonFilter>;
  array_contains?: InputMaybe<Scalars['Json']['input']>;
  array_ends_with?: InputMaybe<Scalars['Json']['input']>;
  array_starts_with?: InputMaybe<Scalars['Json']['input']>;
  equals?: InputMaybe<Scalars['Json']['input']>;
  gt?: InputMaybe<Scalars['Json']['input']>;
  gte?: InputMaybe<Scalars['Json']['input']>;
  lt?: InputMaybe<Scalars['Json']['input']>;
  lte?: InputMaybe<Scalars['Json']['input']>;
  not?: InputMaybe<Scalars['Json']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneCity: City;
  createOneUser: User;
  deleteManyCity: BatchPayload;
  deleteOneCity?: Maybe<City>;
  updateManyCity: BatchPayload;
  updateOneCity: City;
  upsertOneCity: City;
};


export type MutationCreateOneCityArgs = {
  data: CityCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyCityArgs = {
  where?: InputMaybe<CityWhereInput>;
};


export type MutationDeleteOneCityArgs = {
  where: CityWhereUniqueInput;
};


export type MutationUpdateManyCityArgs = {
  data: CityUpdateManyMutationInput;
  where?: InputMaybe<CityWhereInput>;
};


export type MutationUpdateOneCityArgs = {
  data: CityUpdateInput;
  where: CityWhereUniqueInput;
};


export type MutationUpsertOneCityArgs = {
  create: CityCreateInput;
  update: CityUpdateInput;
  where: CityWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type NestedDecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
};

export type NestedDecimalNullableFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
};

export type NestedDecimalNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDecimalNullableFilter>;
  _min?: InputMaybe<NestedDecimalNullableFilter>;
  _sum?: InputMaybe<NestedDecimalNullableFilter>;
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
};

export type NestedDecimalWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDecimalFilter>;
  _min?: InputMaybe<NestedDecimalFilter>;
  _sum?: InputMaybe<NestedDecimalFilter>;
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
};

export type NestedEnumCountryContinentFilter = {
  equals?: InputMaybe<CountryContinent>;
  in?: InputMaybe<Array<InputMaybe<CountryContinent>>>;
  not?: InputMaybe<NestedEnumCountryContinentFilter>;
  notIn?: InputMaybe<Array<InputMaybe<CountryContinent>>>;
};

export type NestedEnumCountryContinentWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCountryContinentFilter>;
  _min?: InputMaybe<NestedEnumCountryContinentFilter>;
  equals?: InputMaybe<CountryContinent>;
  in?: InputMaybe<Array<InputMaybe<CountryContinent>>>;
  not?: InputMaybe<NestedEnumCountryContinentWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<CountryContinent>>>;
};

export type NestedEnumCountryLanguageIsOfficialFilter = {
  equals?: InputMaybe<CountryLanguageIsOfficial>;
  in?: InputMaybe<Array<InputMaybe<CountryLanguageIsOfficial>>>;
  not?: InputMaybe<NestedEnumCountryLanguageIsOfficialFilter>;
  notIn?: InputMaybe<Array<InputMaybe<CountryLanguageIsOfficial>>>;
};

export type NestedEnumCountryLanguageIsOfficialWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCountryLanguageIsOfficialFilter>;
  _min?: InputMaybe<NestedEnumCountryLanguageIsOfficialFilter>;
  equals?: InputMaybe<CountryLanguageIsOfficial>;
  in?: InputMaybe<Array<InputMaybe<CountryLanguageIsOfficial>>>;
  not?: InputMaybe<NestedEnumCountryLanguageIsOfficialWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<CountryLanguageIsOfficial>>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type NestedJsonFilter = {
  array_contains?: InputMaybe<Scalars['Json']['input']>;
  array_ends_with?: InputMaybe<Scalars['Json']['input']>;
  array_starts_with?: InputMaybe<Scalars['Json']['input']>;
  equals?: InputMaybe<Scalars['Json']['input']>;
  gt?: InputMaybe<Scalars['Json']['input']>;
  gte?: InputMaybe<Scalars['Json']['input']>;
  lt?: InputMaybe<Scalars['Json']['input']>;
  lte?: InputMaybe<Scalars['Json']['input']>;
  not?: InputMaybe<Scalars['Json']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NullableDecimalFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Decimal']['input']>;
  divide?: InputMaybe<Scalars['Decimal']['input']>;
  increment?: InputMaybe<Scalars['Decimal']['input']>;
  multiply?: InputMaybe<Scalars['Decimal']['input']>;
  set?: InputMaybe<Scalars['Decimal']['input']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Query = {
  __typename?: 'Query';
  aggregateCity?: Maybe<AggregateCity>;
  findFirstCity?: Maybe<City>;
  findFirstUser?: Maybe<User>;
  findManyCity: Array<City>;
  findManyCityCount: Scalars['Int']['output'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int']['output'];
  findUniqueCity?: Maybe<City>;
  findUniqueUser?: Maybe<User>;
};


export type QueryAggregateCityArgs = {
  cursor?: InputMaybe<CityWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<CityOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CityWhereInput>;
};


export type QueryFindFirstCityArgs = {
  cursor?: InputMaybe<CityWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CityScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CityOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CityWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyCityArgs = {
  cursor?: InputMaybe<CityWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CityScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CityOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CityWhereInput>;
};


export type QueryFindManyCityCountArgs = {
  cursor?: InputMaybe<CityWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CityScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CityOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CityWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindUniqueCityArgs = {
  where: CityWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum TransactionIsolationLevel {
  ReadCommitted = 'ReadCommitted',
  ReadUncommitted = 'ReadUncommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable'
}

/** This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments */
export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  password: Scalars['Void']['output'];
  roles: Scalars['Void']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isActive: Scalars['Int']['output'];
  password: Scalars['Void']['output'];
  roles: Scalars['Void']['output'];
  updatedAt: Scalars['Int']['output'];
  username: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isActive?: InputMaybe<SortOrder>;
  password?: InputMaybe<Scalars['Void']['input']>;
  roles?: InputMaybe<Scalars['Void']['input']>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['Void']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Void']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  password: Scalars['String']['input'];
  roles?: InputMaybe<Scalars['Void']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['Void']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Void']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  password: Scalars['String']['input'];
  roles?: InputMaybe<Scalars['Void']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
};

export type UserGroupByOutputType = {
  __typename?: 'UserGroupByOutputType';
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  password: Scalars['Void']['output'];
  roles: Scalars['Void']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  password?: Maybe<Scalars['Void']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isActive?: InputMaybe<SortOrder>;
  password?: InputMaybe<Scalars['Void']['input']>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  password?: Maybe<Scalars['Void']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isActive?: InputMaybe<SortOrder>;
  password?: InputMaybe<Scalars['Void']['input']>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isActive?: InputMaybe<SortOrder>;
  password?: InputMaybe<Scalars['Void']['input']>;
  roles?: InputMaybe<Scalars['Void']['input']>;
  updatedAt?: InputMaybe<SortOrderInput>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isActive?: InputMaybe<SortOrder>;
  password?: InputMaybe<Scalars['Void']['input']>;
  roles?: InputMaybe<Scalars['Void']['input']>;
  updatedAt?: InputMaybe<SortOrderInput>;
  username?: InputMaybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  IsActive = 'isActive',
  Password = 'password',
  Roles = 'roles',
  UpdatedAt = 'updatedAt',
  Username = 'username'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  isActive?: InputMaybe<BoolWithAggregatesFilter>;
  password?: InputMaybe<Scalars['Void']['input']>;
  roles?: InputMaybe<Scalars['Void']['input']>;
  updatedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['Void']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Void']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  password: Scalars['String']['input'];
  roles?: InputMaybe<Scalars['Void']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
};

export type UserUncheckedUpdateInput = {
  createdAt?: InputMaybe<Scalars['Void']['input']>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<Scalars['Void']['input']>;
  isActive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  roles?: InputMaybe<Scalars['Void']['input']>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<Scalars['Void']['input']>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<Scalars['Void']['input']>;
  isActive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  roles?: InputMaybe<Scalars['Void']['input']>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<Scalars['Void']['input']>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<Scalars['Void']['input']>;
  isActive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  roles?: InputMaybe<Scalars['Void']['input']>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['Void']['input']>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<Scalars['Void']['input']>;
  isActive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  roles?: InputMaybe<Scalars['Void']['input']>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  password?: InputMaybe<Scalars['Void']['input']>;
  roles?: InputMaybe<Scalars['Void']['input']>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<BoolFilter>;
  password?: InputMaybe<Scalars['Void']['input']>;
  roles?: InputMaybe<Scalars['Void']['input']>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type CityAndUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CityAndUserQuery = { __typename?: 'Query', cities: Array<{ __typename?: 'City', id: number, name: string, country: { __typename?: 'Country', code: string, name: string } }>, users: Array<{ __typename?: 'User', username: string }> };

export type CityAndUser2QueryVariables = Exact<{ [key: string]: never; }>;


export type CityAndUser2Query = { __typename?: 'Query', findManyCity: Array<{ __typename?: 'City', id: number, name: string, country: { __typename?: 'Country', code: string, name: string } }> };


export const CityAndUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CityAndUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"cities"},"name":{"kind":"Name","value":"findManyCity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"users"},"name":{"kind":"Name","value":"findManyUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<CityAndUserQuery, CityAndUserQueryVariables>;
export const CityAndUser2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CityAndUser2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findManyCity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CityAndUser2Query, CityAndUser2QueryVariables>;