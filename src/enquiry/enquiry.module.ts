import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enquiry } from './entity/enquiry.entity';
import { EnquiryResolver } from './resolver/enquiry.resolver';
import { EnquiryService } from './service/enquiry.service';

@Module({
  imports: [TypeOrmModule.forFeature([Enquiry])],
  providers: [EnquiryService, EnquiryResolver],
})
export class EnquiryModule {}