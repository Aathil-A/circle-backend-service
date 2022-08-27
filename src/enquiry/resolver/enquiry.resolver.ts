import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateEnquiryInput } from '../../schema/graphql.schema';
import { EnquiryService } from '../service/enquiry.service';

@Resolver()
export class EnquiryResolver {
  constructor(private readonly enquiryService: EnquiryService) {}

  @Query()
  async getEnquiry(@Args('id') id: string) {
    return await this.enquiryService.findOne(id);
  }

  @Query()
  async getEnquiries() {
    return await this.enquiryService.find();
  }

  @Mutation()
  async createEnquiry(@Args('input') input: CreateEnquiryInput) {
    return await this.enquiryService.create(input);
  }

  @Mutation()
  async deleteEnquiry(@Args('id') id: string) {
    return await this.enquiryService.delete(id);
  }
}
