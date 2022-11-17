import { ParserRuleContext } from 'antlr4ts';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { IdTree } from '~/tree/id/id-tree';
import { SourceRange } from '~/util/source-range';

export class InfixExpressionTree extends ExpressionTree {
  ctx: ParserRuleContext | null;
  name: IdTree;
  left: ExpressionTree;
  right: ExpressionTree;
  sourceRange: SourceRange | null = null;

  constructor(name: IdTree, left: ExpressionTree, right: ExpressionTree) {
    super();
    this.ctx = left.ctx?.parent ?? null;
    this.name = name;
    this.left = left;
    this.right = right;
    if (left.sourceRange && right.sourceRange) {
      this.sourceRange = SourceRange.fromTwoRange(left.sourceRange, right.sourceRange);
    }
    this.addChildren(this.left, this.name, this.right);
  }
}
