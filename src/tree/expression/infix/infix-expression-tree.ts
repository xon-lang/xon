import { ParserRuleContext } from 'antlr4ts';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { Token } from '~/tree/token';

export class InfixExpressionTree extends ExpressionTree {
  ctx: ParserRuleContext | null;
  name: Token;
  left: ExpressionTree;
  right: ExpressionTree;
  sourceSpan: SourceSpan;

  constructor(name: Token, left: ExpressionTree, right: ExpressionTree) {
    super();
    this.ctx = left.ctx?.parent ?? null;
    this.name = name;
    this.left = left;
    this.right = right;
    this.sourceSpan = SourceSpan.fromTwoRange(left.sourceSpan, right.sourceSpan);
    this.addChildren(this.left, this.name, this.right);
  }
}
