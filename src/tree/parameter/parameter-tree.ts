import { ParameterContext } from '../../grammar/xon-parser';
import { IdToken } from '../../util/id-token';
import { SourceReference } from '../../util/source-reference';
import { BodyTree } from '../body/body-tree';
import { getBodyTree } from '../body/body-tree-helper';
import { ExpressionTree } from '../expression/expression-tree';
import { getExpressionTree } from '../expression/expression-tree-helper';
import { IndexExpressionTree } from '../expression/index/index-expression-tree';
import { MethodExpressionTree } from '../expression/method/method-expression-tree';
import { Tree } from '../tree';

export class ParameterTree implements Tree {
  sourceReference: SourceReference;
  id: IdToken;
  type?: ExpressionTree;
  body?: BodyTree;

  constructor(ctx: ParameterContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.id = (ctx._op && new IdToken(ctx._op)) || new IdToken(ctx.id()._name);
    this.type = getExpressionTree(ctx.expr()) || null;
    this.body = getBodyTree(ctx.body()) || null;
  }

  toString(): string {
    const body = (this.body && this.body + '\n') || '';
    const header = [this.id.toString() + this.typeToString()].filter(Boolean).join(' ');
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
