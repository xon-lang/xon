import { LineBreakStatementContext, ProgramContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { DefinitionTree } from '../definition/definition.tree';
import { ImportsTree } from '../imports/imports.tree';
import { getStatementTree } from '../statement/statement-helper';
import { StatementTree } from '../statement/statement.tree';

export class ProgramTree extends BaseTree {
  imports: ImportsTree[];

  statements: StatementTree[];

  definitions: DefinitionTree[];

  constructor(public ctx: ProgramContext) {
    super();

    this.imports = ctx
      .imports()
      .filter((x) => !x.LineBreak())
      .map((x) => new ImportsTree(x));

    this.statements = ctx
      .statement()
      .filter((x) => !(x instanceof LineBreakStatementContext))
      .map(getStatementTree);

    this.definitions = ctx.definition().map((x) => new DefinitionTree(x));
  }
}
