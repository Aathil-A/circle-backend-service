import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QuatationResolver } from './resolvers/quotation.resolver';
import { Quotation } from './entity/quotation.entity';
import { QuotationService } from './service/quotation.service';
import { EnquiryModule } from 'src/enquiry/enquiry.module';
import { NotificationModule } from '../notification/notification.module';
import { User } from '../user/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quotation,User]), EnquiryModule,
  NotificationModule],
  providers: [QuotationService, QuatationResolver],
})
export class QuotationModule {}
