import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GeneralApplicationException } from 'src/common/exception/general.application.exception';
import { FindOneOptions, ObjectLiteral, Repository } from 'typeorm';
import { CreateEnquiryInput } from '../../schema/graphql.schema';
import { Enquiry } from '../entity/enquiry.entity';

@Injectable()
export class EnquiryService {
  constructor(
    @InjectRepository(Enquiry)
    private readonly enquiryRepository: Repository<Enquiry>,
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
    return await this.enquiryRepository.save(newEnquiry);
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

  async find() {
    const enquiry = await this.enquiryRepository.find({
      relations: {
        user: true,
        destination: true,
      },
    });
    return enquiry;
  }

  async delete(id: string) {
    const enquiry = await this.findOneOrFail(id);
    const result = await this.enquiryRepository.softDelete(enquiry.id);
    return result.affected !== 0;
  }
}
