import { String } from '../../../lib/core';
import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { Translator } from '../../translator';
import { getExpressionTranslator } from '../expression/expression-translator-helper';

export class ParameterTranslator implements Translator {
  constructor(private tree: ParameterTree, private isType: boolean) {}

  toString(): String {
    const name = getExpressionTranslator(this.tree.name, this.isType);
    const type = (this.tree.type && ': ' + getExpressionTranslator(this.tree.type, true)) || '';
    const value =
      (this.tree.value && ' = ' + getExpressionTranslator(this.tree.value, false)) || '';
    return `${name}${type}${value}`;
  }
}
