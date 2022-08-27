import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QuatationResolver } from './resolvers/quotation.resolver';
import { Quotation } from './entity/quotation.entity';
import { QuotationService } from './service/quotation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Quotation])],
  providers: [QuotationService, QuatationResolver],
})
export class QuotationModule {}
