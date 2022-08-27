import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgentModule } from 'src/agent/agent.module';
import { NotificationService } from './notification.service';


@Module({
  imports: [AgentModule],
  providers: [NotificationService],
  exports: [NotificationService]
})
export class NotificationModule {}
