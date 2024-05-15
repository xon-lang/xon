import {formatStatementNode} from '../../../formatter/formatter';
import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Array2, Integer, Nothing} from '../../../lib/core';
import {TextRange, rangeFromNodes} from '../../../util/resource/text/text-range';
import {SyntaxContext} from '../../syntax-context';
import {$Node, Node} from '../node';
import {SyntaxNode} from '../syntax/syntax-node';
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
  const statement: StatementNode = {
    $: $Node.STATEMENT,
    range: rangeFromNodes(children),
    hiddenNodes: children[0].hiddenNodes,
    children,
    indent,
    indentLevel: (context.parentStatement?.indentLevel ?? -1) + 1,
    parent: context.parentStatement,
    item: children[0],
    body: [],
  };

  children[0].hiddenNodes = [];
  children.forEach((x) => (x.parent = statement));

  if (context.parentStatement) {
    context.parentStatement.body.push(statement);
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
