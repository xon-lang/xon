import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Array2, Integer, Nothing} from '../../../lib/core';
import {SyntaxContext} from '../../syntax-context';
import {$Node, Node} from '../node';
import {SyntaxNode, syntaxNode} from '../syntax/syntax-node';
import {TokenNode} from '../token/token-node';
import {statementNodeCollapse} from './statement-node-collapse';

export interface StatementNode extends SyntaxNode {
  $: $Node.STATEMENT;
  indentLevel: Integer;
  indentStopColumn: Integer;
  beforeIndentHiddenNodes: Array2<TokenNode>;
  indentHiddenNodes: Array2<TokenNode>;
  parentStatement: StatementNode | Nothing;
  children: Array2<Node>;
  item: Node;
  body: Array2<StatementNode>;
}

export function statementNode(
  context: SyntaxContext,
  children: Array2<Node>,
  parentStatement: StatementNode | Nothing,
  indentStopColumn: Integer,
  beforeIndentHiddenNodes: Array2<TokenNode>,
  indentHiddenNodes: Array2<TokenNode>,
): StatementNode {
  const node = syntaxNode($Node.STATEMENT, {children});

  children.last()!.hiddenNodes = node.hiddenNodes;

  const indentLevel = parentStatement ? parentStatement.indentLevel + 1 : 0;
  const item = children[0];

  const statement: StatementNode = {
    ...node,

    indentLevel,
    indentStopColumn,
    beforeIndentHiddenNodes,
    indentHiddenNodes,
    parentStatement: parentStatement,
    item,
    hiddenNodes: [],
    body: [],
  };

  return statement;
}

export function constructStatementNode(
  context: SyntaxContext,
  parent: StatementNode | Nothing,
  indentStopColumn: Integer,
  beforeIndentHiddenNodes: Array2<TokenNode>,
  indentHiddenNodes: Array2<TokenNode>,
): StatementNode {
  statementNodeCollapse(context);

  context.nodes
    .slice(1)
    .forEach((node) => context.issueManager.addError(node.range, ISSUE_MESSAGE.unexpectedExpression()));

  return statementNode(context, context.nodes, parent, indentStopColumn, beforeIndentHiddenNodes, indentHiddenNodes);
}
