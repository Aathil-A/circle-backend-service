import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateDestinationInput } from '../../schema/graphql.schema';
import { DestinationService } from '../service/destination.service';

@Resolver()
export class DestinationResolver {
  constructor(private readonly destinationService: DestinationService) {}

  @Mutation()
  async createDestination(@Args('input') input: CreateDestinationInput) {
    return await this.destinationService.create(input);
  }

  @Query()
  async getDestinations() {
    return await this.destinationService.findAll();
  }

  @Query()
  async getDestination(@Args('id') id: string) {
    return await this.destinationService.findOne(id);
  }
}
