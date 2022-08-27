import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgentModule } from 'src/agent/agent.module';
import { Agent } from '../agent/entity/agent.entity';
import { NotificationService } from './notification.service';

@Module({
  imports: [AgentModule, TypeOrmModule.forFeature([Agent])],
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule {}
