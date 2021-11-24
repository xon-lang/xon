import { ExpressionParameterTree } from '../../../tree/expression-parameter/expression-parameter.tree';
import { Scope } from './scope';
import { typeHandle } from './type/type-handle';

export function parameterHandle(scope: Scope, tree: ExpressionParameterTree) {
  typeHandle(scope, tree.type);
  tree.typeMetadata = tree.type.typeMetadata;
}
