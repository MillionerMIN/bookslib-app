import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { BaseEntity } from 'src/core/entity/base.entity';

@Entity('books')
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  ageRestriction: number; //возрастные ограничения

  @Column({ nullable: true })
  ownerId: number;

  @Column({ nullable: true })
  image?: string;
}
