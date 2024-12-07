import {commonPackageType, Model_V2} from '#common';

export interface FunctionData extends Model_V2 {
  _fn: Function;

  // todo fix typings
  invoke(...args: any[]): any;
}

export const $FunctionData = commonPackageType<FunctionData>('FunctionData');
