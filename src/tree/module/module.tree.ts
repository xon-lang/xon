import { ModuleContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getDefinitionsTrees } from '../definition/definition-tree.helper';
import { DefinitionTree } from '../definition/definition.tree';
import { getLibrariesTrees } from '../library/library-tree.helper';
import { LibraryTree } from '../library/library.tree';

export class ModuleTree extends BaseTree {
  public libraries: LibraryTree[];

  public definitions: DefinitionTree[];

  public constructor(public ctx?: ModuleContext) {
    super();
    if (!ctx) return;

    this.libraries = getLibrariesTrees(ctx.library());
    this.definitions = getDefinitionsTrees(ctx.definition());
  }

  public toString(): string {
    throw new Error(`toString not implemented for "${this.constructor.name}"`);
  }
}
