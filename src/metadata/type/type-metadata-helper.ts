import { LiteralNode } from '../../ast/literal/literal-node';
import { ArrayTypeTree } from '../../ast/type/array/array-type.tree';
import { IdTypeTree } from '../../ast/type/id/id-type.tree';
import { IntersectionTypeTree } from '../../ast/type/intersection/intersection-type.tree';
import { LambdaTypeTree } from '../../ast/type/lambda/lambda-type.tree';
import { LiteralTypeTree } from '../../ast/type/literal/literal-type.tree';
import { NullableTypeTree } from '../../ast/type/nullable/nullable-type.tree';
import { ParenthesizedTypeTree } from '../../ast/type/parenthesized/parenthesized-type.tree';
import { TupleTypeTree } from '../../ast/type/tuple/tuple-type.tree';
import { TypeTree } from '../../ast/type/type.tree';
import { UnionTypeTree } from '../../ast/type/union/union-type.tree';
import { DeclarationScope } from '../declaration-scope';
import { DefinitionMetadata } from '../declaration/definition/definition-metadata';
import { ArrayTypeMetadata } from './array/array-type-metadata';
import { IdTypeMetadata } from './id/id-type-metadata';
import { LiteralTypeMetadata } from './literal/literal-type-metadata';
import { NullableTypeMetadata } from './nullable/nullable-type-metadata';
import { IntersectionTypeMetadata } from './set/intersection/intersection-type-metadata';
import { UnionTypeMetadata } from './set/union/union-type-metadata';
import { TupleTypeMetadata } from './tuple/tuple-type-metadata';
import { TypeMetadata } from './type-metadata';

export function getTypeDefinition(
  tree: TypeTree | LiteralNode,
  scope: DeclarationScope,
): DefinitionMetadata {
  if (tree instanceof ParenthesizedTypeTree) return getTypeDefinition(tree.type, scope);
  if (tree instanceof LiteralNode) {
    const name = tree.constructor.name.replace('LiteralTree', '');
    return scope.findByName(name) as DefinitionMetadata;
  }
  if (tree instanceof IdTypeTree) {
    const typeArguments = tree.typeArguments.map((x) => getTypeDefinition(x, scope));
    const definition = scope.findByName(tree.id.text) as DefinitionMetadata;
    return definition.useTypeArguments(typeArguments);
  }
}

export function getTypeMetadata(tree: TypeTree): TypeMetadata {
  if (tree instanceof ParenthesizedTypeTree) return (tree.metadata = getTypeMetadata(tree.type));

  if (tree instanceof IdTypeTree) {
    return (tree.metadata = new IdTypeMetadata(
      tree.id.text,
      tree.typeArguments.map((x) => getTypeMetadata(x)),
    ));
  }

  if (tree instanceof ArrayTypeTree)
    return (tree.metadata = new ArrayTypeMetadata(getTypeMetadata(tree.itemType)));

  if (tree instanceof LambdaTypeTree) {
    // const typeScope = new DeclarationScope();
    // tree.typeParameters.forEach((x) =>
    //   typeScope.add(
    //     new GenericMetadata(
    //       x.id.text,
    //       x.hasSpread,
    //       getTypeMetadata(x.restrictionType),
    //     ),
    //   ),
    // );
    // const parameters = tree.parameters.map((x) => getTypeMetadata(x.type));
    // const resultType = tree.resultType ? getTypeMetadata(tree.resultType) : new NoneTypeMetadata();
    // return (tree.metadata = new LambdaTypeMetadata(parameters, resultType));
  }

  if (tree instanceof LiteralTypeTree)
    return (tree.metadata = LiteralTypeMetadata.fromTree(tree.literal));

  if (tree instanceof NullableTypeTree)
    return (tree.metadata = new NullableTypeMetadata(getTypeMetadata(tree.innerType)));

  // if (tree instanceof ObjectTypeTree)
  //   return (tree.metadata = new NullableTypeMetadata(
  //     getTypeMetadata(tree.innerType, scope),
  //     scope,
  //   ));

  if (tree instanceof TupleTypeTree)
    return (tree.metadata = new TupleTypeMetadata(tree.types.map((x) => getTypeMetadata(x))));

  if (tree instanceof IntersectionTypeTree)
    return (tree.metadata = new IntersectionTypeMetadata(
      tree.types.map((x) => getTypeMetadata(x)),
    ));

  if (tree instanceof UnionTypeTree)
    return (tree.metadata = new UnionTypeMetadata(tree.types.map((x) => getTypeMetadata(x))));

  // if (ctx instanceof MetaTypeContext) return new MetaTypeTree(ctx);
}
