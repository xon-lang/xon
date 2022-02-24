import { MethodExpressionTree } from '../../../../tree/expression/method/method-expression-tree';
import { getParameterTranslators } from '../../parameter/parameter-translator-helper';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslator } from '../expression-translator-helper';

export class MethodExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: MethodExpressionTree, private isType: boolean) {}

  toString(): string {
    const parameters = getParameterTranslators(this.tree.parameters);
    const result = getExpressionTranslator(this.tree.result, false);
    if (this.isType) {
      return `(${parameters.join(', ')}): ${result}`;
    }
    return `(${parameters.join(', ')}) => ${result}`;
  }
}
