import { ParameterContext } from '../../grammar/xon-parser';
import { SourceReference } from '../../util/source-reference';
import { BodyTree } from '../body/body-tree';
import { getBodyTree } from '../body/body-tree-helper';
import { ExpressionTree } from '../expression/expression-tree';
import { getExpressionTree } from '../expression/expression-tree-helper';
import { IndexExpressionTree } from '../expression/index/index-expression-tree';
import { MethodExpressionTree } from '../expression/method/method-expression-tree';
import { IdTree } from '../id/id-tree';
import { getIdTree } from '../id/id-tree-helper';
import { Tree } from '../tree';

export class ParameterTree implements Tree {
  sourceReference: SourceReference;
  hasSpread: boolean;
  id: IdTree;
  type?: ExpressionTree;
  body?: BodyTree;

  constructor(ctx: ParameterContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.hasSpread = !!ctx.SPREAD();
    this.id = getIdTree(ctx.id());
    this.type = getExpressionTree(ctx.expr()) || null;
    this.body = getBodyTree(ctx.body()) || null;
  }

  toString(): string {
    const spread = (this.hasSpread && '...') || '';
    const body = (this.body && this.body + '\n') || '';
    const header = [spread + this.id + this.typeToString()].filter(Boolean).join(' ');
    return header + body;
  }

  typeToString() {
    if (this.type instanceof MethodExpressionTree || this.type instanceof IndexExpressionTree) {
      return this.type;
    }
    if (this.type) {
      return ' ' + this.type;
    }
    return '';
  }
}

export enum Modifier {
  class = 'class',
  model = 'model',
  object = 'object',
}
