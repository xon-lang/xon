import {$FunctionData, Boolean2, FunctionData, String2} from '#common';

export function newFunctionData<T extends Function>(fn: T): FunctionData<T> {
  return {
    $: $FunctionData,
    invoke: fn,

    equals(other: FunctionData): Boolean2 {
      return this.invoke === other.invoke;
    },

    toString(): String2 {
      return this.invoke.toString();
    },
  };
}
