import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DatabaseModule } from './common/database/database.module';
import { DestinationModule } from './destination/destination.module';
import { AgentModule } from './agent/agent.module';
import { EnquiryModule } from './enquiry/enquiry.module';
import { FileUploadModule } from './fileUpload/fileupload.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5434,
    //   username: 'postgres',
    //   password: 'postgres',
    //   database: 'example-db',
    //   autoLoadEntities:true,
    //   logging: ['error', 'info', 'query'],
    //   namingStrategy:new SnakeNamingStrategy(),
    //   synchronize:false

    // }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      path: '/graphql',
      typePaths: ['src/**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/schema/graphql.schema.ts'),
      },
    }),
    DatabaseModule,
    UserModule,
    DestinationModule,
    AgentModule,
    EnquiryModule,
    FileUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
