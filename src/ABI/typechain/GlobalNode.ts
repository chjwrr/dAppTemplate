/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface GlobalNodeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addAdmin"
      | "allAdmins"
      | "batchAddAdmin"
      | "batchGetElectors"
      | "batchGetVoter"
      | "claim"
      | "electEndTime"
      | "electNode"
      | "electStartTime"
      | "electStatus"
      | "electTox"
      | "elector"
      | "electorId"
      | "endElectorId"
      | "erc20Address"
      | "getAllElectors"
      | "getElector"
      | "getEndElectorId"
      | "getVoter"
      | "initialize"
      | "isAdmin"
      | "isElector"
      | "isWithdrawal"
      | "removeAdmin"
      | "renounceAdmin"
      | "returnVote"
      | "rewards"
      | "signerAddress"
      | "totalElectEndTime"
      | "totalVoteTox"
      | "vote"
      | "voteEndTime"
      | "voteStartTime"
      | "voteTotalCount"
      | "voteTox"
      | "voted"
      | "voter"
      | "voterId"
      | "withdrawalNode"
      | "withdrawalTime"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "AdminAdded" | "AdminRemoved" | "Initialized"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "allAdmins", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "batchAddAdmin",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "batchGetElectors",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "batchGetVoter",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "electEndTime",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "electNode",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "electStartTime",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "electStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "electTox",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "elector",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "electorId",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "endElectorId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "erc20Address",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllElectors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getElector",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getEndElectorId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVoter",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isElector",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isWithdrawal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "returnVote",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewards",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "signerAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalElectEndTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalVoteTox",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "voteEndTime",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "voteStartTime",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "voteTotalCount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "voteTox",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "voted",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "voter",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "voterId",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawalNode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawalTime",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "addAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allAdmins", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "batchAddAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchGetElectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchGetVoter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "electEndTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "electNode", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "electStartTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "electStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "electTox", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "elector", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "electorId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "endElectorId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "erc20Address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllElectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getElector", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getEndElectorId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVoter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isElector", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "returnVote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "signerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalElectEndTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalVoteTox",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "voteEndTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voteStartTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voteTotalCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "voteTox", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "voted", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "voter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "voterId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawalNode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawalTime",
    data: BytesLike
  ): Result;
}

export namespace AdminAddedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AdminRemovedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface GlobalNode extends BaseContract {
  connect(runner?: ContractRunner | null): GlobalNode;
  waitForDeployment(): Promise<this>;

  interface: GlobalNodeInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addAdmin: TypedContractMethod<[account: AddressLike], [void], "nonpayable">;

  allAdmins: TypedContractMethod<[], [string[]], "view">;

  batchAddAdmin: TypedContractMethod<
    [amounts: AddressLike[]],
    [void],
    "nonpayable"
  >;

  batchGetElectors: TypedContractMethod<
    [startId: BigNumberish, endId: BigNumberish],
    [[bigint[], string[], bigint[], bigint[], boolean[], bigint[]]],
    "view"
  >;

  batchGetVoter: TypedContractMethod<
    [eId: BigNumberish, startVoteId: BigNumberish, endVoteId: BigNumberish],
    [[bigint[], string[], bigint[], boolean[], bigint[]]],
    "view"
  >;

  claim: TypedContractMethod<
    [amount: BigNumberish, signature: BytesLike],
    [void],
    "nonpayable"
  >;

  electEndTime: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  electNode: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  electStartTime: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  electStatus: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  electTox: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  elector: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  electorId: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  endElectorId: TypedContractMethod<[], [bigint], "view">;

  erc20Address: TypedContractMethod<[], [string], "view">;

  getAllElectors: TypedContractMethod<
    [],
    [[bigint[], string[], bigint[], bigint[], boolean[], bigint[]]],
    "view"
  >;

  getElector: TypedContractMethod<
    [eId: BigNumberish],
    [[string, bigint, bigint, boolean, bigint]],
    "view"
  >;

  getEndElectorId: TypedContractMethod<[], [bigint], "view">;

  getVoter: TypedContractMethod<
    [addr: AddressLike, eId: BigNumberish],
    [[bigint, boolean, bigint, bigint, bigint]],
    "view"
  >;

  initialize: TypedContractMethod<[], [void], "nonpayable">;

  isAdmin: TypedContractMethod<[account: AddressLike], [boolean], "view">;

  isElector: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  isWithdrawal: TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;

  removeAdmin: TypedContractMethod<
    [account: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceAdmin: TypedContractMethod<[], [void], "nonpayable">;

  returnVote: TypedContractMethod<[eId: BigNumberish], [void], "nonpayable">;

  rewards: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  signerAddress: TypedContractMethod<[], [string], "view">;

  totalElectEndTime: TypedContractMethod<
    [arg0: BigNumberish],
    [bigint],
    "view"
  >;

  totalVoteTox: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  vote: TypedContractMethod<
    [eId: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  voteEndTime: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  voteStartTime: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  voteTotalCount: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  voteTox: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  voted: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "view"
  >;

  voter: TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [string],
    "view"
  >;

  voterId: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  withdrawalNode: TypedContractMethod<[], [void], "nonpayable">;

  withdrawalTime: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addAdmin"
  ): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "allAdmins"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "batchAddAdmin"
  ): TypedContractMethod<[amounts: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "batchGetElectors"
  ): TypedContractMethod<
    [startId: BigNumberish, endId: BigNumberish],
    [[bigint[], string[], bigint[], bigint[], boolean[], bigint[]]],
    "view"
  >;
  getFunction(
    nameOrSignature: "batchGetVoter"
  ): TypedContractMethod<
    [eId: BigNumberish, startVoteId: BigNumberish, endVoteId: BigNumberish],
    [[bigint[], string[], bigint[], boolean[], bigint[]]],
    "view"
  >;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<
    [amount: BigNumberish, signature: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "electEndTime"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "electNode"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "electStartTime"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "electStatus"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "electTox"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "elector"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "electorId"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "endElectorId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "erc20Address"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getAllElectors"
  ): TypedContractMethod<
    [],
    [[bigint[], string[], bigint[], bigint[], boolean[], bigint[]]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getElector"
  ): TypedContractMethod<
    [eId: BigNumberish],
    [[string, bigint, bigint, boolean, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getEndElectorId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getVoter"
  ): TypedContractMethod<
    [addr: AddressLike, eId: BigNumberish],
    [[bigint, boolean, bigint, bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isAdmin"
  ): TypedContractMethod<[account: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isElector"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isWithdrawal"
  ): TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "removeAdmin"
  ): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceAdmin"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "returnVote"
  ): TypedContractMethod<[eId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "rewards"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "signerAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalElectEndTime"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalVoteTox"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "vote"
  ): TypedContractMethod<
    [eId: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "voteEndTime"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "voteStartTime"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "voteTotalCount"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "voteTox"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "voted"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "voter"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "voterId"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "withdrawalNode"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawalTime"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getEvent(
    key: "AdminAdded"
  ): TypedContractEvent<
    AdminAddedEvent.InputTuple,
    AdminAddedEvent.OutputTuple,
    AdminAddedEvent.OutputObject
  >;
  getEvent(
    key: "AdminRemoved"
  ): TypedContractEvent<
    AdminRemovedEvent.InputTuple,
    AdminRemovedEvent.OutputTuple,
    AdminRemovedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;

  filters: {
    "AdminAdded(address)": TypedContractEvent<
      AdminAddedEvent.InputTuple,
      AdminAddedEvent.OutputTuple,
      AdminAddedEvent.OutputObject
    >;
    AdminAdded: TypedContractEvent<
      AdminAddedEvent.InputTuple,
      AdminAddedEvent.OutputTuple,
      AdminAddedEvent.OutputObject
    >;

    "AdminRemoved(address)": TypedContractEvent<
      AdminRemovedEvent.InputTuple,
      AdminRemovedEvent.OutputTuple,
      AdminRemovedEvent.OutputObject
    >;
    AdminRemoved: TypedContractEvent<
      AdminRemovedEvent.InputTuple,
      AdminRemovedEvent.OutputTuple,
      AdminRemovedEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
  };
}
