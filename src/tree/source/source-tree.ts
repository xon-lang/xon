import { SourceContext } from '../../grammar/xon-parser';
import { AttributeTree } from '../attribute/attribute-tree';
import { getAttributesTrees } from '../attribute/attribute-tree.helper';
import { BaseTree } from '../base.tree';
import { DefinitionTree } from '../definition/definition-tree';
import { getDefinitionsTrees } from '../definition/definition-tree-helper';
import { getLibrariesTrees } from '../import/import-tree.helper';
import { ImportTree } from '../import/import.tree';

export class SourceTree extends BaseTree {
  imports: ImportTree[];
  definitions: DefinitionTree[] = [];
  attributes: AttributeTree[] = [];

  constructor(public ctx: SourceContext) {
    super();

    this.imports = getLibrariesTrees(ctx.library());
    this.definitions = getDefinitionsTrees(ctx.definition());
    this.attributes = getAttributesTrees(ctx.attribute());
  }
}
