import { SourceContext } from '../../grammar/xon-parser';
import { SourceReference } from '../../util/source-reference';
import { DefinitionTree } from '../definition/definition-tree';
import { getDefinitionTrees } from '../definition/definition-tree-helper';
import { StatementTree } from '../statement/statement-tree';
import { getStatementTrees } from '../statement/statement-tree-helper';
import { Tree } from '../tree';

export class SourceTree implements Tree {
  sourceReference: SourceReference;
  statements: StatementTree[] = [];
  definitions: DefinitionTree[] = [];

  constructor(ctx: SourceContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.statements = getStatementTrees(ctx.statement());
    this.definitions = getDefinitionTrees(ctx.definition());
  }

  toString(): string {
    return [...this.statements, ...this.definitions].join('\n');
  }
}
