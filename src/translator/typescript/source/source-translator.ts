import { SourceTree } from '../../../tree/source/source-tree';
import { Translator } from '../../translator';
import { getDefinitionTranslators } from '../definition/definition-translator-helper';
import { getStatementTranslators } from '../statement/statement-translator-helper';

export class SourceTranslator implements Translator {
  constructor(private tree: SourceTree) {}

  toString(): string {
    const statements = getStatementTranslators(this.tree.statements).join('\n');
    const definitions = getDefinitionTranslators(this.tree.definitions).join('\n\n');
    return (
      ['// this code was generated', statements, definitions, '// this code was generated']
        .filter(Boolean)
        .join('\n\n') + '\n'
    );
  }
}
