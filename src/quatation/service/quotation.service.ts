import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EnquiryService } from 'src/enquiry/service/enquiry.service';
import { EnquiryStatus } from 'src/schema/graphql.schema';
import { Repository } from 'typeorm';
import { NotificationService } from '../../notification/notification.service';
import { User } from '../../user/entity/user.entity';
import { Quotation } from '../entity/quotation.entity';
import { CreateQuotationInput } from '../model/createQuotationInput.model';
import { EditQuotationInput } from '../model/editQuotationInput';
import { QuotationQueryOption } from '../model/filter.model';

@Injectable()
export class QuotationService {
  constructor(
    @InjectRepository(Quotation)
    private readonly quotationRepo: Repository<Quotation>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private enquiryService: EnquiryService,
    private notificationService: NotificationService,
  ) {}

  async createQuatation(createQuatationInput: CreateQuotationInput) {
    await this.enquiryService.update(createQuatationInput.enquiryId, EnquiryStatus.QuotationSent)
    const user = await this.userRepo.findOne({ where: { id: createQuatationInput.userId } });
    this.notificationService.notifyUser(user.firebaseId!);
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
