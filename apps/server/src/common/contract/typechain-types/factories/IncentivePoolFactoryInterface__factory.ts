/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";
import type {
  IncentivePoolFactoryInterface,
  IncentivePoolFactoryInterfaceInterface,
} from "../IncentivePoolFactoryInterface";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "initialAmount",
        type: "uint256",
      },
    ],
    name: "CreateIncentivePool",
    type: "event",
  },
];

export class IncentivePoolFactoryInterface__factory {
  static readonly abi = _abi;
  static createInterface(): IncentivePoolFactoryInterfaceInterface {
    return new utils.Interface(_abi) as IncentivePoolFactoryInterfaceInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IncentivePoolFactoryInterface {
    return new Contract(address, _abi, signerOrProvider) as IncentivePoolFactoryInterface;
  }
}
