import { MemberExpressionTree } from '../../../../tree/expression/member/member-expression-tree';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslator } from '../expression-translator-helper';

export class MemberExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: MemberExpressionTree, private isType: boolean) {}

  toString(): string {
    const instance = getExpressionTranslator(this.tree.instance, this.isType);
    return `${instance}.${this.tree.name}`;
  }
}
