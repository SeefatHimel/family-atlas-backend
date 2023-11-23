import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    try {
      await this.$connect();
      console.log('Database connection successful!');
    } catch (error) {
      console.log(
        '🚀 ~ file: prisma.service.ts:11 ~ PrismaService ~ onModuleInit ~ error:',
        error,
      );
    }
  }
}
