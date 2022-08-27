import BaseEntity from '../../common/utils/base.entity';
import { User } from '../../user/entity/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Destination } from '../../destination/entity/destination.entity';
import { EnquiryStatus } from '../../schema/graphql.schema';

@Entity()
export class Enquiry extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  userId!: string;

  @ManyToOne(() => User, (user) => user.enquiry)
  user!: User;

  @Column('uuid')
  destinationId!: string;

  @ManyToOne(() => Destination, (destination) => destination.enquiry)
  destination!: Destination;

  @Column()
  pickUpPoint!: string;

  @Column()
  startDate!: Date;

  @Column()
  returnDate!: Date;

  @Column()
  budget!: number;

  @Column({default: EnquiryStatus.QuotationPending})
  status!: string;

  @Column()
  adults!: number;

  @Column({ nullable: true })
  children?: number;

  @Column({ nullable: true })
  hotelStar?: string;

  @Column({ nullable: true })
  notes?: string;
}
