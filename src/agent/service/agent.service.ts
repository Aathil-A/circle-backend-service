import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAgentInput } from '../../schema/graphql.schema';
import { Agent } from '../entity/agent.entity';

@Injectable()
export class AgentService {
  constructor(
    @InjectRepository(Agent)
    private agentRepo: Repository<Agent>,
  ) {}

  async findOne(id: string) {
    return await this.agentRepo.findOne({
      where: { id },
    });
  }

  async findOneOrFail() {}

  async find() {
    return await this.agentRepo.find();
  }

  async findOrFail() {}

  async create(input: CreateAgentInput) {
    const newAgent = {
      name: input.name,
      address: input.address,
      phone: input.phone,
    } as Agent;
    return this.save(newAgent);
  }
  async save(input: Partial<Agent>) {
    return await this.agentRepo.save(input);
  }

  async remove() {}
}
