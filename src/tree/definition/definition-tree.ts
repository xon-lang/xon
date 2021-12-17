import { DefinitionContext } from '../../grammar/xon-parser';
import { Node } from '../node';
import { IdToken } from '../id-token';

export abstract class DefinitionTree extends Node {
  abstract ctx: DefinitionContext;
  abstract id: IdToken;

  get isPrivate(): boolean {
    return this.id.text.startsWith('_');
  }
}
