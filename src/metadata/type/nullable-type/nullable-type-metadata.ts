import { SourceReference } from '../../../tree/source-reference';
import { NullableTypeTree } from '../../../tree/type/nullable-type/nullable-type.tree';
import { TypeMetadata } from '../metadata';

export class NullableTypeMetadata extends TypeMetadata {
  sourceReference: SourceReference;
  name: string;
  innerType: TypeMetadata;

  constructor(tree: NullableTypeTree) {
    super();

    this.sourceReference = tree.sourceReference;
    this.name = this.constructor.name.replace(TypeMetadata.name, '');
  }
}
