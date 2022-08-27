import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput, UpdateUserInput } from '../../schema/graphql.schema';
import { CreateQuotationInput } from '../model/createQuotationInput.model';
import { QuotationQueryOption } from '../model/filter.model';
import { QuotationService } from '../service/quotation.service';

@Resolver()
export class QuatationResolver {
  constructor(private readonly quotationService: QuotationService) {}

  @Mutation()
  async createQuotation(@Args('input') input: CreateQuotationInput) {
    return this.quotationService.createQuatation(input);
  }

  @Query()
  async getQuotations(
    @Args('quotationQueryOption') quotationQueryOption: QuotationQueryOption,
  ) {
    return await this.quotationService.getQuotations(quotationQueryOption);
  }
}
