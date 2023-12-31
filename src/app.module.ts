import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthserverModule } from './modules/authserver/authserver.module';
import { SessionserverModule } from './modules/sessionserver/sessionserver.module';

@Module({
  imports: [AuthserverModule, SessionserverModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
