import { ArrayExpressionTree } from '../../../../tree/expression/array/array-expression-tree';
import { ParameterMetadata } from '../../../declaration/parameter/parameter-metadata';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { ArrayTypeMetadata } from '../../type/array/array-type-metadata';
import { ObjectTypeMetadata } from '../../type/object/object-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { UnionTypeMetadata } from '../../type/union/union-type-metadata';
import { ValueMetadata } from '../value-metadata';
import { fillValueMetadata } from '../value-metadata-helper';

export class ArrayValueMetadata extends ValueMetadata {
  constructor(private tree: ArrayExpressionTree) {
    super();
    tree.arguments.forEach((x) => fillValueMetadata(x.value));
  }

  // todo use generics
  type(): TypeMetadata | null {
    const items = this.tree.arguments.map((x) => ({
      tree: x,
      sourceRange: x.sourceRange,
      name: x.name?.text,
      type: (x.value.metadata as ValueMetadata).type(),
      value: x.value.metadata as ValueMetadata,
    }));

    if (this.tree.ctx.arguments().open().OPEN_BRACE()) {
      const objectScope = new DeclarationScope();
      items.forEach((x) => {
        const metadata = new ParameterMetadata(null);
        metadata.name = x.tree.name.text;
        metadata.sourceRange = x.sourceRange;
        metadata.type = x.type;
        metadata.value = x.value;
        objectScope.add(metadata);
      });
      return new ObjectTypeMetadata(objectScope);
    }
    let commonType: TypeMetadata = this.tree.scope.core.any.type;
    if (items.length === 1) {
      commonType = items[0].type;
    } else if (items.length > 1) {
      commonType = UnionTypeMetadata.fromTypes(items.map((x) => x.type));
    }
    return new ArrayTypeMetadata(
      commonType,
      items.map((x) => x.type),
      this.tree.scope.core.array,
    );
  }

  eval() {
    throw new Error('Method not implemented.');
  }
}
