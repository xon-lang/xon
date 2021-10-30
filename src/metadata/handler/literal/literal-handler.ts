import { LiteralTree } from '../../../tree/literal/literal.tree';
import { getDefinitionMetadata } from '../../type/type-metadata-helper';
import { MetadataHandler } from '../metadata-handler';

export class LiteralHandler extends MetadataHandler {
  handle(tree: LiteralTree) {
    const definitionName = tree.constructor.name.replace('LiteralTree', '');
    const definitionTree = this.scope.findDefinition(definitionName);
    tree.typeMetadata = getDefinitionMetadata(definitionTree, []);
  }
}
