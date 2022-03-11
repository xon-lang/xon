import { ImportStatementContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree, getExpressionTrees } from '../../expression/expression-tree-helper';
import { StatementTree } from '../statement-tree';

export class ImportStatementTree implements StatementTree {
  sourceRange: SourceRange;
  path: ExpressionTree;
  members?: ExpressionTree[];

  constructor(ctx: ImportStatementContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.path = getExpressionTree(ctx._path);
    this.members = getExpressionTrees(ctx._members);
  }

  toString(): String {
    return `import ${this.path}: ${this.members.join(', ')}`;
  }
}
