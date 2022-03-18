import { String } from '../../../lib/core';
import { AttributeTree } from '../../../tree/attribute/attribute-tree';
import { MultipleBodyTree } from '../../../tree/body/multiple/multiple-body-tree';
import { SingleBodyTree } from '../../../tree/body/single/single-body-tree';
import { Translator } from '../../translator';
import { getVariables } from '../../util/body-variables';
import { getBodyTranslator } from '../body/body-translator-helper';
import { getExpressionTranslator } from '../expression/expression-translator-helper';
import { getParameterTranslators } from '../parameter/parameter-translator-helper';

export class AttributeTranslator implements Translator {
  constructor(private tree: AttributeTree) {}

  toString(): String {
    let parameters =
      (this.tree.isMethod &&
        `(${getParameterTranslators(this.tree.parameters, false).join(', ')})`) ||
      '';
    const type = (this.tree.type && ': ' + getExpressionTranslator(this.tree.type, true)) || '';
    let body = '';
    if (this.tree.body) {
      body = getBodyTranslator(this.tree.body).toString();

      if (this.tree.body instanceof SingleBodyTree) {
        if (parameters) {
          body = ` {\n  return ${body}\n}`;
        } else {
          body = ` = ${body}`;
        }
      }
      if (this.tree.body instanceof MultipleBodyTree) {
        const vars = getVariables(this.tree.body.statements);
        const declarations = vars.length ? `  let ${vars.join(', ')}\n` : '';
        body = (body && ` {\n${declarations}${body.replace(/^(.+)/gm, '  $1')}\n}`) || ' {}';
      }
    } else if (this.tree.isMethod) {
      body = ` {\n  throw new Error('Not implemented')\n}`;
    }

    return this.tree.name + parameters + type + body;
  }
}
