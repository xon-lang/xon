import { AttributeContext } from '../../grammar/xon-parser';
import { Node } from '../node';
import { IdToken } from '../id-token';

export abstract class AttributeTree extends Node {
  abstract ctx: AttributeContext;
  abstract id: IdToken;

  get isPrivate(): boolean {
    return this.id.text.startsWith('_');
  }
}
