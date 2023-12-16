import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm'
import { Activity } from './Activity'

@Entity()
export class Country {
  @PrimaryColumn()
    id: string

  @Column({
    length: 100
  })
    nombre: string

  @Column()
    bandera: string

  @Column()
    continente: string

  @Column()
    capital: string

  @Column()
    subregion: string

  @Column()
    Area: number

  @Column()
    Poblacion: number

  @ManyToMany(() => Activity, (activity) => activity.country)
    activities: Activity[]
}
