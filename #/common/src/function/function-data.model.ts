import {commonPackageType, Model} from '#common';

export interface FunctionData extends Model {
  _fn: Function;

  // todo fix typings
  invoke(...args: any[]): any;
}

export const $FunctionData = commonPackageType<FunctionData>('FunctionData');
