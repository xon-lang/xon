import { SourceContext } from '../../grammar/xon-parser';
import { AttributeTree } from '../attribute/attribute-tree';
import { getAttributesTrees } from '../attribute/attribute-tree.helper';
import { BaseTree } from '../base.tree';
import { DefinitionTree } from '../definition/definition-tree';
import { getDefinitionsTrees } from '../definition/definition-tree-helper';
import { getImportsTrees } from '../import/import-tree.helper';
import { ImportTree } from '../import/import.tree';

export class SourceTree extends BaseTree {
  imports: ImportTree[];
  definitions: DefinitionTree[] = [];

  constructor(public ctx: SourceContext) {
    super();

    this.imports = getImportsTrees(ctx.library());
    this.definitions = getDefinitionsTrees(ctx.definition());
  }

  toString(): string {
    const imports = this.imports.join('\n');
    const definitions = this.definitions.join('\n\n');
    const members = [imports, definitions].filter((x) => x).join('\n\n');
    return members ? members + '\n' : '';
  }
}
