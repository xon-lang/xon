import { String } from '../../../lib/core';
import { AttributeTree } from '../../../tree/attribute/attribute-tree';
import { SourceTree } from '../../../tree/source/source-tree';
import { Translator } from '../../translator';
import { getVariables } from '../../util/body-variables';
import { getAttributeTranslator } from '../attribute/attribute-translator-helper';
import { getDefinitionTranslators } from '../definition/definition-translator-helper';
import { getStatementTranslators } from '../statement/statement-translator-helper';

export class SourceTranslator implements Translator {
  constructor(private tree: SourceTree) {}

  toString(): String {
    const statements = getStatementTranslators(this.tree.statements).join('\n');
    const attributes = this.tree.attributes.map((x) => this.attribute(x)).join('\n\n');
    const definitions = getDefinitionTranslators(this.tree.definitions).join('\n\n');

    const vars = getVariables(this.tree.statements);
    const declarations = vars.length ? `  let ${vars.join(', ')}` : '';
    return (
      [
        '// this code was generated',
        declarations,
        statements,
        attributes,
        definitions,
        '// this code was generated',
      ]
        .filter(Boolean)
        .join('\n\n') + '\n'
    );
  }

  attribute(tree: AttributeTree) {
    const translation = getAttributeTranslator(tree);
    const modifier = (tree.name.text.startsWith('_') && new String('')) || 'export ';
    if (tree.isMethod) {
      return `${modifier}function ${translation}`;
    }
    return `${modifier}const ${translation}`;
  }
}
