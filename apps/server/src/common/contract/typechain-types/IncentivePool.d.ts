/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { EventFragment, FunctionFragment, Result } from "@ethersproject/abi";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  CallOverrides,
  ContractTransaction,
  EventFilter,
  Overrides,
  PopulatedTransaction,
  Signer,
  ethers,
} from "ethers";
import { TypedEvent, TypedEventFilter, TypedListener } from "./commons";

interface IncentivePoolInterface extends ethers.utils.Interface {
  functions: {
    "addLeftTransactionNum(uint256)": FunctionFragment;
    "affiliateToClaimedTransactionNum(address)": FunctionFragment;
    "affiliateToLeftTransactionNum(address)": FunctionFragment;
    "affiliates(uint256)": FunctionFragment;
    "claimAffiliateIncentive()": FunctionFragment;
    "claimUserIncentive()": FunctionFragment;
    "factory()": FunctionFragment;
    "getAffiliates()": FunctionFragment;
    "getIncentiveInfo()": FunctionFragment;
    "getUsers()": FunctionFragment;
    "incentiveInfo()": FunctionFragment;
    "isAffiliateExist(address)": FunctionFragment;
    "isClaimPaused()": FunctionFragment;
    "isUpdatePaused()": FunctionFragment;
    "isUserExist(address)": FunctionFragment;
    "poolAdmin()": FunctionFragment;
    "updatePool(tuple[])": FunctionFragment;
    "userToClaimedTransactionNum(address)": FunctionFragment;
    "userToLeftTransactionNum(address)": FunctionFragment;
    "users(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addLeftTransactionNum", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "affiliateToClaimedTransactionNum", values: [string]): string;
  encodeFunctionData(functionFragment: "affiliateToLeftTransactionNum", values: [string]): string;
  encodeFunctionData(functionFragment: "affiliates", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "claimAffiliateIncentive", values?: undefined): string;
  encodeFunctionData(functionFragment: "claimUserIncentive", values?: undefined): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(functionFragment: "getAffiliates", values?: undefined): string;
  encodeFunctionData(functionFragment: "getIncentiveInfo", values?: undefined): string;
  encodeFunctionData(functionFragment: "getUsers", values?: undefined): string;
  encodeFunctionData(functionFragment: "incentiveInfo", values?: undefined): string;
  encodeFunctionData(functionFragment: "isAffiliateExist", values: [string]): string;
  encodeFunctionData(functionFragment: "isClaimPaused", values?: undefined): string;
  encodeFunctionData(functionFragment: "isUpdatePaused", values?: undefined): string;
  encodeFunctionData(functionFragment: "isUserExist", values: [string]): string;
  encodeFunctionData(functionFragment: "poolAdmin", values?: undefined): string;
  encodeFunctionData(functionFragment: "updatePool", values: [{ affiliate: string; user: string }[]]): string;
  encodeFunctionData(functionFragment: "userToClaimedTransactionNum", values: [string]): string;
  encodeFunctionData(functionFragment: "userToLeftTransactionNum", values: [string]): string;
  encodeFunctionData(functionFragment: "users", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "addLeftTransactionNum", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "affiliateToClaimedTransactionNum", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "affiliateToLeftTransactionNum", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "affiliates", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimAffiliateIncentive", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimUserIncentive", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAffiliates", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getIncentiveInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getUsers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "incentiveInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isAffiliateExist", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isClaimPaused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isUpdatePaused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isUserExist", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userToClaimedTransactionNum", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userToLeftTransactionNum", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "users", data: BytesLike): Result;

  events: {
    "AddLeftTransactionNum(uint256,uint256,uint256)": EventFragment;
    "ClaimIncentive(address,uint8,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddLeftTransactionNum"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimIncentive"): EventFragment;
}

export class IncentivePool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IncentivePoolInterface;

  functions: {
    addLeftTransactionNum(
      addedTransactionNum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    affiliateToClaimedTransactionNum(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    affiliateToLeftTransactionNum(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { leftTransactionNum: BigNumber }>;

    affiliates(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    claimAffiliateIncentive(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    claimUserIncentive(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    getAffiliates(overrides?: CallOverrides): Promise<[string[]]>;

    getIncentiveInfo(overrides?: CallOverrides): Promise<
      [
        [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
          incentiveToken: string;
          incentiveAmountPerTransaction: BigNumber;
          affiliateAmountPerTransaction: BigNumber;
          userAmountPerTransaction: BigNumber;
          leftTransactionNum: BigNumber;
          maxTransactionNumPerWallet: BigNumber;
          endTimeStamp: BigNumber;
        },
      ]
    >;

    getUsers(overrides?: CallOverrides): Promise<[string[]]>;

    incentiveInfo(overrides?: CallOverrides): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        incentiveToken: string;
        incentiveAmountPerTransaction: BigNumber;
        affiliateAmountPerTransaction: BigNumber;
        userAmountPerTransaction: BigNumber;
        leftTransactionNum: BigNumber;
        maxTransactionNumPerWallet: BigNumber;
        endTimeStamp: BigNumber;
      }
    >;

    isAffiliateExist(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    isClaimPaused(overrides?: CallOverrides): Promise<[boolean]>;

    isUpdatePaused(overrides?: CallOverrides): Promise<[boolean]>;

    isUserExist(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    poolAdmin(overrides?: CallOverrides): Promise<[string]>;

    updatePool(
      referrals: { affiliate: string; user: string }[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    userToClaimedTransactionNum(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    userToLeftTransactionNum(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    users(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  addLeftTransactionNum(
    addedTransactionNum: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  affiliateToClaimedTransactionNum(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  affiliateToLeftTransactionNum(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  affiliates(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  claimAffiliateIncentive(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  claimUserIncentive(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  factory(overrides?: CallOverrides): Promise<string>;

  getAffiliates(overrides?: CallOverrides): Promise<string[]>;

  getIncentiveInfo(overrides?: CallOverrides): Promise<
    [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      incentiveToken: string;
      incentiveAmountPerTransaction: BigNumber;
      affiliateAmountPerTransaction: BigNumber;
      userAmountPerTransaction: BigNumber;
      leftTransactionNum: BigNumber;
      maxTransactionNumPerWallet: BigNumber;
      endTimeStamp: BigNumber;
    }
  >;

  getUsers(overrides?: CallOverrides): Promise<string[]>;

  incentiveInfo(overrides?: CallOverrides): Promise<
    [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      incentiveToken: string;
      incentiveAmountPerTransaction: BigNumber;
      affiliateAmountPerTransaction: BigNumber;
      userAmountPerTransaction: BigNumber;
      leftTransactionNum: BigNumber;
      maxTransactionNumPerWallet: BigNumber;
      endTimeStamp: BigNumber;
    }
  >;

  isAffiliateExist(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  isClaimPaused(overrides?: CallOverrides): Promise<boolean>;

  isUpdatePaused(overrides?: CallOverrides): Promise<boolean>;

  isUserExist(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  poolAdmin(overrides?: CallOverrides): Promise<string>;

  updatePool(
    referrals: { affiliate: string; user: string }[],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  userToClaimedTransactionNum(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  userToLeftTransactionNum(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  users(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addLeftTransactionNum(addedTransactionNum: BigNumberish, overrides?: CallOverrides): Promise<void>;

    affiliateToClaimedTransactionNum(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    affiliateToLeftTransactionNum(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    affiliates(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    claimAffiliateIncentive(overrides?: CallOverrides): Promise<void>;

    claimUserIncentive(overrides?: CallOverrides): Promise<void>;

    factory(overrides?: CallOverrides): Promise<string>;

    getAffiliates(overrides?: CallOverrides): Promise<string[]>;

    getIncentiveInfo(overrides?: CallOverrides): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        incentiveToken: string;
        incentiveAmountPerTransaction: BigNumber;
        affiliateAmountPerTransaction: BigNumber;
        userAmountPerTransaction: BigNumber;
        leftTransactionNum: BigNumber;
        maxTransactionNumPerWallet: BigNumber;
        endTimeStamp: BigNumber;
      }
    >;

    getUsers(overrides?: CallOverrides): Promise<string[]>;

    incentiveInfo(overrides?: CallOverrides): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        incentiveToken: string;
        incentiveAmountPerTransaction: BigNumber;
        affiliateAmountPerTransaction: BigNumber;
        userAmountPerTransaction: BigNumber;
        leftTransactionNum: BigNumber;
        maxTransactionNumPerWallet: BigNumber;
        endTimeStamp: BigNumber;
      }
    >;

    isAffiliateExist(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    isClaimPaused(overrides?: CallOverrides): Promise<boolean>;

    isUpdatePaused(overrides?: CallOverrides): Promise<boolean>;

    isUserExist(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    poolAdmin(overrides?: CallOverrides): Promise<string>;

    updatePool(referrals: { affiliate: string; user: string }[], overrides?: CallOverrides): Promise<void>;

    userToClaimedTransactionNum(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    userToLeftTransactionNum(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    users(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    AddLeftTransactionNum(
      addedTransactionNum?: null,
      totalTransactionNum?: null,
      addedIncentiveAmount?: null,
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      {
        addedTransactionNum: BigNumber;
        totalTransactionNum: BigNumber;
        addedIncentiveAmount: BigNumber;
      }
    >;

    ClaimIncentive(
      caller?: string | null,
      claimType?: BigNumberish | null,
      claimTransactionNum?: null,
      claimedValue?: null,
    ): TypedEventFilter<
      [string, number, BigNumber, BigNumber],
      {
        caller: string;
        claimType: number;
        claimTransactionNum: BigNumber;
        claimedValue: BigNumber;
      }
    >;
  };

  estimateGas: {
    addLeftTransactionNum(
      addedTransactionNum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    affiliateToClaimedTransactionNum(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    affiliateToLeftTransactionNum(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    affiliates(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    claimAffiliateIncentive(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    claimUserIncentive(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    getAffiliates(overrides?: CallOverrides): Promise<BigNumber>;

    getIncentiveInfo(overrides?: CallOverrides): Promise<BigNumber>;

    getUsers(overrides?: CallOverrides): Promise<BigNumber>;

    incentiveInfo(overrides?: CallOverrides): Promise<BigNumber>;

    isAffiliateExist(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    isClaimPaused(overrides?: CallOverrides): Promise<BigNumber>;

    isUpdatePaused(overrides?: CallOverrides): Promise<BigNumber>;

    isUserExist(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    poolAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    updatePool(
      referrals: { affiliate: string; user: string }[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    userToClaimedTransactionNum(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    userToLeftTransactionNum(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    users(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addLeftTransactionNum(
      addedTransactionNum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    affiliateToClaimedTransactionNum(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    affiliateToLeftTransactionNum(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    affiliates(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimAffiliateIncentive(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    claimUserIncentive(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAffiliates(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getIncentiveInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUsers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    incentiveInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAffiliateExist(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isClaimPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isUpdatePaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isUserExist(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updatePool(
      referrals: { affiliate: string; user: string }[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    userToClaimedTransactionNum(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userToLeftTransactionNum(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    users(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
