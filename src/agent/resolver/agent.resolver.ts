import { InjectLoader } from '@keyvaluesystems/nestjs-dataloader';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import DataLoader from 'dataloader';
import { ObjectLiteral } from 'typeorm';
import {
  CreateAgentInput,
  LoginAgentInput,
  LoginInput,
  UpdateAgentInput,
} from '../../schema/graphql.schema';
import { AgentDestination } from '../entity/agent.destination.entity';
import { Agent } from '../entity/agent.entity';
import { AgentService } from '../service/agent.service';

@Resolver('Agent')
export class AgentResolver {
  constructor(private agentService: AgentService) {}

  @Mutation()
  async createAgent(@Args('input') input: CreateAgentInput) {
    return await this.agentService.save(input);
  }

  @Query()
  async getAgents() {
    return await this.agentService.find();
  }

  @Query()
  async loginAgent(@Args('input') input: LoginAgentInput) {
      return await this.agentService.findOne({ where: { name: input.name } });
  }

  @Query()
  async getAgent(@Args('id') id: string) {
      let agent = await this.agentService.findOne({ where: { id }, relations: { agentDestination: {destination: true}}});
      let result: ObjectLiteral = {...agent}
      result.destinations = agent.agentDestination.map(eachDestination => {
        return eachDestination.destination
      })
      return result;
  }

  @Mutation()
  async updateAgent(
    @Args('id') id: string,
    @Args('input') input: UpdateAgentInput,
  ) {
    return await this.agentService.update(id, input);
  }

  //   @Mutation()
  //   async deleteAgent(@Args('id') id: string) {
  //     return await this.agentService.delete(id);
  //   }

}
