import { ClassDefinitionTree } from '../../tree/definition/class-definition/class-definition-tree';
import { DefinitionTree } from '../../tree/definition/definition-tree';
import { ClassTypeInfo } from './class-type-info';
import { TypeInfo } from './type-info';

export const getDefinitionMetadata = (
  tree: DefinitionTree,
  genericArguments: TypeInfo[],
): TypeInfo => {
  if (tree === undefined) return undefined;

  if (tree instanceof ClassDefinitionTree) return new ClassTypeInfo(tree, genericArguments);

  throw Error(`'${tree.constructor.name}' definition not found`);
};
