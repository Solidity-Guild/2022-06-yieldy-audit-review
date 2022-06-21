/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface StakingStorageInterface extends utils.Interface {
  functions: {
    "BASIS_POINTS()": FunctionFragment;
    "COW_RELAYER()": FunctionFragment;
    "COW_SETTLEMENT()": FunctionFragment;
    "CURVE_POOL()": FunctionFragment;
    "FEE_ADDRESS()": FunctionFragment;
    "LIQUIDITY_RESERVE()": FunctionFragment;
    "STAKING_TOKEN()": FunctionFragment;
    "TOKE_MANAGER()": FunctionFragment;
    "TOKE_POOL()": FunctionFragment;
    "TOKE_REWARD()": FunctionFragment;
    "TOKE_TOKEN()": FunctionFragment;
    "YIELDY_TOKEN()": FunctionFragment;
    "affiliateFee()": FunctionFragment;
    "coolDownInfo(address)": FunctionFragment;
    "coolDownPeriod()": FunctionFragment;
    "curvePoolFrom()": FunctionFragment;
    "curvePoolTo()": FunctionFragment;
    "epoch()": FunctionFragment;
    "isInstantUnstakingPaused()": FunctionFragment;
    "isStakingPaused()": FunctionFragment;
    "isUnstakingPaused()": FunctionFragment;
    "lastTokeCycleIndex()": FunctionFragment;
    "requestWithdrawalAmount()": FunctionFragment;
    "timeLeftToRequestWithdrawal()": FunctionFragment;
    "warmUpInfo(address)": FunctionFragment;
    "warmUpPeriod()": FunctionFragment;
    "withdrawalAmount()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BASIS_POINTS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COW_RELAYER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COW_SETTLEMENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CURVE_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FEE_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LIQUIDITY_RESERVE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "STAKING_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TOKE_MANAGER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "TOKE_POOL", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "TOKE_REWARD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TOKE_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "YIELDY_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "affiliateFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "coolDownInfo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "coolDownPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "curvePoolFrom",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "curvePoolTo",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "epoch", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isInstantUnstakingPaused",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isStakingPaused",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isUnstakingPaused",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastTokeCycleIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestWithdrawalAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "timeLeftToRequestWithdrawal",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "warmUpInfo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "warmUpPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawalAmount",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "BASIS_POINTS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "COW_RELAYER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "COW_SETTLEMENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "CURVE_POOL", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "FEE_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LIQUIDITY_RESERVE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "STAKING_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TOKE_MANAGER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "TOKE_POOL", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "TOKE_REWARD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "TOKE_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "YIELDY_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "affiliateFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "coolDownInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "coolDownPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "curvePoolFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "curvePoolTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "epoch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInstantUnstakingPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isStakingPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isUnstakingPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastTokeCycleIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestWithdrawalAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeLeftToRequestWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "warmUpInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "warmUpPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawalAmount",
    data: BytesLike
  ): Result;

  events: {};
}

export interface StakingStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StakingStorageInterface;

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
    BASIS_POINTS(overrides?: CallOverrides): Promise<[BigNumber]>;

    COW_RELAYER(overrides?: CallOverrides): Promise<[string]>;

    COW_SETTLEMENT(overrides?: CallOverrides): Promise<[string]>;

    CURVE_POOL(overrides?: CallOverrides): Promise<[string]>;

    FEE_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    LIQUIDITY_RESERVE(overrides?: CallOverrides): Promise<[string]>;

    STAKING_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    TOKE_MANAGER(overrides?: CallOverrides): Promise<[string]>;

    TOKE_POOL(overrides?: CallOverrides): Promise<[string]>;

    TOKE_REWARD(overrides?: CallOverrides): Promise<[string]>;

    TOKE_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    YIELDY_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    affiliateFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    coolDownInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        credits: BigNumber;
        expiry: BigNumber;
      }
    >;

    coolDownPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    curvePoolFrom(overrides?: CallOverrides): Promise<[BigNumber]>;

    curvePoolTo(overrides?: CallOverrides): Promise<[BigNumber]>;

    epoch(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        duration: BigNumber;
        number: BigNumber;
        timestamp: BigNumber;
        endTime: BigNumber;
        distribute: BigNumber;
      }
    >;

    isInstantUnstakingPaused(overrides?: CallOverrides): Promise<[boolean]>;

    isStakingPaused(overrides?: CallOverrides): Promise<[boolean]>;

    isUnstakingPaused(overrides?: CallOverrides): Promise<[boolean]>;

    lastTokeCycleIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    requestWithdrawalAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    timeLeftToRequestWithdrawal(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    warmUpInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        credits: BigNumber;
        expiry: BigNumber;
      }
    >;

    warmUpPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdrawalAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;

  COW_RELAYER(overrides?: CallOverrides): Promise<string>;

  COW_SETTLEMENT(overrides?: CallOverrides): Promise<string>;

  CURVE_POOL(overrides?: CallOverrides): Promise<string>;

  FEE_ADDRESS(overrides?: CallOverrides): Promise<string>;

  LIQUIDITY_RESERVE(overrides?: CallOverrides): Promise<string>;

  STAKING_TOKEN(overrides?: CallOverrides): Promise<string>;

  TOKE_MANAGER(overrides?: CallOverrides): Promise<string>;

  TOKE_POOL(overrides?: CallOverrides): Promise<string>;

  TOKE_REWARD(overrides?: CallOverrides): Promise<string>;

  TOKE_TOKEN(overrides?: CallOverrides): Promise<string>;

  YIELDY_TOKEN(overrides?: CallOverrides): Promise<string>;

  affiliateFee(overrides?: CallOverrides): Promise<BigNumber>;

  coolDownInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      amount: BigNumber;
      credits: BigNumber;
      expiry: BigNumber;
    }
  >;

  coolDownPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  curvePoolFrom(overrides?: CallOverrides): Promise<BigNumber>;

  curvePoolTo(overrides?: CallOverrides): Promise<BigNumber>;

  epoch(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      duration: BigNumber;
      number: BigNumber;
      timestamp: BigNumber;
      endTime: BigNumber;
      distribute: BigNumber;
    }
  >;

  isInstantUnstakingPaused(overrides?: CallOverrides): Promise<boolean>;

  isStakingPaused(overrides?: CallOverrides): Promise<boolean>;

  isUnstakingPaused(overrides?: CallOverrides): Promise<boolean>;

  lastTokeCycleIndex(overrides?: CallOverrides): Promise<BigNumber>;

  requestWithdrawalAmount(overrides?: CallOverrides): Promise<BigNumber>;

  timeLeftToRequestWithdrawal(overrides?: CallOverrides): Promise<BigNumber>;

  warmUpInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      amount: BigNumber;
      credits: BigNumber;
      expiry: BigNumber;
    }
  >;

  warmUpPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  withdrawalAmount(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;

    COW_RELAYER(overrides?: CallOverrides): Promise<string>;

    COW_SETTLEMENT(overrides?: CallOverrides): Promise<string>;

    CURVE_POOL(overrides?: CallOverrides): Promise<string>;

    FEE_ADDRESS(overrides?: CallOverrides): Promise<string>;

    LIQUIDITY_RESERVE(overrides?: CallOverrides): Promise<string>;

    STAKING_TOKEN(overrides?: CallOverrides): Promise<string>;

    TOKE_MANAGER(overrides?: CallOverrides): Promise<string>;

    TOKE_POOL(overrides?: CallOverrides): Promise<string>;

    TOKE_REWARD(overrides?: CallOverrides): Promise<string>;

    TOKE_TOKEN(overrides?: CallOverrides): Promise<string>;

    YIELDY_TOKEN(overrides?: CallOverrides): Promise<string>;

    affiliateFee(overrides?: CallOverrides): Promise<BigNumber>;

    coolDownInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        credits: BigNumber;
        expiry: BigNumber;
      }
    >;

    coolDownPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    curvePoolFrom(overrides?: CallOverrides): Promise<BigNumber>;

    curvePoolTo(overrides?: CallOverrides): Promise<BigNumber>;

    epoch(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        duration: BigNumber;
        number: BigNumber;
        timestamp: BigNumber;
        endTime: BigNumber;
        distribute: BigNumber;
      }
    >;

    isInstantUnstakingPaused(overrides?: CallOverrides): Promise<boolean>;

    isStakingPaused(overrides?: CallOverrides): Promise<boolean>;

    isUnstakingPaused(overrides?: CallOverrides): Promise<boolean>;

    lastTokeCycleIndex(overrides?: CallOverrides): Promise<BigNumber>;

    requestWithdrawalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    timeLeftToRequestWithdrawal(overrides?: CallOverrides): Promise<BigNumber>;

    warmUpInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        credits: BigNumber;
        expiry: BigNumber;
      }
    >;

    warmUpPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawalAmount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;

    COW_RELAYER(overrides?: CallOverrides): Promise<BigNumber>;

    COW_SETTLEMENT(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    FEE_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    LIQUIDITY_RESERVE(overrides?: CallOverrides): Promise<BigNumber>;

    STAKING_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    TOKE_MANAGER(overrides?: CallOverrides): Promise<BigNumber>;

    TOKE_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    TOKE_REWARD(overrides?: CallOverrides): Promise<BigNumber>;

    TOKE_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    YIELDY_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    affiliateFee(overrides?: CallOverrides): Promise<BigNumber>;

    coolDownInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    coolDownPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    curvePoolFrom(overrides?: CallOverrides): Promise<BigNumber>;

    curvePoolTo(overrides?: CallOverrides): Promise<BigNumber>;

    epoch(overrides?: CallOverrides): Promise<BigNumber>;

    isInstantUnstakingPaused(overrides?: CallOverrides): Promise<BigNumber>;

    isStakingPaused(overrides?: CallOverrides): Promise<BigNumber>;

    isUnstakingPaused(overrides?: CallOverrides): Promise<BigNumber>;

    lastTokeCycleIndex(overrides?: CallOverrides): Promise<BigNumber>;

    requestWithdrawalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    timeLeftToRequestWithdrawal(overrides?: CallOverrides): Promise<BigNumber>;

    warmUpInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    warmUpPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawalAmount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BASIS_POINTS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    COW_RELAYER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    COW_SETTLEMENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CURVE_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FEE_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LIQUIDITY_RESERVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    STAKING_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOKE_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOKE_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOKE_REWARD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOKE_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    YIELDY_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    affiliateFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    coolDownInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    coolDownPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    curvePoolFrom(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    curvePoolTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    epoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isInstantUnstakingPaused(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isStakingPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isUnstakingPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastTokeCycleIndex(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requestWithdrawalAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    timeLeftToRequestWithdrawal(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    warmUpInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    warmUpPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawalAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
