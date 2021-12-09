import { AbstractAttributeTree } from '../../../tree/attribute/abstract/abstract-attribute-tree';
import { AttributeTree } from '../../../tree/attribute/attribute-tree';
import { MethodAttributeTree } from '../../../tree/attribute/method/method-attribute-tree';
import { ObjectAttributeTree } from '../../../tree/attribute/object/object-attribute-tree';
import { ValueAttributeTree } from '../../../tree/attribute/value/value-attribute-tree';
import { DeclarationScope } from '../../declaration-scope';
import { AbstractAttributeMetadata } from './abstract/abstract-attribute-metadata';
import { AttributeMetadata } from './attribute-metadata';
import { MethodAttributeMetadata } from './method/method-attribute-metadata';
import { ObjectAttributeMetadata } from './object/object-attribute-metadata';
import { ValueAttributeMetadata } from './value/value-attribute-metadata';

export function getAttributeMetadata(
  tree: AttributeTree,
  scope: DeclarationScope,
): AttributeMetadata {
  if (tree instanceof AbstractAttributeTree) return new AbstractAttributeMetadata(tree, scope);
  if (tree instanceof ObjectAttributeTree) return new ObjectAttributeMetadata(tree, scope);
  if (tree instanceof ValueAttributeTree) return new ValueAttributeMetadata(tree, scope);
  if (tree instanceof MethodAttributeTree) return new MethodAttributeMetadata(tree, scope);

  throw Error(`Attribute metadata not found for "${tree.constructor.name}"`);
}
