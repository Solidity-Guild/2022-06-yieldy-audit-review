/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MigrationInterface extends utils.Interface {
  functions: {
    "NEW_CONTRACT()": FunctionFragment;
    "OLD_CONTRACT()": FunctionFragment;
    "OLD_YIELDY_TOKEN()": FunctionFragment;
    "moveFundsToUpgradedContract()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "NEW_CONTRACT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OLD_CONTRACT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OLD_YIELDY_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "moveFundsToUpgradedContract",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "NEW_CONTRACT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "OLD_CONTRACT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "OLD_YIELDY_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moveFundsToUpgradedContract",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Migration extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MigrationInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    NEW_CONTRACT(overrides?: CallOverrides): Promise<[string]>;

    OLD_CONTRACT(overrides?: CallOverrides): Promise<[string]>;

    OLD_YIELDY_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    moveFundsToUpgradedContract(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  NEW_CONTRACT(overrides?: CallOverrides): Promise<string>;

  OLD_CONTRACT(overrides?: CallOverrides): Promise<string>;

  OLD_YIELDY_TOKEN(overrides?: CallOverrides): Promise<string>;

  moveFundsToUpgradedContract(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    NEW_CONTRACT(overrides?: CallOverrides): Promise<string>;

    OLD_CONTRACT(overrides?: CallOverrides): Promise<string>;

    OLD_YIELDY_TOKEN(overrides?: CallOverrides): Promise<string>;

    moveFundsToUpgradedContract(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    NEW_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;

    OLD_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;

    OLD_YIELDY_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    moveFundsToUpgradedContract(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    NEW_CONTRACT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    OLD_CONTRACT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    OLD_YIELDY_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    moveFundsToUpgradedContract(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}