import { SourceReference } from '../../../tree/source-reference';
import { LiteralTypeTree } from '../../../tree/type/literal-type/literal-type.tree';
import { TypeMetadata } from '../type-metadata';

export class LiteralTypeMetadata extends TypeMetadata {
  sourceReference: SourceReference;
  public name: string;

  constructor(public tree: LiteralTypeTree) {
    super();

    this.sourceReference = tree.sourceReference;
    this.name = this.constructor.name.replace(TypeMetadata.name, '');
  }
}
