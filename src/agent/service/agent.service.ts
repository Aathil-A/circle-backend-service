import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GeneralApplicationException } from 'src/common/exception/general.application.exception';
import { FindOneOptions, ObjectLiteral, Repository } from 'typeorm';
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

  async findOneOrFail(
    query: ObjectLiteral | FindOneOptions<Agent> | string,
    errorMessage = 'Agent not found',
  ): Promise<Agent> {
    typeof query === 'string' && (query = { where: { id: query } });
    !Object.keys(query).includes('where') && (query = { where: query });
    const resp = await this.agentRepo.findOne(query);
    if (!resp) throw new GeneralApplicationException(errorMessage);
    return resp;
  }

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
        let agent:Agent = await this.findOne({ where: { id } })
        agent = {
            ...agent,
            ...input,
        }
        agent = await this.save(agent);
        return agent;
    }
    
  async remove() {}
}
