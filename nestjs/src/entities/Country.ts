import { Column, Entity, OneToMany } from 'typeorm';
import { City } from './City';
import { Countrylanguage } from './Countrylanguage';

@Entity('country', { schema: 'world' })
export class Country {
  @Column('char', { primary: true, name: 'Code', length: 3 })
  code: string;

  @Column('char', { name: 'Name', length: 52 })
  name: string;

  @Column('enum', {
    name: 'Continent',
    enum: [
      'Asia',
      'Europe',
      'North America',
      'Africa',
      'Oceania',
      'Antarctica',
      'South America',
    ],
    default: () => "'Asia'",
  })
  continent:
    | 'Asia'
    | 'Europe'
    | 'North America'
    | 'Africa'
    | 'Oceania'
    | 'Antarctica'
    | 'South America';

  @Column('char', { name: 'Region', length: 26 })
  region: string;

  @Column('decimal', {
    name: 'SurfaceArea',
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  surfaceArea: string;

  @Column('smallint', { name: 'IndepYear', nullable: true })
  indepYear: number | null;

  @Column('int', { name: 'Population', default: () => "'0'" })
  population: number;

  @Column('decimal', {
    name: 'LifeExpectancy',
    nullable: true,
    precision: 3,
    scale: 1,
  })
  lifeExpectancy: string | null;

  @Column('decimal', { name: 'GNP', nullable: true, precision: 10, scale: 2 })
  gnp: string | null;

  @Column('decimal', {
    name: 'GNPOld',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  gnpOld: string | null;

  @Column('char', { name: 'LocalName', length: 45 })
  localName: string;

  @Column('char', { name: 'GovernmentForm', length: 45 })
  governmentForm: string;

  @Column('char', { name: 'HeadOfState', nullable: true, length: 60 })
  headOfState: string | null;

  @Column('int', { name: 'Capital', nullable: true })
  capital: number | null;

  @Column('char', { name: 'Code2', length: 2 })
  code2: string;

  @OneToMany(() => City, (city) => city.countryCode2)
  cities: City[];

  @OneToMany(
    () => Countrylanguage,
    (countrylanguage) => countrylanguage.countryCode2,
  )
  countrylanguages: Countrylanguage[];
}
