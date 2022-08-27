import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDestinationInput } from '../../schema/graphql.schema';
import { Destination } from '../entity/destination.entity';

@Injectable()
export class DestinationService {
  constructor(
    @InjectRepository(Destination)
    private readonly destinationRepository: Repository<Destination>,
  ) {}

  async create(input: CreateDestinationInput) {
    const newDestination = {
      name: input.name,
    } as Destination;
    return await this.destinationRepository.save(newDestination);
  }

  async findAll() {
    return await this.destinationRepository.find();
  }

  async findOne(id: string) {
    return await this.destinationRepository.findOne({
      where: { id },
    });
  }

}
