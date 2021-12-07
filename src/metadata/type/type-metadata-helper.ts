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
import { AnyTypeMetadata } from './id/any/any-type-metadata';
import { IdTypeMetadata } from './id/id-type-metadata';
import { NoneTypeMetadata } from './id/none/none-type-metadata';
import { LiteralTypeMetadata } from './literal/literal-type-metadata';
import { IntersectionTypeMetadata } from './set/intersection/intersection-type-metadata';
import { UnionTypeMetadata } from './set/union/union-type-metadata';
import { TypeMetadata } from './type-metadata';

export function getTypeMetadata(tree: TypeTree, scope: DeclarationScope): TypeMetadata {
  if (tree instanceof ParenthesizedTypeTree)
    return (tree.metadata = getTypeMetadata(tree.type, scope));

  if (tree instanceof IdTypeTree) {
    if (tree.id.text === 'Any') return (tree.metadata = new AnyTypeMetadata(scope));
    if (tree.id.text === 'None') return (tree.metadata = new NoneTypeMetadata(scope));
    return (tree.metadata = new IdTypeMetadata(
      tree.id.text,
      tree.typeArguments.map((x) => getTypeMetadata(x, scope)),
      scope,
    ));
  }

  if (tree instanceof ArrayTypeTree)
    return (tree.metadata = new IdTypeMetadata(
      'Array',
      [getTypeMetadata(tree.itemType, scope)],
      scope,
    ));

  if (tree instanceof LambdaTypeTree)
    return (tree.metadata = new IdTypeMetadata(
      'Lambda',
      [
        ...tree.parameters.map((x) => getTypeMetadata(x.type, scope)),
        tree.resultType ? getTypeMetadata(tree.resultType, scope) : null,
      ].filter((x) => x),
      scope,
    ));

  if (tree instanceof LiteralTypeTree)
    return (tree.metadata = new LiteralTypeMetadata(
      tree.literal.constructor.name.replace('LiteralTree', ''),
      tree.literal.value,
      scope,
    ));

  if (tree instanceof NullableTypeTree)
    return (tree.metadata = new UnionTypeMetadata(
      [getTypeMetadata(tree.innerType, scope), new NoneTypeMetadata(scope)],
      scope,
    ));

  if (tree instanceof TupleTypeTree)
    return (tree.metadata = new IdTypeMetadata(
      'Tuple',
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
