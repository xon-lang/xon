import { LiteralTree } from '../../../tree/literal/literal.tree';
import { MetadataHandler } from '../metadata-handler';

export class LiteralHandler extends MetadataHandler {
  handle(tree: LiteralTree) {
    const definitionName = tree.constructor.name.replace('LiteralTree', '');
    tree.definitionLink = this.scope.findDefinition(definitionName);
  }
}
