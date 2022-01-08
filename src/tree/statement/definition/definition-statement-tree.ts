import { DefinitionStatementContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../../util/source-reference';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { IdTree } from '../../id/id-tree';
import { getIdTree } from '../../id/id-tree-helper';
import { ParameterTree } from '../../parameter/parameter-tree';
import { getParameterTrees } from '../../parameter/parameter-tree-helper';
import { StatementTree } from '../statement-tree';

export class DefinitionStatementTree implements StatementTree {
  sourceReference: SourceReference;
  modifier: Modifier;
  id: IdTree;
  parameters: ParameterTree[] = [];
  base?: ExpressionTree;
  attributes: ParameterTree[] = [];

  constructor(ctx: DefinitionStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.modifier = (ctx.modifier() && Modifier[ctx.modifier().text]) || null;
    this.id = getIdTree(ctx.id());
    this.parameters = getParameterTrees(ctx.parameters()?.parameter());
    this.base = getExpressionTree(ctx._base) || null;
    this.attributes = getParameterTrees(ctx.definitionBody()?.parameter());
  }

  toString(): string {
    const modifier = this.modifier.toString();
    const parameters =
      (this.parameters.length &&
        this.modifier === Modifier.class &&
        '(' + this.parameters.join(', ') + ')') ||
      '';
    const base = (this.base && 'is ' + this.base) || '';

    const body =
      (this.attributes.length && '\n' + this.attributes.join('\n').replace(/^(.+\S)/gm, '  $1')) ||
      '';
    const header = [modifier, this.id + parameters, base].filter(Boolean).join(' ');

    return header + body;
  }
}

export enum Modifier {
  class = 'class',
  model = 'model',
  object = 'object',
}
