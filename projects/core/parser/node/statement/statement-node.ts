import {formatStatementNode} from '../../../formatter/formatter';
import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Array2, Integer, Nothing} from '../../../lib/core';
import {TextRange} from '../../../util/resource/text/text-range';
import {SyntaxContext} from '../../syntax-context';
import {$Node, Node} from '../node';
import {SyntaxNode, syntaxNode} from '../syntax/syntax-node';
import {statementNodeCollapse} from './statement-node-collapse';

export interface StatementNode extends SyntaxNode {
  $: $Node.STATEMENT;
  parent: StatementNode | Nothing;
  indentLevel: Integer;
  indent: TextRange;
  children: Array2<Node>;
  item: Node;
  body: Array2<StatementNode>;
}

export function statementNode(context: SyntaxContext, children: Array2<Node>, indent: TextRange): StatementNode {
  const node = syntaxNode($Node.STATEMENT, {children});
  const parent = context.parentStatement;
  const indentLevel = parent ? parent.indentLevel + 1 : 0;
  const item = children[0];

  const statement: StatementNode = {
    ...node,
    indent,
    indentLevel,
    parent,
    item,
    body: [],
  };

  if (parent) {
    parent.body.push(statement);
  } else {
    context.statements.push(statement);
  }

  format(context, statement);

  return statement;
}

export function format(context: SyntaxContext, node: StatementNode) {
  formatStatementNode(context, node);
}

export function constructStatementNode(context: SyntaxContext, indent: TextRange): StatementNode {
  statementNodeCollapse(context);

  context.nodes
    .slice(1)
    .forEach((node) => context.issueManager.addError(node.range, ISSUE_MESSAGE.unexpectedExpression()));

  return statementNode(context, context.nodes, indent);
}
