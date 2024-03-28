/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";
import type { IncentivePoolInterface, IncentivePoolInterfaceInterface } from "../IncentivePoolInterface";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "addedTransactionNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalTransactionNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "addedIncentiveAmount",
        type: "uint256",
      },
    ],
    name: "AddLeftTransactionNum",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "enum IncentivePoolInterface.ClaimType",
        name: "claimType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "claimTransactionNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "claimedValue",
        type: "uint256",
      },
    ],
    name: "ClaimIncentive",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "affiliate",
        type: "address",
      },
    ],
    name: "affiliateToClaimedTransactionNum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "affiliate",
        type: "address",
      },
    ],
    name: "affiliateToLeftTransactionNum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getIncentiveInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "incentiveToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "incentiveAmountPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "affiliateAmountPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "userAmountPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "leftTransactionNum",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxTransactionNumPerWallet",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTimeStamp",
            type: "uint256",
          },
        ],
        internalType: "struct CommonDtos.IncentiveInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "userToClaimedTransactionNum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "userToLeftTransactionNum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IncentivePoolInterface__factory {
  static readonly abi = _abi;
  static createInterface(): IncentivePoolInterfaceInterface {
    return new utils.Interface(_abi) as IncentivePoolInterfaceInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IncentivePoolInterface {
    return new Contract(address, _abi, signerOrProvider) as IncentivePoolInterface;
  }
}