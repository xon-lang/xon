import { None, String } from '../../../lib/core';
import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { SourceRange } from '../../../util/source-range';
import { TypeMetadata } from '../../expression/type/type-metadata';
import { ValueMetadata } from '../../expression/value/value-metadata';
import { DeclarationMetadata } from '../declaration-metadata';
import { DeclarationScope } from '../scope/declaration-scope';

export class ParameterMetadata extends DeclarationMetadata {
  sourceRange: SourceRange;
  name: String;

  parameters: ParameterMetadata[] = [];
  type: TypeMetadata | None;
  value: ValueMetadata | None;

  constructor(public tree: ParameterTree | IdExpressionTree, public scope: DeclarationScope) {
    super();
    this.sourceRange = tree.sourceRange;
    this.name = tree.name.text;
  }
}
