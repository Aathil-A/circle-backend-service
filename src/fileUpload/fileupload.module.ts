import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileUploadResolver } from './resolver/fileupload.resolver';
import { S3Service } from './service/s3.service';
import { S3Module } from 'nestjs-s3';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    S3Module.forRoot({
      config: {
        accessKeyId: 'AKIAYYLXSLSB7HHMUQFC',
        secretAccessKey: '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',
        region: 'ap-south-1',
      },
    }),
  ],
  providers: [S3Service, FileUploadResolver],
})
export class FileUploadModule {}
