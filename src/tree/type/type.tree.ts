import { TypeContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export abstract class TypeTree extends BaseTree {
  public ctx?: TypeContext;

  public name = this.constructor.name.replace(/TypeTree/, '');

  abstract equals(other: TypeTree): boolean;

  abstract replaceGenerics(genericsMap: Map<string, TypeTree>): TypeTree;
}
