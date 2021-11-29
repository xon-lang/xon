import { TypeContext } from '../../grammar/xon-parser';
import { TypeMetadata } from '../../metadata/type/type-metadata';
import { BaseTree } from '../base.tree';

export abstract class TypeTree extends BaseTree {
  abstract ctx: TypeContext;
  abstract metadata: TypeMetadata;
  abstract name: string;
}
