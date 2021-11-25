import { SourceReference } from '../../../tree/source-reference';
import { NullableTypeTree } from '../../../tree/type/nullable-type/nullable-type.tree';
import { TypeInfo } from '../type-info';

export class NullableTypeMetadata extends TypeInfo {
  sourceReference: SourceReference;
  name: string;
  innerType: TypeInfo;

  constructor(tree: NullableTypeTree) {
    super();

    this.sourceReference = tree.sourceReference;
    this.name = this.constructor.name.replace(TypeInfo.name, '');
  }
}
