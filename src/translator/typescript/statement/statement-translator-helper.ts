import { Issue } from '../../../issue-service/issue';
import { ExpressionStatementTree } from '../../../tree/statement/expression/expression-statement-tree';
import { IfStatementTree } from '../../../tree/statement/if/if-statement-tree';
import { StatementTree } from '../../../tree/statement/statement-tree';
import { ExpressionStatementTranslator } from './expression/expression-statement-translator';
import { IfStatementTranslator } from './if/if-statement-translator';
import { StatementTranslator } from './statement-translator';

export function getStatementTranslator(tree: StatementTree): StatementTranslator {
  try {
    if (tree instanceof IfStatementTree) return new IfStatementTranslator(tree);
    if (tree instanceof ExpressionStatementTree) return new ExpressionStatementTranslator(tree);
    throw new Error(`Statement translator not found for '${tree.constructor.name}'`);
  } catch (error) {
    Issue.errorFromTree(tree, error.toString());
  }
}

export const getStatementTranslators = (trees: StatementTree[]): StatementTranslator[] => {
  return trees?.map(getStatementTranslator) || [];
};
