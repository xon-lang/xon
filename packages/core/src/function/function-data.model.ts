import {$CoreType, Model} from '#core';

export interface FunctionData<T extends Function = Function> extends Model {
  invoke: T;
}

export const $FunctionData = () => $CoreType<FunctionData>('FunctionData');
