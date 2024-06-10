import {Nothing, nothing} from '../../lib/types';
import {TextRange} from '../util/resource/text/text-range';
import {SyntaxContext} from './syntax-context';
import {StatementNode, constructStatementNode} from './syntax/statement/statement-node';

export function putStatementNode(context: SyntaxContext, indent: TextRange): Nothing {
  context.parentStatement = getParent(context, indent);
  context.lastStatement = constructStatementNode(context, indent);
}

function getParent(context: SyntaxContext, indent: TextRange): StatementNode | Nothing {
  if (!context.lastStatement) {
    return nothing;
  }

  if (indent.stop.column > context.lastStatement.indent.stop.column) {
    return context.lastStatement;
  }

  return findParentStatementWithLessIndent(context.lastStatement, indent);
}

function findParentStatementWithLessIndent(
  statement: StatementNode,
  indent: TextRange,
): StatementNode | Nothing {
  if (!statement.parent) {
    return nothing;
  }

  if (statement.parent.indent.stop.column < indent.stop.column) {
    return statement.parent;
  }

  return findParentStatementWithLessIndent(statement.parent, indent);
}
