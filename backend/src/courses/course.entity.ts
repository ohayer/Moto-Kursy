import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  img_url: string;

  @Column()
  price: number;

  @Column()
  valid: boolean;

  @Column()
  position: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
