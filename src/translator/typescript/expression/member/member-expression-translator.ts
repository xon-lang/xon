import { MemberExpressionTree } from '../../../../tree/expression/member/member-expression-tree';
import { ExpressionTranslator } from '../expression-translator';

export class MemberExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: MemberExpressionTree, private isType: boolean) {}

  toString(): string {
    return this.tree.toString();
  }
}
