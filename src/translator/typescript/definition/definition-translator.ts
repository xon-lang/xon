import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { NullableExpressionTree } from '../../../tree/expression/nullable/nullable-expression-tree';
import { Translator } from '../../translator';
import { getAttributeTranslators } from '../attribute/attribute-translator-helper';
import { getBodyTranslator } from '../body/body-translator-helper';
import { getExpressionTranslator } from '../expression/expression-translator-helper';
import { getIdTranslator } from '../id/id-translator-helper';
import { getParameterTranslators } from '../parameter/parameter-translator-helper';

export class DefinitionTranslator implements Translator {
  constructor(private tree: DefinitionTree) {}

  toString(): string {
    const id = getIdTranslator(this.tree.id);
    let parameters = getParameterTranslators(this.tree.parameters).join(', ');
    let base =
      (this.tree.base && ' extends ' + getExpressionTranslator(this.tree.base, false)) || '';
    const properties = this.tree.attributes
      .filter((x) => !x.isMethod)
      .map((x) => {
        const nullable = (x.type instanceof NullableExpressionTree && '?') || '';
        const type = ': ' + (getExpressionTranslator(x.type, true) || 'any');
        return `${getIdTranslator(x.id, true)}${nullable}${type}`;
      })
      .join('\n');

    const initProperties = this.tree.attributes
      .filter((x) => !x.isMethod && x.body)
      .map((x) => `this.${getIdTranslator(x.id)} = ${getBodyTranslator(x.body)}`)
      .join('\n');

    let constructor =
      (initProperties &&
        `constructor(${parameters}) {\n${initProperties.replace(/^(.+)/gm, '  $1')}\n}`) ||
      '';

    const methodsWithBody = getAttributeTranslators(
      this.tree.attributes.filter((x) => x.isMethod && x.body),
    ).join('\n\n');
    const methodsWithNoBody = getAttributeTranslators(
      this.tree.attributes.filter((x) => x.isMethod && !x.body),
    ).join('\n');
    const attributes =
      (this.tree.attributes.length &&
        '{\n' +
          [properties, constructor, methodsWithBody, methodsWithNoBody]
            .filter(Boolean)
            .join('\n\n')
            .replace(/^(.+)/gm, '  $1') +
          '\n}') ||
      '{}';
    return `export class ${id}${base} ${attributes}`;
  }
}
