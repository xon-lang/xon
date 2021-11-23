import {
  AttributeSourceMemberContext,
  DefinitionSourceMemberContext,
  SourceContext,
} from '../../grammar/xon-parser';
import { AttributeTree } from '../attribute/attribute-tree';
import { getAttributeTree } from '../attribute/attribute-tree.helper';
import { BaseTree } from '../base.tree';
import { DefinitionTree } from '../definition/definition-tree';
import { getDefinitionTree } from '../definition/definition-tree-helper';
import { getLibrariesTrees } from '../import/import-tree.helper';
import { ImportTree } from '../import/import.tree';

export class SourceTree extends BaseTree {
  imports: ImportTree[];
  definitions: DefinitionTree[] = [];
  attributes: AttributeTree[] = [];

  constructor(public ctx?: SourceContext) {
    super();
    if (!ctx) return;

    this.imports = getLibrariesTrees(ctx.library());
    for (const member of ctx.sourceMember()) {
      if (member instanceof DefinitionSourceMemberContext)
        this.definitions.push(getDefinitionTree(member.definition()));
      if (member instanceof AttributeSourceMemberContext)
        this.attributes.push(getAttributeTree(member.attribute()));
    }
  }
}
