import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
        retryAttempts: 5,
        retryDelay: 3000,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}