import { Controller } from '@nestjs/common';
import { DestinationService } from '../service/destination.service';

@Controller()
export class DestinationController {
  constructor(private destinationService: DestinationService) {}
}
