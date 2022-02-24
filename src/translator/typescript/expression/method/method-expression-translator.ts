import { MethodExpressionTree } from '../../../../tree/expression/method/method-expression-tree';
import { getBodyTranslator } from '../../body/body-translator-helper';
import { getParameterTranslators } from '../../parameter/parameter-translator-helper';
import { ExpressionTranslator } from '../expression-translator';

export class MethodExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: MethodExpressionTree, private isType: boolean) {}

  toString(): string {
    const parameters = getParameterTranslators(this.tree.parameters);
    const body = getBodyTranslator(this.tree.body);
    if (this.isType) {
      return `(${parameters.join(', ')}): ${body}`;
    }
    return `(${parameters.join(', ')}) => ${body}`;
  }
}
