import { AliasDefinitionTree } from '../../../tree/definition/alias/alias-definition-tree';
import { ClassDefinitionTree } from '../../../tree/definition/class/class-definition-tree';
import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { InterfaceDefinitionTree } from '../../../tree/definition/interface/interface-definition-tree';
import { ObjectDefinitionTree } from '../../../tree/definition/object/object-definition-tree';
import { DeclarationScope } from '../../declaration-scope';
import { AliasDefinitionMetadata } from './alias/alias-definition-metadata';
import { ClassDefinitionMetadata } from './class/class-definition-metadata';
import { DefinitionMetadata } from './definition-metadata';
import { InterfaceDefinitionMetadata } from './interface/interface-definition-metadata';
import { ObjectDefinitionMetadata } from './object/object-definition-metadata';

export function getDefinitionMetadata(
  tree: DefinitionTree,
  scope: DeclarationScope,
): DefinitionMetadata {
  if (tree instanceof AliasDefinitionTree) return new AliasDefinitionMetadata(tree, scope);
  if (tree instanceof ClassDefinitionTree) return new ClassDefinitionMetadata(tree, scope);
  if (tree instanceof InterfaceDefinitionTree) return new InterfaceDefinitionMetadata(tree, scope);
  if (tree instanceof ObjectDefinitionTree) return new ObjectDefinitionMetadata(tree, scope);

  throw Error(`Definition metadata not found for "${tree.constructor.name}"`);
}
