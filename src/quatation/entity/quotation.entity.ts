import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { QuotationStatus } from '../enums/quotation.status';

@Entity()
export class Quotation extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  enquiryId: string;

  @Column()
  agentId: string;

  @Column()
  fileLink: string;

  @Column()
  notes: string;

  @Column({ default: QuotationStatus.PENDING })
  status: QuotationStatus;
}
