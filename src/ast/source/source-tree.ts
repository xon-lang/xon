import { SourceContext } from '../../grammar/xon-parser';
import { AttributeTree } from '../attribute/attribute-node';
import { getAttributeNodes } from '../attribute/attribute-node-helper';
import { Node } from '../node';
import { DefinitionTree } from '../definition/definition-tree';
import { getDefinitionsTrees } from '../definition/definition-tree-helper';
import { getImportsTrees } from '../import/import-node-helper';
import { ImportNode } from '../import/import-node';

export class SourceTree extends Node {
  imports: ImportNode[];
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
