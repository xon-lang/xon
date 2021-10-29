import { ClassDefinitionTree } from '../../tree/definition/class-definition/class-definition-tree';
import { DefinitionTree } from '../../tree/definition/definition-tree';
import { TypeTree } from '../../tree/type/type.tree';
import { ClassTypeMetadata } from './id-type/class-type/class-type-metadata';
import { TypeMetadata } from './type-metadata';

export const getDefinitionMetadata = (tree: DefinitionTree | TypeTree): TypeMetadata => {
  if (tree === undefined) return undefined;

  if (tree instanceof ClassDefinitionTree) return new ClassTypeMetadata(tree);

  throw Error(`'${tree.constructor.name}' definition not found`);
};
