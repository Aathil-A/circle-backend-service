import { Resolver } from '@nestjs/graphql';
import { AgentService } from '../service/agent.service';

@Resolver()
export class AgentResolver {
    constructor(
        private agentService: AgentService,
    ) { }
    
}
