import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from '../../common/utils/base.entity';
import { AgentDestination } from './agent.destination.entity';

@Entity()
export class Agent extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  firebaseId?: string;

  @Column({ default: false })
  isVerified: boolean;

  @OneToMany(
    () => AgentDestination,
    (agentDestination) => agentDestination.agent,
    {
      cascade: true,
    },
  )
  public agentDestination!: AgentDestination[];
}
