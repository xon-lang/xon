import { LiteralExpressionTree } from '../../../../tree/expression/literal/literal-expression-tree';
import { FloatLiteralTree } from '../../../../tree/literal/float/float-literal-tree';
import { IntegerLiteralTree } from '../../../../tree/literal/integer/integer-literal-tree';
import { StringLiteralTree } from '../../../../tree/literal/string/string-literal-tree';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { ValueExpressionMetadata } from '../value-expression-metadata';

export class LiteralValueExpressionMetadata extends ValueExpressionMetadata {
  constructor(private tree: LiteralExpressionTree, private scope: DeclarationScope) {
    super();
  }

 
}
