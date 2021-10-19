import { AssertStatementTree } from '../../tree/statement/assert-statement/assert-statement.tree';
import { ExpressionStatementTree } from '../../tree/statement/expression-statement/expression-statement.tree';
import { ForStatementTree } from '../../tree/statement/for-statement/for-statement.tree';
import { IfStatementTree } from '../../tree/statement/if-statement/if-statement.tree';
import { PreprocessorStatementTree } from '../../tree/statement/preprocessor-statement/preprocessor-statement.tree';
import { ReturnStatementTree } from '../../tree/statement/return-statement/return-statement.tree';
import { StatementTree } from '../../tree/statement/statement.tree';
import { WhileStatementTree } from '../../tree/statement/while-statement/while-statement.tree';
import { GenericsMap } from '../generics-map';
import { AssertStatementInference } from './assert-statement/assert-statement.inference';
import { ExpressionStatementInference } from './expression-statement/expression-statement.inference';
import { ForStatementInference } from './for-statement/for-statement.inference';
import { IfStatementInference } from './if-statement/if-statement.inference';
import { ReturnStatementInference } from './return-statement/return-statement.inference';
import { StatementInference } from './statement.inference';
import { WhileStatementInference } from './while-statement/while-statement.inference';

export function getStatementInference(
  tree: StatementTree,
  genericsMap: GenericsMap,
): StatementInference {
  if (tree === undefined) return undefined;

  if (tree instanceof PreprocessorStatementTree) return null;

  if (tree instanceof AssertStatementTree) return new AssertStatementInference(tree, genericsMap);
  if (tree instanceof ExpressionStatementTree)
    return new ExpressionStatementInference(tree, genericsMap);
  if (tree instanceof ForStatementTree) return new ForStatementInference(tree, genericsMap);
  if (tree instanceof IfStatementTree) return new IfStatementInference(tree, genericsMap);
  if (tree instanceof ReturnStatementTree) return new ReturnStatementInference(tree, genericsMap);
  if (tree instanceof WhileStatementTree) return new WhileStatementInference(tree, genericsMap);

  throw new Error(`Statement inference not found for "${tree.constructor.name}"`);
}
