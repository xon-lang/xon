import { AttributeContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';
import { AttributeModifierTree } from './attribute-modifier-tree';

export abstract class AttributeTree extends BaseTree {
  abstract ctx?: AttributeContext;
  abstract modifiers: AttributeModifierTree[];
  abstract id: IdToken;

  get isPrivate(): boolean {
    return this.id.text.startsWith('_');
  }
}
