import { AttributeContext } from '../../grammar/xon-parser';
import { TypeMetadata } from '../../metadata/type/type-metadata';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';
import { getStatementsFromBody } from '../statement/statement-tree.helper';
import { StatementTree } from '../statement/statement.tree';
import { FunctionTypeTree } from '../type/function-type/function-type.tree';
import { getTypeTree } from '../type/type-tree.helper';
import { TypeTree } from '../type/type.tree';
import { AttributeModifierTree } from './attribute-modifier-tree';

export class AttributeTree extends BaseTree {
  modifiers: AttributeModifierTree[];
  id: IdToken;
  isPrivate: boolean;
  type?: TypeTree;
  body?: StatementTree[];
  typeMetadata: TypeMetadata;

  constructor(public ctx?: AttributeContext) {
    super();
    if (!ctx) return;

    this.modifiers = ctx.attributeModifier().map((x) => new AttributeModifierTree(x));
    this.id = IdToken.fromContext(ctx.attributeName());
    this.isPrivate = this.id.text.startsWith('_');
    this.type = getTypeTree(ctx.type()) || null;
    this.body = getStatementsFromBody(ctx.body()) || null;

    if (
      this.type &&
      this.type instanceof FunctionTypeTree &&
      this.type.parameters.some((x) => !x.type)
    )
      throw new Error('All parameters should be with type');
  }

  static fromFields(
    modifiers: AttributeModifierTree[],
    id: IdToken,
    type: TypeTree,
    body: StatementTree[],
  ): AttributeTree {
    const attribute = new AttributeTree();
    attribute.modifiers = modifiers;
    attribute.id = id;
    attribute.type = type;
    attribute.body = body;
    return attribute;
  }
}
