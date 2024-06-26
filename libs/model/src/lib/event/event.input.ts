import { Field, InputType } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { IsEnum, IsOptional, IsString, ValidateNested } from "class-validator";
import { TransactionInput } from "./transaction.input";
import { EventType } from "../enum/event-type.enum";

@InputType()
export class EventInput {
  @Field(() => String, { nullable: false, description: "이벤트 이름" })
  @IsString()
  name!: string;

  @Field(() => EventType, { nullable: true, description: "이벤트 타입" })
  @IsEnum(EventType)
  @IsOptional()
  type?: keyof typeof EventType;

  @Field(() => String, { nullable: false, description: "이벤트당 추천인 수령 금액" })
  @IsString()
  providerAmountPerEvent!: string;

  @Field(() => String, { nullable: true, description: "이벤트당 사용자 수령 금액" })
  @IsString()
  @IsOptional()
  userAmountPerEvent?: string;

  @ValidateNested()
  @Type(() => TransactionInput)
  @Field(() => TransactionInput, { nullable: true, description: "트랜잭션 입력값" })
  transaction?: TransactionInput;
}
