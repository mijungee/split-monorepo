/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides, Signer, utils } from "ethers";
import type { ERC20Burnable, ERC20BurnableInterface } from "../ERC20Burnable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a47806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806370a082311161006657806370a082311461011857806379cc679014610141578063a457c2d714610154578063a9059cbb14610167578063dd62ed3e1461017a57600080fd5b8063095ea7b3146100a357806318160ddd146100cb57806323b872dd146100dd57806339509351146100f057806342966c6814610103575b600080fd5b6100b66100b13660046107f1565b6101b3565b60405190151581526020015b60405180910390f35b6002545b6040519081526020016100c2565b6100b66100eb36600461081b565b6101c9565b6100b66100fe3660046107f1565b610243565b610116610111366004610857565b610279565b005b6100cf610126366004610870565b6001600160a01b031660009081526020819052604090205490565b61011661014f3660046107f1565b610286565b6100b66101623660046107f1565b610294565b6100b66101753660046107f1565b6102e3565b6100cf61018836600461088b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60006101c03384846102f0565b50600192915050565b60006101d684848461041a565b6102398433610234856040518060600160405280602881526020016109a1602891396001600160a01b038a16600090815260016020526040812090335b6001600160a01b03168152602081019190915260400160002054919061059d565b6102f0565b5060019392505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916101c091859061023490866105d7565b610283338261063d565b50565b6102908282610748565b5050565b60006101c03384610234856040518060600160405280602581526020016109ed602591393360009081526001602090815260408083206001600160a01b038d168452909152902054919061059d565b60006101c033848461041a565b6001600160a01b0383166103575760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084015b60405180910390fd5b6001600160a01b0382166103b85760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161034e565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b03831661047e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161034e565b6001600160a01b0382166104e05760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161034e565b61051d8160405180606001604052806026815260200161097b602691396001600160a01b038616600090815260208190526040902054919061059d565b6001600160a01b03808516600090815260208190526040808220939093559084168152205461054c90826105d7565b6001600160a01b038381166000818152602081815260409182902094909455518481529092918616917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910161040d565b600081848411156105c15760405162461bcd60e51b815260040161034e91906108be565b5060006105ce8486610929565b95945050505050565b6000806105e48385610940565b9050838110156106365760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015260640161034e565b9392505050565b6001600160a01b03821661069d5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161034e565b6106da81604051806060016040528060228152602001610959602291396001600160a01b038516600090815260208190526040902054919061059d565b6001600160a01b0383166000908152602081905260409020556002546107009082610793565b6002556040518181526000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b610752828261063d565b6102908233610234846040518060600160405280602481526020016109c9602491396001600160a01b03881660009081526001602052604081209033610213565b600061063683836040518060400160405280601f81526020017f536166654d6174683a207375627472616374696f6e20756e646572666c6f770081525061059d565b80356001600160a01b03811681146107ec57600080fd5b919050565b6000806040838503121561080457600080fd5b61080d836107d5565b946020939093013593505050565b60008060006060848603121561083057600080fd5b610839846107d5565b9250610847602085016107d5565b9150604084013590509250925092565b60006020828403121561086957600080fd5b5035919050565b60006020828403121561088257600080fd5b610636826107d5565b6000806040838503121561089e57600080fd5b6108a7836107d5565b91506108b5602084016107d5565b90509250929050565b600060208083528351808285015260005b818110156108eb578581018301518582016040015282016108cf565b818111156108fd576000604083870101525b50601f01601f1916929092016040019392505050565b634e487b7160e01b600052601160045260246000fd5b60008282101561093b5761093b610913565b500390565b6000821982111561095357610953610913565b50019056fe45524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122047ee71c97371728884fdbf4ac89166d0b376e698af52dbcffc6d92e7be62836664736f6c634300080b0033";

export class ERC20Burnable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ERC20Burnable> {
    return super.deploy(overrides || {}) as Promise<ERC20Burnable>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20Burnable {
    return super.attach(address) as ERC20Burnable;
  }
  connect(signer: Signer): ERC20Burnable__factory {
    return super.connect(signer) as ERC20Burnable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20BurnableInterface {
    return new utils.Interface(_abi) as ERC20BurnableInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20Burnable {
    return new Contract(address, _abi, signerOrProvider) as ERC20Burnable;
  }
}
