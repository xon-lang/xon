import { TypeContext } from '../../grammar/xon-parser';
import { TypeInfo } from '../../metadata/type/type-info';
import { BaseTree } from '../base.tree';

export abstract class TypeTree extends BaseTree {
  abstract ctx?: TypeContext;
  abstract name: string;
  typeMetadata: TypeInfo;
}
