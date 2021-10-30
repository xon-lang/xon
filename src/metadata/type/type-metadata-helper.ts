import { ClassDefinitionTree } from '../../tree/definition/class-definition/class-definition-tree';
import { DefinitionTree } from '../../tree/definition/definition-tree';
import { ClassTypeMetadata } from './id-type/class-type/class-type-metadata';
import { IdTypeMetadata } from './id-type/id-type-metadata';

export const getDefinitionMetadata = (tree: DefinitionTree): IdTypeMetadata => {
  if (tree === undefined) return undefined;

  if (tree instanceof ClassDefinitionTree) return new ClassTypeMetadata(tree, []);

  throw Error(`'${tree.constructor.name}' definition not found`);
};
