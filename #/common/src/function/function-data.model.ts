import {commonPackageType} from '#common';
import {Model} from '#typing';

export interface FunctionData extends Model {
  _fn: Function;

  // todo fix typings
  invoke(...args: any[]): any;
}

export const $FunctionData = commonPackageType<FunctionData>('FunctionData');
