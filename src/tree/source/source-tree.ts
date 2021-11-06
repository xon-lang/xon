import { DefinitionSourceMemberContext, SourceContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { DefinitionTree } from '../definition/definition-tree';
import { getDefinitionsTrees } from '../definition/definition-tree-helper';
import { getLibrariesTrees } from '../import/import-tree.helper';
import { ImportTree } from '../import/import.tree';

export class SourceTree extends BaseTree {
  imports: ImportTree[];
  definitions: DefinitionTree[];
  
  constructor(public ctx?: SourceContext) {
    super();
    if (!ctx) return;

    this.imports = getLibrariesTrees(ctx.library());
    this.definitions = getDefinitionsTrees(
      ctx
        .sourceMember()
        .filter((x) => x instanceof DefinitionSourceMemberContext)
        .map((x) => (x as DefinitionSourceMemberContext).definition()),
    );
  }
}
