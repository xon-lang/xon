import { ClassDefinitionTree } from '../../tree/definition/class-definition/class-definition-tree';
import { DefinitionTree } from '../../tree/definition/definition-tree';
import { ClassTypeMetadata } from './class-type-metadata';
import { TypeMetadata } from './metadata';

export const getDefinitionMetadata = (
  tree: DefinitionTree,
  genericArguments: TypeMetadata[],
): TypeMetadata => {
  if (tree === undefined) return undefined;

  if (tree instanceof ClassDefinitionTree) return new ClassTypeMetadata(tree, genericArguments);

  throw Error(`'${tree.constructor.name}' definition not found`);
};
