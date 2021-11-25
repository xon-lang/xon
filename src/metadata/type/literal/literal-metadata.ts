import { LiteralTree } from '../../../tree/literal/literal.tree';
import { SourceReference } from '../../../tree/source-reference';
import { Metadata } from '../metadata';

export class LiteralMetadata extends Metadata {
  sourceReference: SourceReference;
  name: string;
  value: any;

  constructor(tree: LiteralTree) {
    super();

    this.name = '#' + tree.constructor.name.replace('Tree', '');
    this.value = tree.value;
  }
}
