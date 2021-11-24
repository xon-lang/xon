import { TypeContext } from '../../grammar/xon-parser';
import { TypeMetadata } from '../../metadata/type/type-metadata';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';

export abstract class TypeTree extends BaseTree {
  ctx?: TypeContext;
  typeMetadata: TypeMetadata;
  abstract name: string;
  abstract condition: ExpressionTree;
}
