import { String } from '../../../../lib/core';
import { MultipleBodyTree } from '../../../../tree/body/multiple/multiple-body-tree';
import { getStatementTranslators } from '../../statement/statement-translator-helper';
import { BodyTranslator } from '../body-translator';

export class MultipleBodyTranslator implements BodyTranslator {
  constructor(private tree: MultipleBodyTree) {}

  toString(): String {
    const statements = getStatementTranslators(this.tree.statements);
    return statements.join('\n');
  }
}
