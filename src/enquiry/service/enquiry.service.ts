import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AgentService } from 'src/agent/service/agent.service';
import { GeneralApplicationException } from 'src/common/exception/general.application.exception';
import { NotificationService } from 'src/notification/notification.service';
import { FindOneOptions, In, ObjectLiteral, Repository } from 'typeorm';
import { DestinationService } from '../../destination/service/destination.service';
import { CreateEnquiryInput, EnquiryStatus } from '../../schema/graphql.schema';
import { Enquiry } from '../entity/enquiry.entity';

@Injectable()
export class EnquiryService {
  constructor(
    @InjectRepository(Enquiry)
    private readonly enquiryRepository: Repository<Enquiry>,
    private agentService: AgentService,
    private readonly notify: NotificationService,
    private readonly destinationService: DestinationService,
  ) {}

  async findOneOrFail(
    query: ObjectLiteral | FindOneOptions<Enquiry> | string,
    errorMessage = 'Enquiry not found',
  ): Promise<Enquiry> {
    typeof query === 'string' && (query = { where: { id: query } });
    !Object.keys(query).includes('where') && (query = { where: query });
    const resp = await this.enquiryRepository.findOne(query);
    if (!resp) throw new GeneralApplicationException(errorMessage);
    return resp;
  }

  async create(input: CreateEnquiryInput) {
    const newEnquiry = {
      userId: input.userId,
      pickUpPoint: input.pickUpPoint,
      destinationId: input.destinationId,
      startDate: input.startDate,
      returnDate: input.returnDate,
      budget: input.budget,
      adults: input.adults,
    } as Enquiry;
    input.children && (newEnquiry.children = input.children);
    input.hotelStar && (newEnquiry.hotelStar = input.hotelStar);
    input.notes && (newEnquiry.notes = input.notes);
    const enquiry = await this.enquiryRepository.save(newEnquiry);
    if(enquiry){
       this.notify.send();
    }
    return enquiry;
  }

  async update(id: string, status: EnquiryStatus) {
    const enquiry = await this.findOneOrFail(id)
    return await this.enquiryRepository.update(enquiry.id, {status: status});
  }


  async findOne(id: string) {
    const enquiry = await this.findOneOrFail({
      where: { id: id },
      relations: {
        user: true,
        destination: true,
      },
    });
    return enquiry;
  }

  async getCustomerEnquiries(where: ObjectLiteral) {
    const enquiry = await this.enquiryRepository.find({
      where: where,
      relations: {
        user: true,
        destination: true,
      },
    });
    return enquiry;
  }

  async getAgentEnquiries(agentId: String) {
   const agent = await this.agentService.findOneOrFail({where:{id:agentId},relations:{agentDestination: true}})
    const destinationIds = agent.agentDestination.map(eachDestination => { return eachDestination.destinationId })
    const destinations = await this.destinationService.find({
      where: {
        id: In(destinationIds)
      }
    })
   const enquiries = await this.enquiryRepository.find({
     where: {
       destinationId: In(destinationIds),
      //  status: EnquiryStatus.QuotationPending,
     },
     relations:{
       user: true,
       destination:true
     }
   })
    return enquiries
  }

  async delete(id: string) {
    const enquiry = await this.findOneOrFail(id);
    const result = await this.enquiryRepository.softDelete(enquiry.id);
    return result.affected !== 0;
  }
}
