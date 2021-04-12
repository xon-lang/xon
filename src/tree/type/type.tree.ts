import { TypeContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export abstract class TypeTree extends BaseTree {
  public ctx?: TypeContext;

  public isGeneric: boolean;

  abstract equals(other: TypeTree): boolean;

  abstract replaceGenerics(map: Map<string, TypeTree>): TypeTree;
}
