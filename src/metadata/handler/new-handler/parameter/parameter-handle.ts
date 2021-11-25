import { ExpressionParameterTree } from '../../../../tree/expression-parameter/expression-parameter.tree';
import { Scope } from '../scope';
import { typeHandle } from '../type/type-handle';

export function parameterHandle(tree: ExpressionParameterTree, scope: Scope) {
  typeHandle(tree.type, scope);
  tree.typeMetadata = tree.type.typeMetadata;
}
