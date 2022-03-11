import { String } from '../../../../lib/core';
import { PreprocessorExpressionTree } from '../../../../tree/expression/preprocessor/preprocessor-expression-tree';
import { ExpressionTranslator } from '../expression-translator';

export class PreprocessorExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: PreprocessorExpressionTree, private isType: boolean) {}

  toString(): String {
    return this.tree.value;
  }
}
