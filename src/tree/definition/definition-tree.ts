import { DefinitionContext } from '../../grammar/xon-parser';
import { TypeMetadata } from '../../metadata/type/type-metadata';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';

export abstract class DefinitionTree extends BaseTree {
  abstract ctx?: DefinitionContext;
  id: IdToken;
  typeMetadata: TypeMetadata;
}
