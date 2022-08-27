import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QuatationResolver } from './resolvers/quotation.resolver';
import { Quotation } from './entity/quotation.entity';
import { QuotationService } from './service/quotation.service';
import { EnquiryModule } from 'src/enquiry/enquiry.module';

@Module({
  imports: [TypeOrmModule.forFeature([Quotation]), EnquiryModule],
  providers: [QuotationService, QuatationResolver],
})
export class QuotationModule {}
