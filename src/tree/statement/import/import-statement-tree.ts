import { ImportStatementContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../../util/source-reference';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree, getExpressionTrees } from '../../expression/expression-tree-helper';
import { StatementTree } from '../statement-tree';

export class ImportStatementTree implements StatementTree {
  sourceReference: SourceReference;
  path: ExpressionTree;
  members?: ExpressionTree[];

  constructor(ctx: ImportStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.path = getExpressionTree(ctx._path);
    this.members = getExpressionTrees(ctx._members);
  }

  toString(): string {
    return `import ${this.path}: ${this.members.join(', ')}`;
  }
}
