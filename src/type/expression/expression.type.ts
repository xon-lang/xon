import { ExpressionTree } from '../../tree/expression/expression.tree';
import { BaseType } from '../base.type';

export abstract class ExpressionType extends BaseType {
  abstract tree: ExpressionTree;
}
