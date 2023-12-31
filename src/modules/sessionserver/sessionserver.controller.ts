import { Controller } from '@nestjs/common';
import { SessionserverService } from './sessionserver.service';

@Controller('sessionserver')
export class SessionserverController {
  constructor(private readonly sessionserverService: SessionserverService) {}
}
