import { ListingContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getDefinitionsTrees } from '../definition/definition-tree.helper';
import { DefinitionTree } from '../definition/definition.tree';
import { getExtensionMemberTrees } from '../extension-member/extension-member-tree.helper';
import { ExtensionMemberTree } from '../extension-member/extension-member.tree';
import { getFunctionTrees } from '../function/function-tree.helper';
import { FunctionTree } from '../function/function.tree';
import { getLibrariesTrees } from '../import/import-tree.helper';
import { ImportTree } from '../import/import.tree';
import { getStatementsTrees } from '../statement/statement-tree.helper';
import { StatementTree } from '../statement/statement.tree';
import { getTestTrees } from '../test/test-tree.helper';
import { TestTree } from '../test/test.tree';

export class ListingTree extends BaseTree {
  public libraries: ImportTree[];
  public definitions: DefinitionTree[];
  public extensionMembers: ExtensionMemberTree[];
  public tests: TestTree[];
  public functions: FunctionTree[];
  public statements: StatementTree[];

  public constructor(public ctx?: ListingContext) {
    super();
    if (!ctx) return;

    this.libraries = getLibrariesTrees(ctx.library());
    this.definitions = getDefinitionsTrees(ctx.definition());
    this.extensionMembers = getExtensionMemberTrees(ctx.extensionMember());
    this.tests = getTestTrees(ctx.test());
    this.functions = getFunctionTrees(ctx.function());
    this.statements = getStatementsTrees(ctx.statement());
  }

  public toString(): string {
    throw new Error(`toString not implemented for "${this.constructor.name}"`);
  }
}
