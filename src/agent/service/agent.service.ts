import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectLiteral, Repository } from 'typeorm';
import {
  CreateAgentInput,
  UpdateAgentInput,
} from '../../schema/graphql.schema';
import { Agent } from '../entity/agent.entity';

@Injectable()
export class AgentService {
  constructor(
    @InjectRepository(Agent)
    private agentRepo: Repository<Agent>,
  ) {}

  async findOne(queryObj:ObjectLiteral) {
    return await this.agentRepo.findOne(queryObj);
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

    async update(id: string, input: UpdateAgentInput) {
        const agent = await this.findOne({where:{id}})
    }
    
  async remove() {}
}
