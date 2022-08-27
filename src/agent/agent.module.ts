import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agent } from './entity/agent.entity';
import { AgentService } from './service/agent.service';
import { AgentResolver } from './resolver/agent.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Agent])],
  providers: [AgentService, AgentResolver],
})
export class AgentModule {}
