import { AttributeContext } from '../../grammar/xon-parser';
import { AttributeDeclarationMetadata } from '../../metadata/declaration/attribute/attribute-declaration-metadata';
import { IdToken } from '../../util/id-token';
import { SourceRange } from '../../util/source-range';
import { BodyTree } from '../body/body-tree';
import { getBodyTree } from '../body/body-tree-helper';
import { ExpressionTree } from '../expression/expression-tree';
import { getExpressionTree } from '../expression/expression-tree-helper';
import { IdTree } from '../id/id-tree';
import { getIdTree } from '../id/id-tree-helper';
import { ParameterTree } from '../parameter/parameter-tree';
import { getParameterTrees } from '../parameter/parameter-tree-helper';
import { Tree } from '../tree';

export class AttributeTree implements Tree {
  metadata: AttributeDeclarationMetadata;
  sourceReference: SourceRange;
  modifier?: IdToken;
  isMethod: boolean;
  isOperator: boolean;
  id: IdTree;
  parameters: ParameterTree[];
  type?: ExpressionTree;
  body?: BodyTree;

  constructor(private ctx: AttributeContext) {
    this.sourceReference = SourceRange.fromContext(ctx);

    this.modifier = (ctx._modifier && new IdToken(ctx._modifier)) || null;
    this.isMethod = !!ctx.parameters();
    this.isOperator = this.modifier?.text === 'operator';
    this.id = getIdTree(ctx.id());
    this.parameters = getParameterTrees(ctx.parameters()?.parameter());
    this.type = getExpressionTree(ctx.expr()) || null;
    this.body = getBodyTree(ctx.body()) || null;
  }

  toString() {
    const modifier = (this.modifier && this.modifier + ' ') || '';
    let parameters = (this.isMethod && `(${this.parameters.join(', ')})`) || '';
    if (this.isOperator) {
      parameters = ' ' + parameters;
    }
    const type = (this.type && ' ' + this.type) || '';

    const body = (this.body && this.body) || '';
    return modifier + this.id + parameters + type + body;
  }
}
