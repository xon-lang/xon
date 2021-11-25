import { AttributeTree } from '../../tree/attribute/attribute-tree';
import { Metadata } from './metadata';

export class AttributeMetadata {
  isPrivate: boolean;
  name: string;
  type: Metadata;

  constructor(tree: AttributeTree) {
    this.isPrivate = tree.isPrivate;
    this.name = tree.id.text;
    this.type = tree.typeMetadata;
  }
}
