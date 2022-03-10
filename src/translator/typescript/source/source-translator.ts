import { SourceTree } from '../../../tree/source/source-tree';
import { Translator } from '../../translator';
import { getDefinitionTranslators } from '../definition/definition-translator-helper';
import { getStatementTranslators } from '../statement/statement-translator-helper';

export class SourceTranslator implements Translator {
  constructor(private tree: SourceTree) {}

  toString(): string {
    const coreImport = "import { Any, Unknown, String, Number } from '@lib/core'\n";
    const statements = getStatementTranslators(this.tree.statements).join('\n');
    const definitions = getDefinitionTranslators(this.tree.definitions).join('\n\n');
    return coreImport + [statements, definitions].filter(Boolean).join('\n\n') + '\n';
  }
}
