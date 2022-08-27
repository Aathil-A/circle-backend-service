import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QuatationResolver } from './resolvers/quotation.resolver';
import { Quotation } from './entity/quotation.entity';
import { QuotationService } from './service/quotation.service';
import { QuotationRepository } from './repository/quatation.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
    Quotation,
    QuotationRepository,
    ]),
],
  providers: [QuotationService, QuatationResolver],
})
export class QuotationModule {}
