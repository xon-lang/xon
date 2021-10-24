import { ExpressionTree } from '../../tree/expression/expression.tree';
import { IdExpressionTree } from '../../tree/expression/id-expression/id-expression.tree';
import { BooleanLiteralTree } from '../../tree/literal/boolean-literal/boolean-literal.tree';
import { CharLiteralTree } from '../../tree/literal/char-literal/char-literal.tree';
import { FloatLiteralTree } from '../../tree/literal/float-literal/float-literal.tree';
import { IntegerLiteralTree } from '../../tree/literal/integer-literal/integer-literal.tree';
import { LiteralTree } from '../../tree/literal/literal.tree';
import { StringLiteralTree } from '../../tree/literal/string-literal/string-literal.tree';
import { DefinitionMetadata } from '../definition/definition-metadata';
import { MetadataHandler } from './metadata-handler';

export class ExpressionHandler extends MetadataHandler {
  constructor(public definitions: Map<string, DefinitionMetadata>) {
    super();
  }

  handle(tree: ExpressionTree) {
    if (tree instanceof IdExpressionTree) ;
    else if (tree instanceof IntegerLiteralTree) tree.metadata = this.findDefinition('Integer');
    else if (tree instanceof FloatLiteralTree) tree.metadata = this.findDefinition('Float');
    else if (tree instanceof CharLiteralTree) tree.metadata = this.findDefinition('Char');
    else if (tree instanceof StringLiteralTree) tree.metadata = this.findDefinition('String');
    else throw new Error('Wrong literal type');
  }
}
