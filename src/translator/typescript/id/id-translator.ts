import { IdTree } from '../../../tree/id/id-tree';
import { Translator } from '../../translator';

export class IdTranslator implements Translator {
  constructor(private tree: IdTree, private useModifier = false) {}

  toString(): string {
    const modifier = (this.useModifier && this.tree.name.text.startsWith('_') && 'private ') || '';
    if (this.tree.generics.length) {
      return `${modifier}${this.tree.name}<${this.tree.generics.join(', ')}>`;
    }
    return `${modifier}${this.tree}`;
  }
}
