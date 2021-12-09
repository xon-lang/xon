import { ArrayTypeTree } from '../../tree/type/array/array-type.tree';
import { IdTypeTree } from '../../tree/type/id/id-type.tree';
import { IntersectionTypeTree } from '../../tree/type/intersection/intersection-type.tree';
import { LambdaTypeTree } from '../../tree/type/lambda/lambda-type.tree';
import { LiteralTypeTree } from '../../tree/type/literal/literal-type.tree';
import { NullableTypeTree } from '../../tree/type/nullable/nullable-type.tree';
import { ParenthesizedTypeTree } from '../../tree/type/parenthesized/parenthesized-type.tree';
import { TupleTypeTree } from '../../tree/type/tuple/tuple-type.tree';
import { TypeTree } from '../../tree/type/type.tree';
import { UnionTypeTree } from '../../tree/type/union/union-type.tree';
import { DeclarationScope } from '../declaration-scope';
import { GenericMetadata } from '../declaration/generic/generic-metadata';
import { ArrayTypeMetadata } from './array/array-type-metadata';
import { IdTypeMetadata } from './id/id-type-metadata';
import { LambdaTypeMetadata } from './lambda/lambda-type-metadata';
import { LiteralTypeMetadata } from './literal/literal-type-metadata';
import { NoneTypeMetadata } from './none/none-type-metadata';
import { NullableTypeMetadata } from './nullable/nullable-type-metadata';
import { IntersectionTypeMetadata } from './set/intersection/intersection-type-metadata';
import { UnionTypeMetadata } from './set/union/union-type-metadata';
import { TupleTypeMetadata } from './tuple/tuple-type-metadata';
import { TypeMetadata } from './type-metadata';

export function getTypeMetadata(tree: TypeTree, scope: DeclarationScope): TypeMetadata {
  if (tree instanceof ParenthesizedTypeTree)
    return (tree.metadata = getTypeMetadata(tree.type, scope));

  if (tree instanceof IdTypeTree) {
    return (tree.metadata = new IdTypeMetadata(
      tree.id.text,
      tree.typeArguments.map((x) => getTypeMetadata(x, scope)),
      scope,
    ));
  }

  if (tree instanceof ArrayTypeTree)
    return (tree.metadata = new ArrayTypeMetadata(getTypeMetadata(tree.itemType, scope), scope));

  if (tree instanceof LambdaTypeTree) {
    const typeScope = new DeclarationScope(scope);
    tree.typeParameters.forEach((x) =>
      typeScope.add(
        new GenericMetadata(x.id.text, getTypeMetadata(x.restrictionType, scope), scope),
      ),
    );
    const parameters = tree.parameters.map((x) => getTypeMetadata(x.type, typeScope));
    const resultType = tree.resultType
      ? getTypeMetadata(tree.resultType, typeScope)
      : new NoneTypeMetadata(scope);
    return (tree.metadata = new LambdaTypeMetadata(parameters, resultType, scope));
  }

  if (tree instanceof LiteralTypeTree)
    return (tree.metadata = new LiteralTypeMetadata(
      tree.literal.constructor.name.replace('LiteralTree', ''),
      tree.literal.value,
      scope,
    ));

  if (tree instanceof NullableTypeTree)
    return (tree.metadata = new NullableTypeMetadata(
      getTypeMetadata(tree.innerType, scope),
      scope,
    ));

  if (tree instanceof TupleTypeTree)
    return (tree.metadata = new TupleTypeMetadata(
      tree.types.map((x) => getTypeMetadata(x, scope)),
      scope,
    ));

  if (tree instanceof IntersectionTypeTree)
    return (tree.metadata = new IntersectionTypeMetadata(
      tree.types.map((x) => getTypeMetadata(x, scope)),
      scope,
    ));

  if (tree instanceof UnionTypeTree)
    return (tree.metadata = new UnionTypeMetadata(
      tree.types.map((x) => getTypeMetadata(x, scope)),
      scope,
    ));

  // if (ctx instanceof MetaTypeContext) return new MetaTypeTree(ctx);
}
