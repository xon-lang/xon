import { ArrayTypeTree } from '../../tree/type/array/array-type.tree';
import { FunctionTypeTree } from '../../tree/type/function/function-type.tree';
import { IdTypeTree } from '../../tree/type/id/id-type.tree';
import { TupleTypeTree } from '../../tree/type/tuple/tuple-type.tree';
import { TypeTree } from '../../tree/type/type.tree';
import { DeclarationScope } from '../declaration-scope';
import { ArrayTypeMetadata } from './array/array-type-metadata';
import { FunctionTypeMetadata } from './function/function-type-metadata';
import { IdTypeMetadata } from './id/id-type-metadata';
import { TupleTypeMetadata } from './tuple/tuple-type-metadata';
import { TypeMetadata } from './type-metadata';

export function getTypeMetadata(tree: TypeTree, scope: DeclarationScope): TypeMetadata {
  if (tree instanceof IdTypeTree) return (tree.metadata = IdTypeMetadata.fromTree(tree, scope));
  if (tree instanceof ArrayTypeTree)
    return (tree.metadata = ArrayTypeMetadata.fromTree(tree, scope));
  if (tree instanceof FunctionTypeTree)
    return (tree.metadata = FunctionTypeMetadata.fromTree(tree, scope));
  if (tree instanceof TupleTypeTree)
    return (tree.metadata = TupleTypeMetadata.fromTree(tree, scope));
}
