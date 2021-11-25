import { AttributeTree } from '../../tree/attribute/attribute-tree';
import { TypeInfo } from './type-info';

export class AttributeMetadata {
  isPrivate: boolean;
  name: string;
  type: TypeInfo;

  constructor(tree: AttributeTree) {
    this.isPrivate = tree.isPrivate;
    this.name = tree.id.text;
    this.type = tree.typeMetadata;
  }
}
