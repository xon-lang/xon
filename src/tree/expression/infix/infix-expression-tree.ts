import { ParserRuleContext } from 'antlr4ts';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { IdTree } from '~/tree/id/id-tree';
import { SourceSpan } from '~/util/source/source-span';

export class InfixExpressionTree extends ExpressionTree {
  ctx: ParserRuleContext | null;
  name: IdTree;
  left: ExpressionTree;
  right: ExpressionTree;
  sourceRange: SourceSpan;

  constructor(name: IdTree, left: ExpressionTree, right: ExpressionTree) {
    super();
    this.ctx = left.ctx?.parent ?? null;
    this.name = name;
    this.left = left;
    this.right = right;
    this.sourceRange = SourceSpan.fromTwoRange(left.sourceRange, right.sourceRange);
    this.addChildren(this.left, this.name, this.right);
  }
}
