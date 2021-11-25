import { TypeInfo } from '../metadata/type/type-info';
import { BaseTree } from '../tree/base.tree';
import { GenericsMap } from './generics-map';

export abstract class BaseInference {
  metadata: TypeInfo;
  abstract tree: BaseTree;
  genericsMap: GenericsMap;
}
