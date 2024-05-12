import {formatStatement} from '../../../formatter/formatter';
import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Array2, Integer, Nothing} from '../../../lib/core';
import {TextRange} from '../../../util/resource/text/text-range';
import {SyntaxContext} from '../../syntax-context';
import {$Node, Node} from '../node';
import {SyntaxNode, syntaxNode} from '../syntax/syntax-node';
import {statementNodeCollapse} from './statement-node-collapse';

export interface StatementNode extends SyntaxNode {
  $: $Node.STATEMENT;
  // todo rename to 'parent: StatementNode | Nothing;'
  parentStatement: StatementNode | Nothing;
  indentLevel: Integer;
  indent: TextRange;
  formattedIndentColumn?: Integer | Nothing;
  children: Array2<Node>;
  item: Node;
  body: Array2<StatementNode>;
}

export function statementNode(context: SyntaxContext, children: Array2<Node>, indent: TextRange): StatementNode {
  const node = syntaxNode($Node.STATEMENT, {children});
  const parentStatement = context.parentStatement;
  const indentLevel = parentStatement ? parentStatement.indentLevel + 1 : 0;
  const item = children[0];

  const statement: StatementNode = {
    ...node,
    indent,
    indentLevel,
    parentStatement,
    item,
    body: [],
  };

  if (parentStatement) {
    parentStatement.body.push(statement);
  } else {
    context.statements.push(statement);
  }

  format(context, statement);

  return statement;
}

export function format(context: SyntaxContext, node: StatementNode) {
  formatStatement(context, node);
}

export function constructStatementNode(context: SyntaxContext, indent: TextRange): StatementNode {
  statementNodeCollapse(context);

  context.nodes
    .slice(1)
    .forEach((node) => context.issueManager.addError(node.range, ISSUE_MESSAGE.unexpectedExpression()));

  return statementNode(context, context.nodes, indent);
}
