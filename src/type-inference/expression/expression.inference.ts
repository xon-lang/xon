import { ExpressionTree } from '../../tree/expression/expression.tree';
import { BaseInference } from '../base.inference';

export abstract class ExpressionInference extends BaseInference {
  public abstract tree: ExpressionTree;
}
