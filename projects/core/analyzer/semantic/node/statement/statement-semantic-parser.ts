import {$, is} from '../../../../$';
import {nothing} from '../../../../../lib/types';
import {StatementNode} from '../../../syntax/statement/statement-node';
import {SemanticAnalyzer} from '../../semantic-analyzer';
import {declarationsParse} from '../declaration/declaration-semantic-parser';
import {importValueSemanticParse} from '../value/import/import-value-semantic-parser';
import {valueSemanticParse} from '../value/value-semantic-parser';
import {returnStatementSemanticParse} from './return/return-statement-semantic-parser';

export function statementsParse(analyzer: SemanticAnalyzer, statements: StatementNode[]): void {
  if (statements.length === 0) {
    return;
  }

  for (const statement of statements) {
    if (is(statement.value, $.ImportNode)) {
      importValueSemanticParse(analyzer, statement.value);
    }
  }

  const declarationNodes = statements.filterMap((x) => (is(x.value, $.DeclarationNode) ? x.value : nothing));
  declarationsParse(analyzer, declarationNodes);

  for (const statement of statements) {
    for (const node of statement.children) {
      if (is(node, $.ImportNode)) {
        continue;
      }

      if (is(node, $.ReturnNode)) {
        returnStatementSemanticParse(analyzer, node);

        continue;
      }

      valueSemanticParse(analyzer, node);
    }
  }

  // todo fix it if needed
  analyzer.pushDeclarationScope();

  for (const statement of statements) {
    statementsParse(analyzer, statement.body);
  }

  analyzer.popDeclarationScope();
}
