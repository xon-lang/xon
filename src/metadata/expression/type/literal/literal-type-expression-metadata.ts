import { Boolean } from '../../../../lib/core';
import { LiteralExpressionTree } from '../../../../tree/expression/literal/literal-expression-tree';
import { FloatLiteralTree } from '../../../../tree/literal/float/float-literal-tree';
import { IntegerLiteralTree } from '../../../../tree/literal/integer/integer-literal-tree';
import { LiteralType } from '../../../../tree/literal/literal-type';
import { StringLiteralTree } from '../../../../tree/literal/string/string-literal-tree';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { TypeExpressionMetadata } from '../type-expression-metadata';

export class LiteralTypeExpressionMetadata extends TypeExpressionMetadata {
  value: LiteralType;

  constructor(private tree: LiteralExpressionTree, private scope: DeclarationScope) {
    super();

    this.value = tree.literal.value;
  }

  attributesScope(): DeclarationScope {
    if (this.tree.literal instanceof IntegerLiteralTree) return this.scope.core.integer.attributes;
    if (this.tree.literal instanceof FloatLiteralTree) return this.scope.core.float.attributes;
    if (this.tree.literal instanceof StringLiteralTree) return this.scope.core.string.attributes;
  }

  is(metadata: TypeExpressionMetadata): Boolean {
    if (metadata instanceof LiteralTypeExpressionMetadata && this.value === metadata.value)
      return true;
    // if (metadata instanceof IdTypeExpressionMetadata) {
    //   if(this.tree.literal instanceof IntegerLiteralTree && metadata.declaration().)
    // }

    throw new Error('Not implemented');
  }
}
