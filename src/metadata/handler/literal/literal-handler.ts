import { LiteralTree } from '../../../tree/literal/literal.tree';
import { MetadataHandler } from '../metadata-handler';

export class LiteralHandler extends MetadataHandler {
  handle(tree: LiteralTree) {
    const literalName = tree.constructor.name.replace('LiteralTree', '');
    tree.typeMetadata = this.scope.findDeclaration(literalName, 0);
  }
}
