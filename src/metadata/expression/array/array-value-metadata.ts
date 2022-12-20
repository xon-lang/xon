import { ParameterMetadata } from '~/metadata/declaration/parameter/parameter-declaration-metadata';
import { DeclarationScope } from '~/metadata/declaration/scope/declaration-scope';
import { getExpressionMetadata } from '~/metadata/expression/expression-metadata-helper';
import { ValueMetadata } from '~/metadata/expression/value/value-metadata';
import { ArrayTypeMetadata } from '~/metadata/type/array/array-type-metadata';
import { ObjectTypeMetadata } from '~/metadata/type/object/object-type-metadata';
import { TypeMetadata } from '~/metadata/type/type-metadata';
import { UnionType } from '~/metadata/type/union/union-type';
import { ArrayExpressionTree } from '~/tree/expression/array/array-expression-tree';

export class ArrayValueMetadata extends ValueMetadata {
  constructor(private tree: ArrayExpressionTree) {
    super();
    tree.arguments.forEach((x) => x.value && getExpressionMetadata(x.value));
  }

  // use generics
  type(): TypeMetadata | null {
    const items = this.tree.arguments.map((x) => ({
      name: x.name?.text,
      sourceSpan: x.sourceSpan,
      tree: x,
      type: (x.value?.metadata as ValueMetadata).type(),
      value: x.value?.metadata as ValueMetadata,
    }));

    if (this.tree.ctx.arguments().open().OPEN_BRACE()) {
      const objectScope = new DeclarationScope();
      items.forEach((x) => {
        const metadata = new ParameterMetadata(null);
        metadata.name = x.tree.name?.text;
        metadata.tree = x.sourceSpan;
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
      commonType = UnionType.fromTypes(items.map((x) => x.type));
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
