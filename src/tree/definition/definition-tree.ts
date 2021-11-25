import { DefinitionContext } from '../../grammar/xon-parser';
import { TypeInfo } from '../../metadata/type/type-info';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';

export abstract class DefinitionTree extends BaseTree {
  abstract ctx?: DefinitionContext;
  id: IdToken;
  typeMetadata: TypeInfo;
}
