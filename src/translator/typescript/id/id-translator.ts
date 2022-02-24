import { IdTree } from '../../../tree/id/id-tree';
import { Translator } from '../../translator';

export class IdTranslator implements Translator {
  constructor(private tree: IdTree) {}

  toString(): string {
    if (this.tree.generics.length) {
      return `${this.tree.name}<${this.tree.generics.join(', ')}>`;
    }
    return this.tree.toString();
  }
}
