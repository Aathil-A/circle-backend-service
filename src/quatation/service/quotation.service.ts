import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quotation } from '../entity/quotation.entity';
import { CreateQuotationInput } from '../model/createQuotationInput.model';
import { EditQuotationInput } from '../model/editQuotationInput';
import { QuotationQueryOption } from '../model/filter.model';

@Injectable()
export class QuotationService {
  constructor(
    @InjectRepository(Quotation)
    private readonly quotationRepo: Repository<Quotation>,
  ) {}

  async createQuatation(createQuatationInput: CreateQuotationInput) {
    return await this.quotationRepo.save(createQuatationInput);
  }

  async getQuotations(quotationQueryOption: QuotationQueryOption) {
    return await this.quotationRepo.find({
      where: {
        ...(quotationQueryOption.id && {
          id: quotationQueryOption.id,
        }),
        ...(quotationQueryOption.agentId && {
          agentId: quotationQueryOption.agentId,
        }),
        ...(quotationQueryOption.userId && {
          userId: quotationQueryOption.userId,
        }),
        ...(quotationQueryOption.status && {
          status: quotationQueryOption.status,
        }),
        ...(quotationQueryOption.enquiryId && {
          enquiryId: quotationQueryOption.enquiryId,
        }),
      },
    });
  }

  async editQuotation(
    editQuotationInput: EditQuotationInput,
  ): Promise<Quotation> {
    return this.quotationRepo.save(editQuotationInput);
  }
}
