import { LibraryMemberContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';

export class ImportMemberTree extends BaseTree {
  id: IdToken;
  alias?: IdToken;

  constructor(public ctx: LibraryMemberContext) {
    super();

    this.id = new IdToken(ctx._name);
    this.alias = ctx._alias && new IdToken(ctx._alias);
  }

  toString(): string {
    if (this.alias) return `${this.id.text} as ${this.alias.text}`;
    return `${this.id.text}`;
  }
}
