import { ApolloDriver, type ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { EventModule } from "./event/event.module";
import { ProductModule } from "./product/product.module";
import { ReferralModule } from "./referral/referral.module";
import { UserReferralModule } from "./user-referral/user-referral.module";
import { UserModule } from "./user/user.module";
import configSetting from "../common/config/config";
import { GqlConfigService } from "../common/config/gql-config.service";
import { PrismaModule } from "../common/prisma/prisma.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configSetting],
      isGlobal: true,
    }),

    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),
    PrismaModule,
    UserModule,
    UserReferralModule,
    ProductModule,
    ReferralModule,
    EventModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
