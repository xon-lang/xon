import { InfixExpressionTree } from '../../../../tree/expression/infix/infix-expression-tree';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslator } from '../expression-translator-helper';

export class InfixExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: InfixExpressionTree, private isType: boolean) {}

  toString(): string {
    const left = getExpressionTranslator(this.tree.left, this.isType);
    const right = getExpressionTranslator(this.tree.right, this.isType);

    const idMap = {
      is: 'instanceof',
      and: (this.isType && '&') || '&&',
      or: (this.isType && '|') || '||',
    };
    const id = idMap[this.tree.name.text] || this.tree.name.text;
    return `${left} ${id} ${right}`;
  }
}
