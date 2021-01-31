import { ImportMemberContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export class ImportMemberTree extends BaseTree {
  name: string;

  alias: string;

  constructor(public ctx: ImportMemberContext) {
    super();
    this.name = ctx._name.text;
    this.alias = ctx._alias?.text;
  }
}
