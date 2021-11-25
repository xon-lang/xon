import { AttributeTree } from '../../tree/attribute/attribute-tree';
import { TypeMetadata } from './metadata';

export class AttributeMetadata {
  isPrivate: boolean;
  name: string;
  type: TypeMetadata;

  constructor(tree: AttributeTree) {
    this.isPrivate = tree.isPrivate;
    this.name = tree.id.text;
    this.type = tree.typeMetadata;
  }
}
