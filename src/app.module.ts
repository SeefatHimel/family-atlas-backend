import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthCheckModule } from './health-check/health-check.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [HealthCheckModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
