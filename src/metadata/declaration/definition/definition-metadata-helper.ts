import { AliasDefinitionNode } from '../../../ast/definition/alias/alias-definition-node';
import { ClassDefinitionNode } from '../../../ast/definition/class/class-definition-node';
import { DefinitionNode } from '../../../ast/definition/definition-node';
import { InterfaceDefinitionNode } from '../../../ast/definition/interface/interface-definition-node';
import { ObjectDefinitionNode } from '../../../ast/definition/object/object-definition-node';
import { DeclarationScope } from '../../declaration-scope';
import { AliasDefinitionMetadata } from './alias/alias-definition-metadata';
import { ClassDefinitionMetadata } from './class/class-definition-metadata';
import { DefinitionMetadata } from './definition-metadata';
import { InterfaceDefinitionMetadata } from './interface/interface-definition-metadata';
import { ObjectDefinitionMetadata } from './object/object-definition-metadata';

export function getDefinitionMetadata(
  node: DefinitionNode,
  scope: DeclarationScope,
): DefinitionMetadata {
  if (node instanceof AliasDefinitionNode) return new AliasDefinitionMetadata(node, scope);
  if (node instanceof ClassDefinitionNode) return new ClassDefinitionMetadata(node, scope);
  if (node instanceof InterfaceDefinitionNode) return new InterfaceDefinitionMetadata(node, scope);
  if (node instanceof ObjectDefinitionNode) return new ObjectDefinitionMetadata(node, scope);

  throw Error(`Definition metadata not found for "${node.constructor.name}"`);
}
