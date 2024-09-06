import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Country } from './Country';

@Index('CountryCode', ['countryCode'], {})
@Entity('city', { schema: 'world' })
export class City {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('char', { name: 'Name', length: 35 })
  name: string;

  @Column('char', { name: 'CountryCode', length: 3 })
  countryCode: string;

  @Column('char', { name: 'District', length: 20 })
  district: string;

  @Column('int', { name: 'Population', default: () => "'0'" })
  population: number;

  @ManyToOne(() => Country, (country) => country.cities, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'CountryCode', referencedColumnName: 'code' }])
  countryCode2: Country;
}
