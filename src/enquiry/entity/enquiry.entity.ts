import BaseEntity from '../../common/utils/base.entity';
import { User } from 'src/user/entity/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Enquiry extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId!: string;

  @Column()
  destinationId!: string;

  @Column()
  pickUpPoint!: string;

  @Column()
  startDate!: Date;

  @Column()
  returnDate!: Date;

  @Column()
  budget!: number;

  @Column()
  adults!: number;

  @Column({ nullable: true })
  children?: number;

  @Column({ nullable: true })
  hotelStar?: string;

  @Column({ nullable: true })
  notes?: string;
}
