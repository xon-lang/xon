import { MethodExpressionTree } from '../../../../tree/expression/method/method-expression-tree';
import { getParameterMetadata } from '../../../declaration/parameter/parameter-metadata-helper';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { ValueExpressionMetadata } from '../value-expression-metadata';
import { getValueExpressionMetadata } from '../value-expression-metadata-helper';

export class MethodValueExpressionMetadata extends ValueExpressionMetadata {
  parameters: DeclarationScope[];
  value: ValueExpressionMetadata;

  constructor(tree: MethodExpressionTree, scope: DeclarationScope) {
    super();
    const innerScope = scope.create();
    for (const parameter of tree.parameters) {
      getParameterMetadata(parameter, scope);
    }
    this.value = getValueExpressionMetadata(tree.value, scope);
  }
}
