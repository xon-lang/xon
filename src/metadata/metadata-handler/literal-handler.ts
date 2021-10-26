import { BooleanLiteralTree } from '../../tree/literal/boolean-literal/boolean-literal.tree';
import { CharLiteralTree } from '../../tree/literal/char-literal/char-literal.tree';
import { FloatLiteralTree } from '../../tree/literal/float-literal/float-literal.tree';
import { IntegerLiteralTree } from '../../tree/literal/integer-literal/integer-literal.tree';
import { LiteralTree } from '../../tree/literal/literal.tree';
import { StringLiteralTree } from '../../tree/literal/string-literal/string-literal.tree';
import { MetadataHandler } from './metadata-handler';

export class LiteralHandler extends MetadataHandler {
  handle(tree: LiteralTree) {
    if (tree instanceof BooleanLiteralTree) tree.definitionMetadata = this.scope.find('Boolean');
    else if (tree instanceof IntegerLiteralTree)
      tree.definitionMetadata = this.scope.find('Integer');
    else if (tree instanceof FloatLiteralTree) tree.definitionMetadata = this.scope.find('Float');
    else if (tree instanceof CharLiteralTree) tree.definitionMetadata = this.scope.find('Char');
    else if (tree instanceof StringLiteralTree) tree.definitionMetadata = this.scope.find('String');
    throw new Error('Wrong literal tree');
  }
}
