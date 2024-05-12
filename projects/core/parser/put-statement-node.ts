import {Nothing, nothing} from '../lib/core';
import {TextRange} from '../util/resource/text/text-range';
import {StatementNode, constructStatementNode} from './node/statement/statement-node';
import {SyntaxContext} from './syntax-context';

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

function findParentStatementWithLessIndent(node: StatementNode, indent: TextRange): StatementNode | Nothing {
  if (!node.parentStatement) {
    return nothing;
  }

  if (node.parentStatement.indent.stop.column < indent.stop.column) {
    return node.parentStatement;
  }

  return findParentStatementWithLessIndent(node.parentStatement, indent);
}
