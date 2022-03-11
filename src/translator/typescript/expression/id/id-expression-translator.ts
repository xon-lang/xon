import { IdExpressionTree } from '../../../../tree/expression/id/id-expression-tree';
import { ExpressionTranslator } from '../expression-translator';

export class IdExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: IdExpressionTree, private isType: boolean) {}

  toString(): string {
    return this.tree.id.text;
  }
}
