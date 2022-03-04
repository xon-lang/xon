import { ParameterContext } from '../../grammar/xon-parser';
import { SourceReference } from '../../util/source-reference';
import { BodyTree } from '../body/body-tree';
import { getBodyTree } from '../body/body-tree-helper';
import { ExpressionTree } from '../expression/expression-tree';
import { getExpressionTree } from '../expression/expression-tree-helper';
import { MethodExpressionTree } from '../expression/method/method-expression-tree';
import { IdTree } from '../id/id-tree';
import { getIdTree } from '../id/id-tree-helper';
import { Tree } from '../tree';

export class ParameterTree implements Tree {
  sourceReference: SourceReference;
  id: IdTree;
  type?: ExpressionTree;
  body?: BodyTree;

  constructor(private ctx: ParameterContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.id = getIdTree(ctx.id());
    this.type = getExpressionTree(ctx.expr());
    this.body = getBodyTree(ctx.body());
  }

  toString() {
    let type = this.type?.toString() || '';
    if (type && (this.ctx.id().OPERATOR() || !(this.type instanceof MethodExpressionTree)))
      type = ' ' + type;

    const body = (this.body && this.body) || '';
    return this.id + type + body;
  }
}
