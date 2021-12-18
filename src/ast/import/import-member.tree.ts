import { LibraryMemberContext } from '../../grammar/xon-parser';
import { Node } from '../node';
import { IdToken } from '../id-token';

export class ImportMemberTree extends Node {
  id: IdToken;
  alias?: IdToken;

  constructor(public ctx: LibraryMemberContext) {
    super();

    this.id = IdToken.fromContext(ctx._name);
    this.alias = ctx._alias && IdToken.fromContext(ctx._alias);
  }

  toString(): string {
    if (this.alias) return `${this.id.text} as ${this.alias.text}`;
    return `${this.id.text}`;
  }
}
