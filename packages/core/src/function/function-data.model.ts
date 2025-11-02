import {$CoreType} from '#core';
import {Model} from '#typing';

export interface FunctionData<T extends Function = Function> extends Model {
  invoke: T;
}

export const $FunctionData = () => $CoreType<FunctionData>('FunctionData');
