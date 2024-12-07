import {$FunctionData, Boolean2, FunctionData, String2} from '#common';

export function newFunctionData(fn: Function): FunctionData {
  return {
    $: $FunctionData,
    _fn: fn,

    invoke(...args: any[]): any {
      return this._fn(args);
    },

    equals(other: FunctionData): Boolean2 {
      return this._fn === other._fn;
    },

    toString(): String2 {
      return this._fn.toString();
    },
  };
}
