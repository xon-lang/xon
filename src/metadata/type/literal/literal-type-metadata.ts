import { LiteralTree } from '../../../ast/literal/literal.tree';
import { IdTypeMetadata } from '../id/id-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class LiteralTypeMetadata extends IdTypeMetadata {
  constructor(public name: string, public value: number | string | RegExp) {
    super(name, []);
  }

  is(other: TypeMetadata): boolean {
    if (other instanceof LiteralTypeMetadata)
      return this.name === other.name && this.value === other.value;
    return super.is(other);
  }

  toString() {
    return `${this.name}<${this.value}>`;
  }

  static fromTree(tree: LiteralTree) {
    return new LiteralTypeMetadata(tree.constructor.name.replace('LiteralTree', ''), tree.value);
  }
}
