import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateAgentInput, UpdateAgentInput } from '../../schema/graphql.schema';
import { AgentService } from '../service/agent.service';

@Resolver()
export class AgentResolver {
    constructor(
        private agentService: AgentService,
    ) { }
    
    @Mutation()
    async createAgent(@Args('input') input: CreateAgentInput) {
      return await this.agentService.save(input);
    }
  
    @Query()
    async getAgents() {
      return await this.agentService.find();
    }
  
    @Query()
    async getAgent(@Args('id') id: string) {
      return await this.agentService.findOne(id);
    }
  
    // @Mutation()
    // async updateAgent(
    //   @Args('id') id: string,
    //   @Args('input') input: UpdateAgentInput,
    // ) {
    //   return await this.agentService.update(id, input);
    // }
  
    // @Mutation()
    // async deleteAgent(@Args('id') id: string) {
    //   return await this.agentService.delete(id);
    // }

}
