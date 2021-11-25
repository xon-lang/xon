import { SourceReference } from '../../../tree/source-reference';
import { UnionTypeTree } from '../../../tree/type/union-type/union-type.tree';
import { TypeInfo } from '../type-info';

export class UnionTypeMetadata extends TypeInfo {
  sourceReference: SourceReference;
  name: string;

  constructor(tree: UnionTypeTree) {
    super();

    this.sourceReference = tree.sourceReference;
    this.name = this.constructor.name.replace(TypeInfo.name, '');
  }
}
