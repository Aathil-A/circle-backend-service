import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { S3Operation } from '../enum/s3';
import { S3Service } from '../service/s3.service';

@Resolver()
export class FileUploadResolver {
    constructor(
        private s3Service:S3Service,
    ) { }
    

  
    @Query()
    async getPresignedUrl() {
        const input = {
            name:"asdf"
        }
      return await this.s3Service.getPresignedUrl(input,S3Operation.putObject);
    }


}
