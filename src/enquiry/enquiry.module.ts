import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgentModule } from 'src/agent/agent.module';
import { NotificationModule } from 'src/notification/notification.module';
import { DestinationModule } from '../destination/destination.module';
import { Enquiry } from './entity/enquiry.entity';
import { EnquiryResolver } from './resolver/enquiry.resolver';
import { EnquiryService } from './service/enquiry.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Enquiry]),
    AgentModule,
    NotificationModule,
    DestinationModule,
  ],
  providers: [EnquiryService, EnquiryResolver],
  exports: [EnquiryService],
})
export class EnquiryModule {}
