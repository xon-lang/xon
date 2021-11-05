import { AttributeContext } from '../../grammar/xon-parser';
import { TypeMetadata } from '../../metadata/type/type-metadata';
import { BaseTree } from '../base.tree';
import { BodyTree } from '../body/body-tree';
import { getBodyTree } from '../body/body-tree.helper';
import { IdToken } from '../id-token';
import { getTypeTree } from '../type/type-tree.helper';
import { TypeTree } from '../type/type.tree';

export class AttributeTree extends BaseTree {
  modifiers: IdToken[];
  id: IdToken;
  isPrivate: boolean;
  type?: TypeTree;
  body?: BodyTree;
  typeMetadata: TypeMetadata;

  constructor(public ctx?: AttributeContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.isPrivate = this.id.text.startsWith('_');
    this.type = getTypeTree(ctx.type()) || null;
    this.body = (ctx.body() && getBodyTree(ctx.body())) || null;
  }

  static fromFields(
    modifiers: IdToken[],
    id: IdToken,
    type: TypeTree,
    body: BodyTree,
  ): AttributeTree {
    const attribute = new AttributeTree();
    attribute.modifiers = modifiers;
    attribute.id = id;
    attribute.type = type;
    attribute.body = body;
    return attribute;
  }
}
