import { LiteralContext } from '../../grammar/xon-parser';
import { TypeInfo } from '../../metadata/type/type-info';
import { BaseTree } from '../base.tree';

export abstract class LiteralTree extends BaseTree {
  abstract ctx?: LiteralContext;
  abstract value: string | number;
  typeMetadata: TypeInfo;
}
