import { ExpressionTree } from '../../tree/expression/expression.tree';
import { TypeTree } from '../../tree/type/type.tree';
import { BaseType } from '../base.type';

export abstract class ExpressionType extends BaseType {
  abstract tree: ExpressionTree;

  public typedTree(): ExpressionTree {
    this.tree.type = this.type();
    return this.tree;
  }

  abstract type(): TypeTree;
}
