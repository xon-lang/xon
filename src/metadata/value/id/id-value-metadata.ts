import { Any, Boolean } from '../../../lib/core';
import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { DefinitionMetadata } from '../../declaration/definition/definition-metadata';
import { ParameterMetadata } from '../../declaration/parameter/parameter-metadata';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { DefinitionTypeMetadata } from '../../type/definition/definition-type-metadata';
import { MethodTypeMetadata } from '../../type/method/method-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';

export class IdValueMetadata extends ValueMetadata {
  constructor(private tree: IdExpressionTree, private scope: DeclarationScope) {
    super();
  }

  declaration() {
    return this.scope.find(this.tree.name.text);
  }

  type(): TypeMetadata {
    const declaration = this.declaration();
    if (declaration instanceof ParameterMetadata) return declaration.type();
    if (declaration instanceof DefinitionMetadata) {
      if (declaration.modifier === 'object') {
        const result = () => new DefinitionTypeMetadata(() => declaration);
        return new MethodTypeMetadata(declaration.parameters, result);
      }
    }
  }

  eval(): Any {
    const declaration = this.declaration();
    if (declaration instanceof ParameterMetadata) return declaration.value()?.eval();

    throw new Error('Not implemented');
  }
}
