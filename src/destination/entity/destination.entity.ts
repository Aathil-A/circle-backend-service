import BaseEntity from '../../common/utils/base.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Enquiry } from '../../enquiry/entity/enquiry.entity';
import { AgentDestination } from '../../agent/entity/agent.destination.entity';

@Entity()
export class Destination extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name!: string;

  @OneToMany(() => Enquiry, (enquiry) => enquiry.destination)
  enquiry!: Enquiry[];

  @OneToMany(
    () => AgentDestination,
    (agentDestination) => agentDestination.destination,
  )
  public agentDestination!: AgentDestination[];
}
