import { Module } from '@nestjs/common';
import { AuthserverController } from './authserver.controller';
import { AuthserverService } from './authserver.service';

@Module({
  controllers: [AuthserverController],
  providers: [AuthserverService]
})
export class AuthserverModule {}
