import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { Translator } from '../../translator';
import { getBodyTranslator } from '../body/body-translator-helper';
import { getExpressionTranslator } from '../expression/expression-translator-helper';

export class ParameterTranslator implements Translator {
  constructor(private tree: ParameterTree) {}

  toString(): string {
    const type = (this.tree.type && ': ' + getExpressionTranslator(this.tree.type, true)) || '';
    const body = getBodyTranslator(this.tree.body);
    if (body) {
      return `${this.tree.name.text}${type} = ${body}`;
    }
    return `${this.tree.name.text}${type}`;
  }
}
