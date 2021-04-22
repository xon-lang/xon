import { ExpressionTree } from '../../tree/expression/expression.tree';
import { TypeTree } from '../../tree/type/type.tree';
import { BaseInference } from '../base.inference';

export abstract class ExpressionInference extends BaseInference {
  public type: TypeTree;

  abstract tree: ExpressionTree;
}
