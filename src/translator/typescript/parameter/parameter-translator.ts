import { String } from '../../../lib/core';
import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { Translator } from '../../translator';
import { getBodyTranslator } from '../body/body-translator-helper';
import { getExpressionTranslator } from '../expression/expression-translator-helper';

export class ParameterTranslator implements Translator {
  constructor(private tree: ParameterTree) {}

  toString(): String {
    const type = (this.tree.type && ': ' + getExpressionTranslator(this.tree.type, true)) || '';
    const value = getExpressionTranslator(this.tree.value, false);
    if (value) {
      return `${(this.tree.name as IdExpressionTree).name.text}${type} = ${value}`;
    }
    return `${(this.tree.name as IdExpressionTree).name.text}${type}`;
  }
}
