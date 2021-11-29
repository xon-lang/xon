import { DefinitionContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';

export abstract class DefinitionTree extends BaseTree {
  abstract ctx: DefinitionContext;
  abstract id: IdToken;

  get isPrivate(): boolean {
    return this.id.text.startsWith('_');
  }
}
