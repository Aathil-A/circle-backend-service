import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { InjectS3 } from 'nestjs-s3';
import { ObjectLiteral } from 'typeorm';
import { S3Operation } from '../enum/s3';

@Injectable()
export class S3Service {
  constructor(@InjectS3() private readonly s3: S3) {}

  /**
   * To get a signed url for performing an S3 operation.
   * @param input Input for the intended S3 operation
   * @param operation S3 operation to be performed.
   * @returns Signed url for the operation.
   */
  async getPresignedUrl(input: ObjectLiteral, operation: S3Operation) {
    //TODO: If possible, narrow down input type based on operation.
    const s3Bucket = 'circle-bucket-travel';
    const params = {
      Key: 'test',
      Bucket: s3Bucket,
      Expires: 60 * 20, // 5 minutes validity
    };
    return await this.s3.getSignedUrlPromise(operation, params);
  }
}
