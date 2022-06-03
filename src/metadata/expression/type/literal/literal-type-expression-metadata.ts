import { Boolean } from '../../../../lib/core';
import { LiteralType } from '../../../../tree/literal/literal-type';
import { DefinitionMetadata } from '../../../declaration/definition/definition-metadata';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { IdTypeExpressionMetadata } from '../id/id-type-expression-metadata';
import { TypeExpressionMetadata } from '../type-expression-metadata';

export class LiteralTypeExpressionMetadata extends TypeExpressionMetadata {
  constructor(public value: LiteralType, public definition: () => DefinitionMetadata) {
    super();
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
