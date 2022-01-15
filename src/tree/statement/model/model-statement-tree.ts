import { ModelStatementContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../../util/source-reference';
import { IdTree } from '../../id/id-tree';
import { getIdTree } from '../../id/id-tree-helper';
import { ParameterTree } from '../../parameter/parameter-tree';
import { getParameterTrees } from '../../parameter/parameter-tree-helper';
import { StatementTree } from '../statement-tree';

export class ModelStatementTree implements StatementTree {
  sourceReference: SourceReference;
  id: IdTree;
  base?: IdTree;
  attributes: ParameterTree[] = [];

  constructor(ctx: ModelStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.id = getIdTree(ctx._name);
    this.base = getIdTree(ctx._base) || null;
    this.attributes = getParameterTrees(ctx.definitionBody()?.parameter());
  }

  toString(): string {
    const base = (this.base && 'is ' + this.base) || '';

    const body =
      (this.attributes.length && '\n' + this.attributes.join('\n').replace(/^(.+\S)/gm, '  $1')) ||
      '';
    const header = [this.id, base].filter(Boolean).join(' ');

    return header + body;
  }
}
