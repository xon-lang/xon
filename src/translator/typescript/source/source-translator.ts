import { String } from '../../../lib/core';
import { SourceTree } from '../../../tree/source/source-tree';
import { Translator } from '../../translator';
import { getVariables } from '../../util/body-variables';
import { getDefinitionTranslators } from '../definition/definition-translator-helper';
import { getStatementTranslators } from '../statement/statement-translator-helper';

export class SourceTranslator implements Translator {
  constructor(private tree: SourceTree) {}

  toString(): String {
    const statements = getStatementTranslators(this.tree.statements).join('\n');
    const definitions = getDefinitionTranslators(this.tree.definitions).join('\n\n');

    const vars = getVariables(this.tree.statements);
    const declarations = vars.length ? `  let ${vars.join(', ')}` : '';
    return (
      [
        '// this code was generated',
        declarations,
        statements,
        definitions,
        '// this code was generated',
      ]
        .filter(Boolean)
        .join('\n\n') + '\n'
    );
  }
}
