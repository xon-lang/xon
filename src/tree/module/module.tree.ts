import { ModuleContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getDefinitionsTrees } from '../definition/definition-tree.helper';
import { DefinitionTree } from '../definition/definition.tree';
import { getExtensionMethodsTrees } from '../extension-method/extension-method-tree.helper';
import { ExtensionMethodTree } from '../extension-method/extension-method.tree';
import { getFunctionsTrees } from '../function/function-tree.helper';
import { FunctionTree } from '../function/function.tree';
import { getLibrariesTrees } from '../library/library-tree.helper';
import { LibraryTree } from '../library/library.tree';
import { getStatementsTrees } from '../statement/statement-tree.helper';
import { StatementTree } from '../statement/statement.tree';

export class ModuleTree extends BaseTree {
  public libraries: LibraryTree[];

  public statements: StatementTree[];

  public functions: FunctionTree[];

  public extensionMethods: ExtensionMethodTree[];

  public definitions: DefinitionTree[];

  public constructor(public ctx?: ModuleContext) {
    super();
    if (!ctx) return;

    this.libraries = getLibrariesTrees(ctx.library());
    this.statements = getStatementsTrees(ctx.statement());
    this.functions = getFunctionsTrees(ctx.function());
    this.extensionMethods = getExtensionMethodsTrees(ctx.extensionMethod());
    this.definitions = getDefinitionsTrees(ctx.definition());
  }

  public toString(): string {
    throw new Error(`ToString not implemented for "${this.constructor.name}"`);
  }
}
