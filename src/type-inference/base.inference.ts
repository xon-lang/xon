import { BaseTree } from '../tree/base.tree';
import { TypeTree } from '../tree/type/type.tree';
import { GenericsMap } from './generics-map';

export abstract class BaseInference {
  public type: TypeTree;
  public abstract tree: BaseTree;
  public abstract genericsMap: GenericsMap;
}
