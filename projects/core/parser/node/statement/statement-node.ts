import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Array2, Integer, Nothing} from '../../../lib/core';
import {SyntaxContext} from '../../syntax-context';
import {$Node, Node} from '../node';
import {SyntaxNode, syntaxNode} from '../syntax/syntax-node';
import {statementNodeCollapse} from './statement-node-collapse';

export interface StatementNode extends SyntaxNode {
  $: $Node.STATEMENT;
  parentStatement: StatementNode | Nothing;
  indentLevel: Integer;
  indentColumn: Integer;
  children: Array2<Node>;
  item: Node;
  body: Array2<StatementNode>;
}

export function statementNode(
  context: SyntaxContext,
  children: Array2<Node>,
  parentStatement: StatementNode | Nothing,
  indentColumn: Integer,
): StatementNode {
  const node = syntaxNode($Node.STATEMENT, {children});

  children.last()!.hiddenNodes = node.hiddenNodes;

  const indentLevel = parentStatement ? parentStatement.indentLevel + 1 : 0;
  const item = children[0];

  const statement: StatementNode = {
    ...node,

    indentColumn,
    indentLevel,
    parentStatement: parentStatement,
    item,
    hiddenNodes: [],
    body: [],
  };

  if (parentStatement) {
    parentStatement.body.push(statement);
  } else {
    context.statements.push(statement);
  }

  return statement;
}

export function format( context: SyntaxContext, node: StatementNode) {
  
}

export function constructStatementNode(
  context: SyntaxContext,
  parent: StatementNode | Nothing,
  indentColumn: Integer,
): StatementNode {
  statementNodeCollapse(context);

  context.nodes
    .slice(1)
    .forEach((node) => context.issueManager.addError(node.range, ISSUE_MESSAGE.unexpectedExpression()));

  return statementNode(context, context.nodes, parent, indentColumn);
}
