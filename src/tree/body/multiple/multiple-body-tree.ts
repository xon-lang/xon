import { MultipleBodyContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../../util/source-reference';
import { StatementTree } from '../../statement/statement-tree';
import { getStatementTrees } from '../../statement/statement-tree-helper';
import { BodyTree } from '../body-tree';

export class MultipleBodyTree implements BodyTree {
  sourceReference: SourceReference;
  statements: StatementTree[];

  constructor(ctx: MultipleBodyContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.statements = getStatementTrees(ctx.statement());
  }

  toString(): string {
    return '\n' + this.statements.join('\n').replace(/^(.+\S)/gm, '  $1');
  }
}
