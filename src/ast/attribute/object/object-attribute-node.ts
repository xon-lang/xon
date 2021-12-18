import { ObjectAttributeContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { AttributeTree } from '../attribute-node';
import { getAttributeNodes } from '../attribute-node-helper';

export class ObjectAttributeNode extends AttributeTree {
  id: IdToken;
  body: AttributeTree[] = [];

  constructor(public ctx: ObjectAttributeContext) {
    super();

    if (ctx.attrId().operator()) {
      throw new Error(`Must not be operator but '${ctx.attrId().text}`);
    }

    this.id = IdToken.fromContext(ctx.attrId());
    this.body = getAttributeNodes(ctx.attribute());
  }

  toString(): string {
    const body = this.body.join('\n').replace(/^/gm, '  ');
    return `${this.id}\n${body}`;
  }
}
