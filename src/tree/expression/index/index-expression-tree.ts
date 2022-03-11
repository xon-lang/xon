import { IndexExpressionContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree, getExpressionTrees } from '../expression-tree-helper';

export class IndexExpressionTree implements ExpressionTree {
  sourceRange: SourceRange;
  metadata: ExpressionMetadata;
  instance: ExpressionTree;
  arguments: ExpressionTree[];

  constructor(ctx: IndexExpressionContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.instance = getExpressionTree(ctx._instance);
    this.arguments = getExpressionTrees(ctx._args);
  }

  toString(): String {
    return `${this.instance}[${this.arguments.join(', ')}]`;
  }
}
