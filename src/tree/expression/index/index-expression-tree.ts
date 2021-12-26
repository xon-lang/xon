import { IndexExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { SourceReference } from '../../util/source-reference';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree, getExpressionTrees } from '../expression-tree-helper';

export class IndexExpressionTree implements ExpressionTree {
  sourceReference: SourceReference;
  metadata: ExpressionMetadata;
  instance: ExpressionTree;
  arguments: ExpressionTree[];

  constructor(ctx: IndexExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.instance = getExpressionTree(ctx._instance);
    this.arguments = getExpressionTrees(ctx._args);
  }

  toString(): string {
    return `${this.instance}[${this.arguments.join(', ')}]`;
  }
}
