import { OperatorClassMemberContext } from '../../../../../grammar/xon-parser';
import { TypeMetadata } from '../../../../../metadata/type/type-metadata';
import { AttributeTree } from '../../../../attribute/attribute-tree';
import { IdToken } from '../../../../id-token';
import { getStatements } from '../../../../statement/statement-tree.helper';
import { FunctionTypeTree } from '../../../../type/function-type/function-type.tree';
import { getTypeTree } from '../../../../type/type-tree.helper';
import { ClassMemberTree } from '../class-member.tree';

export class OperatorClassMemberTree extends ClassMemberTree {
  isInfix: boolean;
  isPrefix: boolean;
  isPostfix: boolean;
  attribute: AttributeTree;
  typeMetadata: TypeMetadata;

  public constructor(public ctx?: OperatorClassMemberContext) {
    super();
    if (!ctx) return;

    const type = getTypeTree(ctx.type());
    if (!(type instanceof FunctionTypeTree)) throw new Error('Type should be a function');

    this.isInfix = !!ctx.INFIX();
    this.isPrefix = !!ctx.PREFIX();
    this.isPostfix = !!ctx.POSTFIX();

    this.attribute = AttributeTree.fromFields(
      IdToken.fromContext(ctx.operator()),
      type,
      getStatements(ctx.body()),
    );
  }
}
