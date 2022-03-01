import { InfixExpressionTree } from '../../../../tree/expression/infix/infix-expression-tree';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslator } from '../expression-translator-helper';

export class InfixExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: InfixExpressionTree, private isType: boolean) {}

  toString(): string {
    const left = getExpressionTranslator(this.tree.left, false);
    const right = getExpressionTranslator(this.tree.right, false);

    const idMap = {
      is: 'instanceof',
      and: '&&',
      or: '||',
    };
    const id = idMap[this.tree.id.text] || this.tree.id.text;
    return `${left} ${id} ${right}`;
  }
}
