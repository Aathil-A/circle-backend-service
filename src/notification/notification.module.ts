import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgentModule } from 'src/agent/agent.module';
import { NotificationService } from './notification.service';


@Module({

  providers: [NotificationService],
})
export class NotificationModule {}
