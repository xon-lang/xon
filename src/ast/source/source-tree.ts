import { SourceContext } from '../../grammar/xon-parser';
import { AttributeTree } from '../attribute/attribute-node';
import { getAttributeNodes } from '../attribute/attribute-node-helper';
import { Node } from '../node';
import { DefinitionNode } from '../definition/definition-node';
import { getDefinitionNodes } from '../definition/definition-node-helper';
import { getImportsTrees } from '../import/import-node-helper';
import { ImportNode } from '../import/import-node';

export class SourceTree extends Node {
  imports: ImportNode[];
  definitions: DefinitionNode[] = [];

  constructor(public ctx: SourceContext) {
    super();

    this.imports = getImportsTrees(ctx.library());
    this.definitions = getDefinitionNodes(ctx.definition());
  }

  toString(): string {
    const imports = this.imports.join('\n');
    const definitions = this.definitions.join('\n\n');
    const members = [imports, definitions].filter((x) => x).join('\n\n');
    return members ? members + '\n' : '';
  }
}
