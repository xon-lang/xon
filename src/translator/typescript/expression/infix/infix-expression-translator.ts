import { String } from '../../../../lib/core';
import { InfixExpressionTree } from '../../../../tree/expression/infix/infix-expression-tree';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslator } from '../expression-translator-helper';

export class InfixExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: InfixExpressionTree, private isType: boolean) {}

  toString(): String {
    const left = getExpressionTranslator(this.tree.left, this.isType).toString();
    const right = getExpressionTranslator(this.tree.right, this.isType).toString();

    // todo replace String with metadata
    if (this.tree.name.text === 'is' && right === 'String') {
      return `typeof ${left} === 'string'`;
    }
    if (this.tree.name.text === 'is' && right === 'Number') {
      return `typeof ${left} === 'number'`;
    }
    if (this.tree.name.text === 'is' && right === 'Boolean') {
      return `typeof ${left} === 'boolean'`;
    }

    const idMap = {
      '==': '===',
      '!=': '!==',
      is: 'instanceof',
      and: (this.isType && '&') || '&&',
      or: (this.isType && '|') || '||',
    };

    const id = idMap[this.tree.name.text] || this.tree.name.text;
    return `${left} ${id} ${right}`;
  }
}
