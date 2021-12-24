import { AbstractAttributeNode } from '../../../ast/attribute/abstract/abstract-attribute-node';
import { AttributeNode } from '../../../ast/attribute/attribute-node';
import { MethodAttributeNode } from '../../../ast/attribute/method/method-attribute-node';
import { ObjectAttributeNode } from '../../../ast/attribute/object/object-attribute-node';
import { ValueAttributeNode } from '../../../ast/attribute/value/value-attribute-node';
import { DeclarationScope } from '../../declaration-scope';
import { AbstractAttributeMetadata } from './abstract/abstract-attribute-metadata';
import { AttributeMetadata } from './attribute-metadata';
import { MethodAttributeMetadata } from './method/method-attribute-metadata';
import { ObjectAttributeMetadata } from './object/object-attribute-metadata';
import { ValueAttributeMetadata } from './value/value-attribute-metadata';

export function getAttributeMetadata(
  node: AttributeNode,
  scope: DeclarationScope,
): AttributeMetadata {
  if (node instanceof AbstractAttributeNode) return new AbstractAttributeMetadata(node, scope);
  if (node instanceof ObjectAttributeNode) return new ObjectAttributeMetadata(node, scope);
  if (node instanceof ValueAttributeNode) return new ValueAttributeMetadata(node, scope);
  if (node instanceof MethodAttributeNode) return new MethodAttributeMetadata(node, scope);

  throw Error(`Attribute metadata not found for "${node.constructor.name}"`);
}
