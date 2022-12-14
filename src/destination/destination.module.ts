import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DestinationController } from './controller/destination.controller';
import { Destination } from './entity/destination.entity';
import { DestinationResolver } from './resolver/destination.resolver';
import { DestinationService } from './service/destination.service';

@Module({
  imports: [TypeOrmModule.forFeature([Destination])],
  providers: [DestinationService, DestinationResolver],
  controllers: [DestinationController],
  exports: [DestinationService]
})
export class DestinationModule {}
