import { ObjectAttributeContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { AttributeTree } from '../attribute-tree';
import { getAttributesTrees } from '../attribute-tree.helper';

export class ObjectAttributeTree extends AttributeTree {
  id: IdToken;
  body: AttributeTree[] = [];

  constructor(public ctx: ObjectAttributeContext) {
    super();

    if (ctx.attributeId().operator())
      throw new Error(`Must not be operator but '${ctx.attributeId().text}`);

    this.id = IdToken.fromContext(ctx.attributeId());
    this.body = getAttributesTrees(ctx.attribute());
  }

  toString(): string {
    const body = this.body.join('\n').replace(/^/gm, '  ');
    return `${this.id}\n${body}`;
  }
}
