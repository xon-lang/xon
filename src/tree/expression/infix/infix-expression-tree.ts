// this code was generated

import { ParserRuleContext } from 'antlr4ts';
import { SourceRange } from '../../../util/source-range';
import { IdTree } from '../../id/id-tree';
import { ExpressionTree } from '../expression-tree';

export class InfixExpressionTree extends ExpressionTree {
  ctx: ParserRuleContext;
  name: IdTree;
  left: ExpressionTree;
  right: ExpressionTree;
  sourceRange: SourceRange;

  constructor(name: IdTree, left: ExpressionTree, right: ExpressionTree) {
    super();
    this.ctx = left.ctx.parent;
    this.name = name;
    this.left = left;
    this.right = right;
    this.sourceRange = SourceRange.fromTwoRange(left.sourceRange, right.sourceRange);
    this.addChildren(this.left, this.name, this.right);
  }
}

// this code was generated
