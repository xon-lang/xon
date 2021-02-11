import { ProgramContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { DefinitionTree } from '../definition/definition.tree';
import { LibraryTree } from '../library/library.tree';
import { getStatementTree } from '../statement/statement-helper';
import { StatementTree } from '../statement/statement.tree';

export class ProgramTree extends BaseTree {
  public libraries: LibraryTree[];

  public statements: StatementTree[];

  public definitions: DefinitionTree[];

  public constructor(public ctx: ProgramContext) {
    super();

    this.libraries = ctx.library().map((x) => new LibraryTree(x));

    this.statements = ctx.statement().map(getStatementTree);

    this.definitions = ctx.definition().map((x) => new DefinitionTree(x));
  }
}
