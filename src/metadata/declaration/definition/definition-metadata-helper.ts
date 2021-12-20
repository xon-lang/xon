import { AliasDefinitionNode } from '../../../ast/definition/alias/alias-definition-tree';
import { ClassDefinitionTree } from '../../../ast/definition/class/class-definition-tree';
import { DefinitionNode } from '../../../ast/definition/definition-node';
import { InterfaceDefinitionTree } from '../../../ast/definition/interface/interface-definition-tree';
import { ObjectDefinitionNode } from '../../../ast/definition/object/object-definition-node';
import { DeclarationScope } from '../../declaration-scope';
import { AliasDefinitionMetadata } from './alias/alias-definition-metadata';
import { ClassDefinitionMetadata } from './class/class-definition-metadata';
import { DefinitionMetadata } from './definition-metadata';
import { InterfaceDefinitionMetadata } from './interface/interface-definition-metadata';
import { ObjectDefinitionMetadata } from './object/object-definition-metadata';

export function getDefinitionMetadata(
  tree: DefinitionNode,
  scope: DeclarationScope,
): DefinitionMetadata {
  if (tree instanceof AliasDefinitionNode) return new AliasDefinitionMetadata(tree, scope);
  if (tree instanceof ClassDefinitionTree) return new ClassDefinitionMetadata(tree, scope);
  if (tree instanceof InterfaceDefinitionTree) return new InterfaceDefinitionMetadata(tree, scope);
  if (tree instanceof ObjectDefinitionNode) return new ObjectDefinitionMetadata(tree, scope);

  throw Error(`Definition metadata not found for "${tree.constructor.name}"`);
}
