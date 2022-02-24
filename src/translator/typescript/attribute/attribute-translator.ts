import { AttributeTree } from '../../../tree/attribute/attribute-tree';
import { Translator } from '../../translator';
import { getBodyTranslator } from '../body/body-translator-helper';
import { getExpressionTranslator } from '../expression/expression-translator-helper';
import { getIdTranslator } from '../id/id-translator-helper';

export class AttributeTranslator implements Translator {
  constructor(private tree: AttributeTree) {}

  toString(): string {
    const modifier = (this.tree.id.name.text.startsWith('_') && 'private') || 'public';
    const id = getIdTranslator(this.tree.id);
    let parameters = this.tree.parameters && `(${this.tree.parameters.join(', ')})`;
    const type = getExpressionTranslator(this.tree.type, true);
    const body = getBodyTranslator(this.tree.body);
    if (parameters) {
      return `${modifier} ${id}${parameters || ''}: ${type || 'any'}{${body || ''}\n}`;
    }
    return `${modifier} ${id}: ${type || 'any'}${(body && ' = ' + body) || ''}`;
  }
}
