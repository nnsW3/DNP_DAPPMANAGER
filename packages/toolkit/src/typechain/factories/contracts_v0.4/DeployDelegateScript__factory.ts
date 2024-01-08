/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { ethers } from "ethers";
import type { ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common.js";
import type {
  DeployDelegateScript,
  DeployDelegateScriptInterface,
} from "../../contracts_v0.4/DeployDelegateScript.js";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_script",
        type: "bytes",
      },
      {
        name: "_input",
        type: "bytes",
      },
      {
        name: "_blacklist",
        type: "address[]",
      },
    ],
    name: "execScript",
    outputs: [
      {
        name: "",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6060604052341561000f57600080fd5b6104ef8061001e6000396000f3006060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663279cea358114610045575b600080fd5b341561005057600080fd5b61007b60246004803582810192908201359181358083019290820135916044359182019101356100f2565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156100b757808201518382015260200161009f565b50505050905090810190601f1680156100e45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100fa6104b1565b600080831561010857600080fd5b88886040518083838082843782019150509250505060405190819003902060008181526020819052604090205490925073ffffffffffffffffffffffffffffffffffffffff1690508015156101d35761018f89898080601f016020809104026020016040519081016040528181529291906020840183838082843750610219945050505050565b6000838152602081905260409020805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff831617905590505b61020c8188888080601f01602080910402602001604051908101604052818152929190602084018383808284375061023a945050505050565b9998505050505050505050565b60006004825103602483016000f09050803b15600181146100405750919050565b6102426104b1565b61024b8361030d565b151561025657600080fd5b8273ffffffffffffffffffffffffffffffffffffffff1660008351116102835761027e610315565b610285565b825b60405180828051906020019080838360005b838110156102af578082015183820152602001610297565b50505050905090810190601f1680156102dc5780820380516001836020036101000a031916815260200191505b509150506000604051808303818561646e5a03f491505015156102fe57600080fd5b61030661034b565b9392505050565b6000903b1190565b61031d6104b1565b6103467fc1c0e9c400000000000000000000000000000000000000000000000000000000610371565b905090565b6103536104b1565b3d6040519150602081018201604052808252806000602084013e5090565b6103796104b1565b6103816104b1565b60046040518059106103905750595b818152601f19601f83011681016020016040529050905082816000815181106103b557fe5b906020010190600160f860020a031916908160001a9053506101007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19841602816001815181106103fe57fe5b906020010190600160f860020a031916908160001a905350620100007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff198416028160028151811061044857fe5b906020010190600160f860020a031916908160001a90535063010000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff198416028160038151811061049357fe5b906020010190600160f860020a031916908160001a90535092915050565b602060405190810160405260008152905600a165627a7a7230582001cb2837e541448ff159f9f8f72da7347badca9d95cbeef4d4bb91bbe0ca6ea10029";

type DeployDelegateScriptConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ethers.ContractFactory>;

const isSuperArgs = (
  xs: DeployDelegateScriptConstructorParams
): xs is ConstructorParameters<typeof ethers.ContractFactory> => xs.length > 1;

export class DeployDelegateScript__factory extends ethers.ContractFactory {
  constructor(...args: DeployDelegateScriptConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      DeployDelegateScript & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): DeployDelegateScript__factory {
    return super.connect(runner) as DeployDelegateScript__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeployDelegateScriptInterface {
    return new ethers.Interface(_abi) as DeployDelegateScriptInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DeployDelegateScript {
    return new ethers.Contract(
      address,
      _abi,
      runner
    ) as unknown as DeployDelegateScript;
  }
}