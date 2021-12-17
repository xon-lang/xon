import { CallExpressionTree } from '../../../tree/expression/invoke/invoke-expression-node';
import { GenericExpressionTree } from '../../../tree/expression/generic/call-expression.tree';
import { MemberExpressionNode } from '../../../tree/expression/member/member-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { LambdaTypeMetadata } from '../../type/lambda/lambda-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class GenericExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(tree: GenericExpressionTree, scope: DeclarationScope) {
    super();

    // const args = tree.arguments.map((x) => getExpressionMetadata(x, scope)).map((x) => x.type);
    // const instanceType = getExpressionMetadata(tree.instance, scope).type;
    // if (tree.instance instanceof MemberExpressionTree) {
    //   const member = tree. instance.instance as MemberExpressionTree;
    //   const memberType = getExpressionMetadata(member, scope).type;
    //   const typeArguments = tree.typeArguments.map((x) => getTypeMetadata(x, scope));
    //   const attributes = instanceType.attributes.filter((x) => {
    //     if (x.name !== member.id.text) return false;
    //     const type = x.type();
    //     if (!type.is(memberType)) return false;
    //     if (type instanceof LambdaTypeMetadata) {
    //       return (
    //         type.parameters.length === args.length && type.parameters.every((x, i) => x.is(args[i]))
    //       );
    //     }
    //   });
    // } else {
    //   const instanceType = getExpressionMetadata(tree.instance, scope).type;
    //   if (!(instanceType instanceof LambdaTypeMetadata))
    //     throw new Error(`Instance type is not a method but '${instanceType.constructor.name}'`);

    //   this.type = instanceType.resultType;
    // }

  }
}
