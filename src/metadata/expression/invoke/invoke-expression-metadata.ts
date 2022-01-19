import { InvokeExpressionTree } from '../../../tree/expression/invoke/invoke-expression-tree';
import { ParameterDeclarationMetadata } from '../../declaration/parameter/parameter-declaration-metadata';
import { DeclarationScope } from '../../scope/declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';

export class InvokeExpressionMetadata implements ExpressionMetadata {
  constructor(node: InvokeExpressionTree, scope: DeclarationScope) {
    // const args = node.arguments.map((x) => getExpressionMetadata(x, scope)).map((x) => x.type);
    // const instanceType = getExpressionMetadata(node.instance, scope).type;
    // if (node.instance instanceof MemberExpressionNode) {
    //   const member = node.instance.instance as MemberExpressionNode;
    //   const memberType = getExpressionMetadata(member, scope).type;
    //   const typeArguments = node.typeArguments.map((x) => getTypeMetadata(x, scope));
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
    //   const instanceType = getExpressionMetadata(node.instance, scope).type;
    //   if (!(instanceType instanceof LambdaTypeMetadata))
    //     throw new Error(`Instance type is not a method but '${instanceType.constructor.name}'`);
    //   this.type = instanceType.resultType;
    // }
  }

  attributes(): ParameterDeclarationMetadata[] {
    throw new Error('Method not implemented.');
  }

  is(metadata: ExpressionMetadata): boolean {
    throw new Error('Not implemented');
  }
}
