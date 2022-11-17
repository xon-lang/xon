import { ParameterMetadata } from '~/metadata/declaration/parameter/parameter-metadata';
import { DeclarationScope } from '~/metadata/declaration/scope/declaration-scope';
import { ArrayTypeMetadata } from '~/metadata/expression/type/array/array-type-metadata';
import { ObjectTypeMetadata } from '~/metadata/expression/type/object/object-type-metadata';
import { TypeMetadata } from '~/metadata/expression/type/type-metadata';
import { UnionTypeMetadata } from '~/metadata/expression/type/union/union-type-metadata';
import { ValueMetadata } from '~/metadata/expression/value/value-metadata';
import { fillValueMetadata } from '~/metadata/expression/value/value-metadata-helper';
import { ArrayExpressionTree } from '~/tree/expression/array/array-expression-tree';

export class ArrayValueMetadata extends ValueMetadata {
  constructor(private tree: ArrayExpressionTree) {
    super();
    tree.arguments.forEach((x) => x.value && fillValueMetadata(x.value));
  }

  // use generics
  type(): TypeMetadata | null {
    const items = this.tree.arguments.map((x) => ({
      name: x.name?.text,
      sourceRange: x.sourceRange,
      tree: x,
      type: (x.value?.metadata as ValueMetadata).type(),
      value: x.value?.metadata as ValueMetadata,
    }));

    if (this.tree.ctx.arguments().open().OPEN_BRACE()) {
      const objectScope = new DeclarationScope();
      items.forEach((x) => {
        const metadata = new ParameterMetadata(null);
        metadata.name = x.tree.name?.text;
        metadata.sourceRange = x.sourceRange;
        metadata.type = x.type;
        objectScope.add(metadata);
      });

      return new ObjectTypeMetadata(objectScope);
    }
    let commonType: TypeMetadata | null = this.tree.scope.core.any.type;
    if (items.length === 1) {
      commonType = items[0].type;
    } else if (items.length > 1) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      commonType = UnionTypeMetadata.fromTypes(items.map((x) => x.type));
    }
    if (commonType) {
      return new ArrayTypeMetadata(
        commonType,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        items.map((x) => x.type),
        this.tree.scope.core.array,
      );
    }

    return null;
  }

  eval(): void {
    throw new Error('Method not implemented.');
  }
}
