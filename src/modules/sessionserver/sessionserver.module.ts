import { Module } from '@nestjs/common';
import { SessionserverService } from './sessionserver.service';
import { SessionserverController } from './sessionserver.controller';

@Module({
  controllers: [SessionserverController],
  providers: [SessionserverService],
})
export class SessionserverModule {}
