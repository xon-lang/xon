import { DeclarationContext } from '../../grammar/xon-parser';
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

export class DeclarationTree implements Tree {
  sourceReference: SourceReference;
  modifier?: Modifier;
  hasSpread: boolean;
  id: IdTree;
  type?: ExpressionTree;
  base?: ExpressionTree;
  body?: BodyTree;

  constructor(ctx: DeclarationContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.modifier = (ctx.modifier() && Modifier[ctx.modifier().text]) || null;
    this.hasSpread = !!ctx.SPREAD();
    this.id = getIdTree(ctx.id());
    this.type = getExpressionTree(ctx._type) || null;
    this.base = getExpressionTree(ctx._base) || null;
    this.body = getBodyTree(ctx.body()) || null;
  }

  toString(): string {
    const modifier = this.modifier?.toString() || '';
    const spread = (this.hasSpread && '...') || '';
    const base = (this.base && 'is ' + this.base) || '';

    const body = (this.body && this.body + '\n') || '';
    const header = [modifier, spread + this.id + this.typeToString(), base]
      .filter(Boolean)
      .join(' ');

    return header + ' -- declaration -- ' + body;
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
