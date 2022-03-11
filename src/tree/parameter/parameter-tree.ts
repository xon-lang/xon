import { ParameterContext } from '../../grammar/xon-parser';
import { ParameterDeclarationMetadata } from '../../metadata/declaration/parameter/parameter-declaration-metadata';
import { IdToken } from '../../util/id-token';
import { SourceRange } from '../../util/source-range';
import { BodyTree } from '../body/body-tree';
import { getBodyTree } from '../body/body-tree-helper';
import { ExpressionTree } from '../expression/expression-tree';
import { getExpressionTree } from '../expression/expression-tree-helper';
import { MethodExpressionTree } from '../expression/method/method-expression-tree';
import { Tree } from '../tree';

export class ParameterTree extends Tree {
  ctx: ParameterContext;
  sourceRange: SourceRange;
  metadata: ParameterDeclarationMetadata;
  id: IdToken;
  type?: ExpressionTree | null;
  body?: BodyTree | null;

  constructor(ctx: ParameterContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.id = new IdToken(ctx._name);
    this.type = getExpressionTree(ctx.expr());
    this.body = getBodyTree(ctx.body());
  }

  toString() {
    let type, body;
    type = this.type?.toString() || '';
    if (type && !(this.type instanceof MethodExpressionTree)) {
      type = ' ' + type;
    }
    body = (this.body && this.body) || '';
    return this.id + type + body;
  }
}
