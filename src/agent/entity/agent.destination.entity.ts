import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from '../../common/utils/base.entity';
import { Destination } from '../../destination/entity/destination.entity';
import { Agent } from './agent.entity';

@Entity()
export class AgentDestination extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  public agentId!: string;
    
  @Column('uuid')
  public destinationId!: string;
    
  @ManyToOne(() => Agent, (agent) => agent.agentDestination, {
    orphanedRowAction: 'delete',
  })
  public agent!: Agent;
    
  @ManyToOne(() => Destination, (destination) => destination.agentDestination, {
  })
  public destination!: Destination;

}
