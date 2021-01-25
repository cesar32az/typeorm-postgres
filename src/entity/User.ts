import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  lastName!: string;

  @Column('int', { default: 18 })
  age!: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: string;
}
