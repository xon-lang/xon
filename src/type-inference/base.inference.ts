import { BaseTree } from '../tree/base.tree';
import { GenericsMap } from './generics-map';

export abstract class BaseInference {
  abstract tree: BaseTree;

  abstract genericsMap: GenericsMap;
}
