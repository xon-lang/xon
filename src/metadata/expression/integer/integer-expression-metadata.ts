import { Integer } from '~/lib/core';
import { ExpressionMetadata } from '~/metadata/expression/expression-metadata';
import { IntegerTypeMetadata } from '~/metadata/type/integer/integer-type-metadata';
import { TypeMetadata } from '~/metadata/type/type-metadata';
import { IntegerExpressionTree } from '~/tree/expression/integer/integer-expression-tree';

export class IntegerExpressionMetadata extends ExpressionMetadata {
  private _type: TypeMetadata;

  constructor(private tree: IntegerExpressionTree) {
    super();
    this._type = new IntegerTypeMetadata(tree.value);
  }

  type(): TypeMetadata {
    return this._type;
  }

  eval(): Integer {
    return this.tree.value;
  }
}
