import { Boolean } from '../../../../lib/core';
import { LiteralExpressionTree } from '../../../../tree/expression/literal/literal-expression-tree';
import { FloatLiteralTree } from '../../../../tree/literal/float/float-literal-tree';
import { IntegerLiteralTree } from '../../../../tree/literal/integer/integer-literal-tree';
import { LiteralType } from '../../../../tree/literal/literal-type';
import { StringLiteralTree } from '../../../../tree/literal/string/string-literal-tree';
import { DefinitionMetadata } from '../../../declaration/definition/definition-metadata';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { IdTypeExpressionMetadata } from '../id/id-type-expression-metadata';
import { TypeExpressionMetadata } from '../type-expression-metadata';

export class LiteralTypeExpressionMetadata extends TypeExpressionMetadata {
  value: LiteralType;

  constructor(private tree: LiteralExpressionTree, private scope: DeclarationScope) {
    super();

    this.value = tree.literal.value;
  }

  definition(): DefinitionMetadata {
    if (this.tree.literal instanceof IntegerLiteralTree) return this.scope.core.integer;
    if (this.tree.literal instanceof FloatLiteralTree) return this.scope.core.float;
    if (this.tree.literal instanceof StringLiteralTree) return this.scope.core.string;
  }

  attributesScope(): DeclarationScope {
    return this.definition().attributesScope();
  }

  is(metadata: TypeExpressionMetadata): Boolean {
    if (metadata instanceof LiteralTypeExpressionMetadata && this.value === metadata.value)
      return true;
    if (metadata instanceof IdTypeExpressionMetadata) {
      return this.definition().is(metadata.definition());
    }

    throw new Error('Not implemented');
  }
}
