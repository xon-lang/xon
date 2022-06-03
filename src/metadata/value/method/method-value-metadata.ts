import { MethodExpressionTree } from '../../../tree/expression/method/method-expression-tree';
import { getParameterMetadata } from '../../declaration/parameter/parameter-metadata-helper';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { ValueMetadata } from '../value-metadata';
import { getValueMetadata } from '../value-metadata-helper';

export class MethodValueMetadata extends ValueMetadata {
  parameters: DeclarationScope[];
  value: ValueMetadata;

  constructor(tree: MethodExpressionTree, scope: DeclarationScope) {
    super();
    const innerScope = scope.create();
    for (const parameter of tree.parameters) {
      getParameterMetadata(parameter, scope);
    }
    this.value = getValueMetadata(tree.value, scope);
  }
}
