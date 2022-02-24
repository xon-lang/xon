import { IdExpressionTree } from '../../../../tree/expression/id/id-expression-tree';
import { getIdTranslator } from '../../id/id-translator-helper';
import { ExpressionTranslator } from '../expression-translator';

export class IdExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: IdExpressionTree, private isType: boolean) {}

  toString(): string {
    return getIdTranslator(this.tree.id).toString();
  }
}
