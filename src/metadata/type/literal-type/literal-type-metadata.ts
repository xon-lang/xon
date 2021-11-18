import { LiteralTree } from '../../../tree/literal/literal.tree';
import { SourceReference } from '../../../tree/source-reference';
import { TypeMetadata } from '../type-metadata';

export class LiteralTypeMetadata extends TypeMetadata {
  sourceReference: SourceReference;
  name: string;
  value: any;

  constructor(tree: LiteralTree) {
    super();

    this.name = '#' + tree.constructor.name.replace('Tree', '');
    this.value = tree.value;
  }
}
