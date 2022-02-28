import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { Translator } from '../../translator';
import { getAttributeTranslators } from '../attribute/attribute-translator-helper';
import { getExpressionTranslator } from '../expression/expression-translator-helper';
import { getIdTranslator } from '../id/id-translator-helper';
import { getParameterTranslators } from '../parameter/parameter-translator-helper';

export class DefinitionTranslator implements Translator {
  constructor(private tree: DefinitionTree) {}

  toString(): string {
    let modifier = (this.tree.modifier.text === 'object' && 'class') || 'interface';
    const id = getIdTranslator(this.tree.id);
    let parameters =
      this.tree.parameters && getParameterTranslators(this.tree.parameters).join(', ');
    let base =
      (this.tree.base && ' implements ' + getExpressionTranslator(this.tree.base, false)) || '';
    const properties = getAttributeTranslators(
      this.tree.attributes.filter((x) => !x.isMethod),
    ).join('\n');

    let constructor = '';
    if (parameters) {
      constructor = `constructor(${parameters}) {}`;
    }

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
    return `export ${modifier} ${id}${base} ${attributes}`;
  }
}
