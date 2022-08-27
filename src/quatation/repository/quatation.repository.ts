import { EntityRepository, Repository } from 'typeorm';
import { Quotation } from '../entity/quotation.entity';
import { CreateQuotationInput } from '../model/createQuotationInput.model';
import { QuotationQueryOption } from '../model/filter.model';

@EntityRepository(Quotation)
export class QuotationRepository extends Repository<Quotation> {
  public async getQuotations(
    quotationQueryOption: QuotationQueryOption,
  ): Promise<Quotation[]> {
    return await this.find({
      where: {
        ...(quotationQueryOption.agentId && {
          agentId: quotationQueryOption.agentId,
        }),
        ...(quotationQueryOption.userId && {
          userId: quotationQueryOption.userId,
        }),
        ...(quotationQueryOption.status && {
          status: quotationQueryOption.status,
        }),
      },
    });
  }

  public async createQuotation(
    createQuatationInput: CreateQuotationInput,
  ): Promise<Quotation> {
    return await this.save(createQuatationInput);
  }
}
