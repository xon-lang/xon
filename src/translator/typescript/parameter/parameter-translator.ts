import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { Translator } from '../../translator';
import { getBodyTranslator } from '../body/body-translator-helper';
import { getExpressionTranslator } from '../expression/expression-translator-helper';
import { getIdTranslator } from '../id/id-translator-helper';

export class ParameterTranslator implements Translator {
  constructor(private tree: ParameterTree) {}

  toString(): string {
    const id = getIdTranslator(this.tree.id);
    const type = getExpressionTranslator(this.tree.type, true) || 'any';
    const body = getBodyTranslator(this.tree.body);
    if (body) {
      return `${id}: ${type} = ${body}`;
    }
    return `${id}: ${type}`;
  }
}
