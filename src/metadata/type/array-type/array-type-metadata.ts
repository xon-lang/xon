import { SourceReference } from '../../../tree/source-reference';
import { ArrayTypeTree } from '../../../tree/type/array-type/array-type.tree';
import { TypeInfo } from '../type-info';

export class ArrayTypeMetadata extends TypeInfo {
  sourceReference: SourceReference;
  name: string;

  constructor(tree: ArrayTypeTree) {
    super();

    this.sourceReference = tree.sourceReference;
  }
}
