import { BaseTree } from '../tree/base.tree';
import { TypeTree } from '../tree/type/type.tree';
import { GenericsMap } from './generics-map';

export abstract class BaseType {
  abstract tree: BaseTree;

  abstract genericsMap: GenericsMap;

  abstract type(): TypeTree;
}
