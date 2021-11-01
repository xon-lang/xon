import {
  AttributeClassMemberContext,
  ClassMemberContext,
  OperatorClassMemberContext,
} from '../../../../grammar/xon-parser';
import { AttributeTree } from '../../../attribute/attribute-tree';
import { IdToken } from '../../../id-token';
import { getStatements } from '../../../statement/statement-tree.helper';
import { FunctionTypeTree } from '../../../type/function-type/function-type.tree';
import { getTypeTree } from '../../../type/type-tree.helper';
import { AttributeClassMemberTree } from './attribute-class-member/attribute-class-member-tree';

export const getClassMemberTree = (ctx: ClassMemberContext): AttributeClassMemberTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof AttributeClassMemberContext) return new AttributeClassMemberTree(ctx);
  if (ctx instanceof OperatorClassMemberContext) {
    const type = getTypeTree(ctx.type());
    if (!(type instanceof FunctionTypeTree))
      throw new Error(`Type of operator '${ctx.operator().text}' should be a function`);

    const modifiers = ctx.modifier().map((x) => IdToken.fromContext(x));
    if (modifiers.filter((x) => ['infix', 'prefix', 'postfix'].includes(x.text)).length > 1)
      throw new Error('Could be only modifier');
    const attribute = AttributeTree.fromFields(
      modifiers,
      IdToken.fromContext(ctx.operator()),
      type,
      getStatements(ctx.body()),
    );

    return AttributeClassMemberTree.fromAttribute(attribute);
  }

  throw Error(`ClassMember tree not found for "${ctx.constructor.name}"`);
};

export const getClassMembersTrees = (members: ClassMemberContext[]): AttributeClassMemberTree[] =>
  members?.map(getClassMemberTree) || [];
