import { LibraryMemberContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';

export class ImportMemberTree extends BaseTree {
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
