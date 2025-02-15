import {$CommonType} from '#common';
import {Model} from '#typing';

export interface FunctionData<T extends Function = Function> extends Model {
  invoke: T;
}

export const $FunctionData = () => $CommonType<FunctionData>('FunctionData');
