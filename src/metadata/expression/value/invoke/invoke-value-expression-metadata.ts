import { InvokeExpressionTree } from '../../../../tree/expression/invoke/invoke-expression-tree';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { ValueExpressionMetadata } from '../value-expression-metadata';

export class InvokeValueExpressionMetadata extends ValueExpressionMetadata {
  constructor(tree: InvokeExpressionTree, scope: DeclarationScope) {
    super();
    // const args = tree.arguments.map((x) => getExpressionMetadata(x, scope)).map((x) => x.type);
    // const instanceType = getExpressionMetadata(tree.instance, scope).type;
    // if (tree.instance instanceof MemberExpressiontree) {
    //   const member = tree.instance.instance as MemberExpressiontree;
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

  declaration(): DeclarationScope {
    throw new Error('Method not implemented.');
  }
}
