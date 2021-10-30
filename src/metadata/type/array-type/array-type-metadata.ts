import { SourceReference } from '../../../tree/source-reference';
import { ArrayTypeTree } from '../../../tree/type/array-type/array-type.tree';
import { TypeMetadata } from '../type-metadata';

export class ArrayTypeMetadata extends TypeMetadata {
  sourceReference: SourceReference;
  public name: string;

  constructor(tree: ArrayTypeTree) {
    super();

    this.sourceReference = tree.sourceReference;
    this.name = this.constructor.name.replace(TypeMetadata.name, '');
  }
}
