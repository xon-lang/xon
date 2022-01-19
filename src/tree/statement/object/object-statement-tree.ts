import { ObjectStatementContext } from '../../../grammar/xon-parser';
import { Issue } from '../../../issue-service/issue';
import { SourceReference } from '../../../util/source-reference';
import { IdTree } from '../../id/id-tree';
import { getIdTree } from '../../id/id-tree-helper';
import { ParameterTree } from '../../parameter/parameter-tree';
import { getParameterTrees } from '../../parameter/parameter-tree-helper';
import { StatementTree } from '../statement-tree';

export class ObjectStatementTree implements StatementTree {
  sourceReference: SourceReference;
  id: IdTree;
  base: IdTree;
  attributes: ParameterTree[] = [];

  constructor(ctx: ObjectStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.id = getIdTree(ctx._name);
    if (!ctx._base) Issue.errorFromContext(ctx, 'Object must have a model');
    this.base = getIdTree(ctx._base);
    this.attributes = getParameterTrees(ctx.definitionBody()?.parameter());
  }

  toString(): string {
    const base = 'is ' + this.base;
    const body =
      (this.attributes.length && '\n' + this.attributes.join('\n').replace(/^(.+\S)/gm, '  $1')) ||
      '';
    const header = ['object', this.id, base].filter(Boolean).join(' ');

    return header + body;
  }
}
