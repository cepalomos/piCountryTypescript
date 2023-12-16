import { Check, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Country } from './Country'

@Entity()
@Check('dificultad >= 1 AND dificultad <= 5')
@Check('duracion >= 0')
@Check("temporada IN ('Verano', 'Otoño', 'Invierno', 'Primavera')")
export class Activity {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({
    length: 100
  })
    nombre: string

  @Column({
    type: 'int'
  })
    dificultad: number

  @Column({
    type: 'int'
  })
    duracion: number

  @Column({
    enum: ['Verano', 'Otoño', 'Invierno', 'Primavera']
  })
    temporada: string

  @ManyToMany(() => Country)
  @JoinTable()
    country: Country[]
}
