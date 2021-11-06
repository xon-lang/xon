import { LibraryMemberContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';

export class ImportMemberTree extends BaseTree {
  public id: IdToken;
  public alias?: IdToken;

  public constructor(public ctx?: LibraryMemberContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.alias = ctx._alias && new IdToken(ctx._alias);
  }

  public toString(): string {
    if (this.alias) return `${this.id.text} as ${this.alias.text}`;

    return `${this.id.text}`;
  }
}
