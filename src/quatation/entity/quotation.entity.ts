import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { QuotationStatus } from '../enums/quotation.status';

@Entity()
export class Quotation extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  userId!: string;

  @Column('uuid')
  enquiryId!: string;

  @Column('uuid')
  agentId!: string;

  @Column()
  price!: number;

  @Column({ nullable: true })
  fileLink?: string;

  @Column({ nullable: true })
  notes?: string;

  @Column({ default: QuotationStatus.PENDING })
  status: QuotationStatus;
}
