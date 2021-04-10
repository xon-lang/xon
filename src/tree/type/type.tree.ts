import { TypeContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export abstract class TypeTree extends BaseTree {
  public ctx?: TypeContext;

  abstract equals(other: TypeTree): boolean;
}
