import { DeclarationNode, Modifier } from '../../ast/declaration/declaration-node';
import { Issue } from '../../issue-service/issue';
import { DeclarationScope } from '../declaration-scope';
import { AttributeDeclarationMetadata } from './attribute/attribute-declaration-metadata';
import { DeclarationMetadata } from './declaration-metadata';
import { InterfaceDeclarationMetadata } from './interface/interface-declaration-metadata';

export const getDeclarationMetadata = (
  node: DeclarationNode,
  scope: DeclarationScope,
): DeclarationMetadata => {
  if (node === undefined) return undefined;

  if (node.modifier === Modifier.interface) return new InterfaceDeclarationMetadata(node, scope);
  // todo replace with exact class, make it abstract
  if (node) return new AttributeDeclarationMetadata(node, scope);
  Issue.errorFromNode(node, `Expression node not found for "${node.constructor.name}"`);
};

export const getDeclarationsMetadata = (
  nodes: DeclarationNode[],
  scope: DeclarationScope,
): DeclarationMetadata[] => {
  return nodes?.map((x) => getDeclarationMetadata(x, scope)) || [];
};
