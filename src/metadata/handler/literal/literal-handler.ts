import { LiteralTree } from '../../../tree/literal/literal.tree';
import { NullLiteralTree } from '../../../tree/literal/null-literal/null-literal.tree';
import { LiteralTypeMetadata } from '../../type/literal-type/literal-type-metadata';
import { MetadataHandler } from '../metadata-handler';

export class LiteralHandler extends MetadataHandler {
  handle(tree: LiteralTree) {
    const literalName = tree.constructor.name.replace('LiteralTree', '');
    const typeArgumentsCount = tree instanceof NullLiteralTree ? 0 : 1;
    tree.typeMetadata = this.scope.findDeclaration(literalName, typeArgumentsCount);
    if (!(tree instanceof NullLiteralTree))
      tree.typeMetadata.useGenerics([new LiteralTypeMetadata(tree)]);
  }
}
