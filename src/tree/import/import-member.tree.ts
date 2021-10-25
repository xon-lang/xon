import { LibraryMemberContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';

export class ImportMemberTree extends BaseTree {
  public id: IdToken;
  public alias?: string;

  public constructor(public ctx?: LibraryMemberContext) {
    super();
    if (!ctx) return;

    this.id = IdToken.fromContext(ctx._name);
    this.alias = ctx._alias?.text;
  }

  public toString(): string {
    if (this.alias) return `${this.id} as ${this.alias}`;

    return `${this.id}`;
  }
}
