import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quotation } from '../entity/quotation.entity';
import { CreateQuotationInput } from '../model/createQuotationInput.model';
import { QuotationQueryOption } from '../model/filter.model';
import { QuotationRepository } from '../repository/quatation.repository';
import { QuatationResolver } from '../resolvers/quotation.resolver';

@Injectable()
export class QuotationService {
  constructor(
    @InjectRepository(Quotation)
    private readonly quotationRepo: Repository<Quotation>,
  ) {}

  async createQuatation(createQuatationInput: CreateQuotationInput) {
    return await this.quotationRepo.save(createQuatationInput);
  }

  async getQuotations(quotationQueryOption: QuotationQueryOption){
    return await this.quotationRepo.find({
      where: {
        // ...(quotationQueryOption.agentId && ({
        //   agentId: quotationQueryOption.agentId,
        // })),
        ...(quotationQueryOption.userId && {
          userId: quotationQueryOption.userId,
        }),
        // ...(quotationQueryOption.status && {
        //   status: quotationQueryOption.status,
        // }),
      },
    });
  }
}
