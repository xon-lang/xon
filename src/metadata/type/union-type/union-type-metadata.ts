import { SourceReference } from '../../../tree/source-reference';
import { UnionTypeTree } from '../../../tree/type/union-type/union-type.tree';
import { TypeMetadata } from '../metadata';

export class UnionTypeMetadata extends TypeMetadata {
  sourceReference: SourceReference;
  name: string;

  constructor(tree: UnionTypeTree) {
    super();

    this.sourceReference = tree.sourceReference;
    this.name = this.constructor.name.replace(TypeMetadata.name, '');
  }
}
