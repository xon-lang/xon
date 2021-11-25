import { SourceReference } from '../../../tree/source-reference';
import { ArrayTypeTree } from '../../../tree/type/array-type/array-type.tree';
import { TypeMetadata } from '../metadata';

export class ArrayTypeMetadata extends TypeMetadata {
  sourceReference: SourceReference;
  name: string;

  constructor(tree: ArrayTypeTree) {
    super();

    this.sourceReference = tree.sourceReference;
  }
}
