import { String } from '../../../../lib/core';
import { IdExpressionTree } from '../../../../tree/expression/id/id-expression-tree';
import { ExpressionTranslator } from '../expression-translator';

export class IdExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: IdExpressionTree, private isType: boolean) {}

  toString(): String {
    return this.tree.name.text;
  }
}
