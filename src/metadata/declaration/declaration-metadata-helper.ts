import { Issue } from '../../issue-service/issue';
import { DeclarationTree, Modifier } from '../../tree/declaration/declaration-tree';
import { DeclarationScope } from '../declaration-scope';
import { AttributeDeclarationMetadata } from './attribute/attribute-declaration-metadata';
import { DeclarationMetadata } from './declaration-metadata';
import { InterfaceDeclarationMetadata } from './interface/interface-declaration-metadata';
import { ObjectDeclarationMetadata } from './object/object-declaration-metadata';

export const getDeclarationMetadata = (
  node: DeclarationTree,
  scope: DeclarationScope,
): DeclarationMetadata => {
  if (node === undefined) return undefined;

  if (node.modifier === Modifier.model) return new InterfaceDeclarationMetadata(node, scope);
  if (node.modifier === Modifier.object) return new ObjectDeclarationMetadata(node, scope);
  // todo replace with exact class, make it abstract
  if (node) return new AttributeDeclarationMetadata(node, scope);
  Issue.errorFromTree(node, `Expression node not found for "${node.constructor.name}"`);
};

export const getDeclarationsMetadata = (
  nodes: DeclarationTree[],
  scope: DeclarationScope,
): DeclarationMetadata[] => {
  return nodes?.map((x) => getDeclarationMetadata(x, scope)) || [];
};
